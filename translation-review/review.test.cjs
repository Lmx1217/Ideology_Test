const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const C = require('./review-core.js');
const scope = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8'), scope);
const batches = scope.window.REVIEW_BATCHES;
const batch = batches[0], section = batch.sections[0], entry = section.entries[0];
const early = '2026-10-10T10:00:00.000Z', late = '2026-10-10T11:00:00.000Z';

test('all review batches have unique stable IDs, paired copy, and complete explanation fields', () => {
  assert.equal(new Set(batches.map(b => b.id)).size, batches.length);
  assert.ok(batch.sections.flatMap(s => s.entries).length >= 37);
  for (const b of batches) {
    assert.match(b.id, /^[a-zA-Z0-9._-]+$/);
    assert.equal(new Set(b.sections.map(s => s.id)).size, b.sections.length);
    const entries = b.sections.flatMap(s => s.entries);
    assert.equal(new Set(entries.map(e => e.id)).size, entries.length);
    for (const e of entries) {
      assert.match(e.id, /^[a-zA-Z0-9._-]+$/);
      assert.ok(e.zh.trim()); assert.ok(e.en.trim());
      assert.equal(typeof e.note, 'string');
      assert.equal(typeof e.priority, 'boolean');
      const choices = C.choicesOf(e);
      assert.equal(new Set(choices.map(c => c.id)).size, choices.length);
      assert.equal(new Set(choices.map(c => c.en)).size, choices.length);
      for (const alternative of e.alternatives || []) {
        assert.match(alternative.id, /^[a-zA-Z0-9._-]+$/);
        assert.ok(alternative.en.trim()); assert.ok(alternative.note.trim());
      }
    }
    for (const s of b.sections) for (const n of s.notes) assert.ok(n.text.trim());
  }
});

test('the selected answer path matches the source and reaches SocialDemocracy', () => {
  const questions = vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../logical.js'), 'utf8') + '\nquestions');
  let node = 'initial';
  for (const s of batch.sections.filter(s => /^q\d+$/.test(s.id))) {
    const q = questions[node];
    assert.equal(s.entries[0].zh, q.question);
    assert.deepEqual(s.entries.slice(1).map(e => e.zh).join('|'), Object.values(q.options).join('|'));
    const selected = s.entries.find(e => e.selected);
    node = q.next[selected.id.split('.')[1]];
  }
  assert.equal(node, 'SocialDemocracy');
});

test('editing an approved entry reopens it and keeps the note', () => {
  let r = C.updateRecord(null, { status: 'approved', note: '原意保留' }, entry, section, early);
  r = C.updateRecord(r, { draft: 'New wording' }, entry, section, late);
  assert.equal(r.status, 'pending'); assert.equal(r.note, '原意保留');
  assert.equal(C.reviewOf(r, entry, section).text, 'New wording');
});

test('status pages partition saved reviews, preserve drafts and notes, and reopen changed proposals', () => {
  const pagesFor = (record, copy = entry) => Object.keys(C.STATUSES).filter(status => C.belongsOnPage(record, copy, section, status));
  assert.deepEqual(pagesFor(null), ['pending']);
  let record = C.updateRecord(null, { draft: 'My wording', note: 'Keep this nuance' }, entry, section, early);
  for (const status of ['changes', 'approved', 'pending', 'approved']) {
    record = C.updateRecord(record, { status }, entry, section, late);
    const key = C.keyOf(batch, entry);
    record = C.validateBackup(JSON.parse(JSON.stringify(C.makeBackup({ [key]: record }))))[key];
    assert.deepEqual(pagesFor(record), [status]);
    assert.equal(record.draft, 'My wording');
    assert.equal(record.note, 'Keep this nuance');
  }
  assert.deepEqual(pagesFor(record, { ...entry, en: 'Updated proposal' }), ['pending']);
});

test('new AI copy invalidates approval without losing user edits, notes, or the old source', () => {
  const r = C.updateRecord(null, { status: 'approved', draft: 'My wording', note: 'Keep this nuance' }, entry, section, early);
  r.status = 'approved';
  const changed = { ...entry, en: 'A new proposal' };
  const view = C.reviewOf(r, changed, section);
  assert.equal(view.status, 'pending'); assert.equal(view.stale, true);
  assert.equal(view.text, 'My wording'); assert.equal(view.note, 'Keep this nuance');
  assert.equal(r.source.en, entry.en);
  const accepted = C.updateRecord(r, { status: 'approved' }, changed, section, late);
  assert.equal(C.reviewOf(accepted, changed, section).stale, false);
  assert.equal(accepted.draft, 'My wording');
});

test('a changed explanation also needs review; a new unrelated batch does not affect existing records', () => {
  const r = C.updateRecord(null, { status: 'approved' }, entry, section, early);
  assert.equal(C.reviewOf(r, entry, { ...section, notes: [{ text: 'Updated explanation' }] }).stale, true);
  assert.equal(C.reviewOf(r, entry, section).status, 'approved');
  assert.notEqual(C.keyOf({ id: 'another-batch' }, entry), C.keyOf(batch, entry));
});

test('backup round-trip preserves all records and merge keeps newer local changes', () => {
  const key = C.keyOf(batch, entry);
  const old = C.updateRecord(null, { note: 'old' }, entry, section, early);
  const recent = C.updateRecord(old, { note: 'new' }, entry, section, late);
  const backup = JSON.parse(JSON.stringify(C.makeBackup({ [key]: old, 'future-batch/X1': old })));
  const merged = C.mergeRecords({ [key]: recent }, C.validateBackup(backup));
  assert.equal(merged[key].note, 'new');
  assert.ok(merged['future-batch/X1']);
  assert.equal(C.validateBackup(C.makeBackup(merged))[key].note, 'new');
});

test('invalid imports are rejected before merging and an intentionally blank draft stays blank', () => {
  assert.throws(() => C.validateBackup({ app: C.APP, version: 9, reviews: {} }));
  assert.throws(() => C.validateBackup(C.makeBackup({ bad: { status: 'approved' } })));
  const r = C.updateRecord(null, { draft: '' }, entry, section, early);
  assert.equal(C.reviewOf(r, entry, section).text, '');
});

test('legacy reviews without alternatives retain their status unless candidates were added', () => {
  const original = { ...entry, alternatives: undefined };
  const record = C.updateRecord(null, { status: 'approved', note: '保留批注' }, original, section, early);
  delete record.source.alternatives;
  const key = C.keyOf(batch, entry);
  const restored = C.validateBackup(JSON.parse(JSON.stringify(C.makeBackup({ [key]: record }))))[key];
  assert.equal(C.reviewOf(restored, original, section).status, 'approved');
  assert.equal(C.reviewOf(restored, entry, section).status, 'pending');
  assert.equal(C.reviewOf(restored, entry, section).note, '保留批注');
  assert.equal(C.reviewOf(restored, original, section).stale, false);
});

test('three choices support selection, approval, custom edits, restoration, and backup round-trip', () => {
  const copy = { ...entry, alternatives: [
    ...entry.alternatives,
    { id: 'third-option', en: 'Third English candidate', note: 'Third candidate explanation' }
  ] };
  assert.equal(C.choicesOf(copy).length, 3);
  let record = C.updateRecord(null, { status: 'approved', note: '保留我的批注' }, copy, section, early);
  for (const choice of C.choicesOf(copy).slice(1)) {
    record = C.updateRecord(record, { draft: choice.en }, copy, section, late);
    assert.equal(C.reviewOf(record, copy, section).status, 'pending');
    assert.equal(C.reviewOf(record, copy, section).choiceId, choice.id);
    record = C.updateRecord(record, { status: 'approved' }, copy, section, late);
    const key = C.keyOf(batch, copy);
    record = C.validateBackup(JSON.parse(JSON.stringify(C.makeBackup({ [key]: record }))))[key];
    assert.equal(C.reviewOf(record, copy, section).text, choice.en);
    assert.equal(C.reviewOf(record, copy, section).status, 'approved');
  }
  record = C.updateRecord(record, { draft: 'My own version' }, copy, section, late);
  assert.equal(C.reviewOf(record, copy, section).choiceId, null);
  record = C.updateRecord(record, { draft: copy.en }, copy, section, late);
  assert.equal(record.draft, null);
  assert.equal(C.reviewOf(record, copy, section).choiceId, 'original');
  assert.equal(record.note, '保留我的批注');
});

test('changing or removing a candidate reopens review and preserves selected text and snapshot', () => {
  const chosen = entry.alternatives[0];
  let record = C.updateRecord(null, { draft: chosen.en, note: 'Keep this wording' }, entry, section, early);
  record = C.updateRecord(record, { status: 'approved' }, entry, section, early);
  for (const alternatives of [[], [{ ...chosen, en: 'Revised wording' }], [{ ...chosen, note: 'Revised explanation' }]]) {
    const view = C.reviewOf(record, { ...entry, alternatives }, section);
    assert.equal(view.status, 'pending'); assert.equal(view.stale, true);
    assert.equal(view.text, chosen.en); assert.equal(view.note, 'Keep this wording');
    assert.equal(record.source.alternatives[0].en, chosen.en);
    assert.equal(record.source.alternatives[0].note, chosen.note);
  }
});

test('malformed candidate snapshots are rejected, while legacy backups still import', () => {
  const key = C.keyOf(batch, entry);
  const record = C.updateRecord(null, { status: 'approved' }, entry, section, early);
  for (const alternatives of [null, {}, [null], [{ id: 'bad' }], [{ id: 'original', en: 'Text', note: '' }],
    [{ id: 'duplicate', en: 'Text', note: '' }, { id: 'duplicate', en: 'Other', note: '' }]]) {
    const bad = { ...record, source: { ...record.source, alternatives } };
    assert.throws(() => C.validateBackup(C.makeBackup({ [key]: bad })));
  }
});

test('feedback distinguishes the adopted wording from all candidates and retains stale snapshots', () => {
  const chosen = entry.alternatives[0];
  let record = C.updateRecord(null, { draft: chosen.en, note: 'I prefer this title' }, entry, section, early);
  record = C.updateRecord(record, { status: 'approved' }, entry, section, late);
  const reviews = { [C.keyOf(batch, entry)]: record };
  const feedback = C.feedbackText(batches, reviews, late);
  assert.ok(feedback.includes(`当前采用的英文：\n${chosen.en}`));
  assert.ok(feedback.includes(`候选 ${chosen.id}`));
  assert.ok(feedback.includes(chosen.note));
  assert.ok(feedback.includes('不代表通过全部候选'));
  assert.ok(feedback.includes('I prefer this title'));
  const changed = [{ ...batch, sections: [{ ...section, entries: [{ ...entry, alternatives: [] }] }] }];
  const updated = C.feedbackText(changed, reviews, late);
  assert.ok(updated.includes('需重新确认'));
  assert.ok(updated.includes('上次审查的英文：'));
  assert.ok(updated.includes(chosen.note));
  assert.equal(C.feedbackText(batches, {}), null);
});
