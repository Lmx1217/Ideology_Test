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

test('shared questions and options appear once without merging different image descriptions', () => {
  const contexts = batches.flatMap(b => b.sections.flatMap(s => s.entries.map(e => ({ b, s, e }))));
  const byKey = new Map(contexts.map(c => [C.keyOf(c.b, c.e), c]));
  const duplicates = contexts.filter(c => c.e.duplicateOf);
  assert.equal(duplicates.length, 6);
  for (const { e } of duplicates) {
    const original = byKey.get(e.duplicateOf);
    assert.ok(original, `Missing original for ${e.duplicateOf}`);
    assert.ok(!original.e.duplicateOf, 'References must point directly to a retained entry');
    assert.equal(e.zh, original.e.zh);
    assert.equal(e.en, original.e.en);
  }
  const visible = contexts.filter(({ s, e }) => C.belongsOnPage(null, e, s, 'pending'));
  const questionsAndOptions = visible.filter(({ e }) => /^Q\d/.test(e.id));
  // The same Chinese phrase can need different English in different contexts.
  assert.equal(new Set(questionsAndOptions.map(c => JSON.stringify([c.e.zh, c.e.en]))).size, questionsAndOptions.length);
  const originalBatches = new Set(['social-democracy-01', 'fascism-01']);
  assert.equal(visible.filter(c => originalBatches.has(c.b.id)).length, 50);
  assert.equal(visible.filter(c => c.e.id === 'X3').length, 2);

  // Identical copy can belong to different branch nodes; their source logic stays intact.
  const questions = vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../logical.js'), 'utf8') + '\nquestions');
  assert.equal(questions.people.question, questions.government.question);
  assert.equal(JSON.stringify(questions.people.options), JSON.stringify(questions.government.options));
  assert.notEqual(JSON.stringify(questions.people.next), JSON.stringify(questions.government.next));
});

test('deduplication preserves original decisions and legacy duplicate feedback through backup imports', () => {
  const originalSection = batch.sections.find(s => s.id === 'q1');
  const original = originalSection.entries[0];
  const other = batches.find(b => b.id === 'fascism-01');
  const duplicateSection = other.sections.find(s => s.id === 'q1');
  const duplicate = duplicateSection.entries[0];
  let accepted = C.updateRecord(null, { draft: 'My shared wording', note: 'Keep my comment' }, original, originalSection, early);
  accepted = C.updateRecord(accepted, { status: 'approved' }, original, originalSection, early);
  const legacy = C.updateRecord(null, { status: 'changes', note: 'Older duplicate comment' }, duplicate, duplicateSection, late);
  const reviews = { [C.keyOf(batch, original)]: accepted, [C.keyOf(other, duplicate)]: legacy };
  const restored = C.mergeRecords({}, C.validateBackup(JSON.parse(JSON.stringify(C.makeBackup(reviews)))));
  assert.deepEqual(restored, reviews);
  assert.equal(C.belongsOnPage(restored[C.keyOf(batch, original)], original, originalSection, 'approved'), true);
  assert.equal(C.belongsOnPage(restored[C.keyOf(batch, original)], original, originalSection, 'pending'), false);
  for (const status of Object.keys(C.STATUSES)) {
    assert.equal(C.belongsOnPage(null, duplicate, duplicateSection, status), false);
    assert.equal(C.belongsOnPage(legacy, duplicate, duplicateSection, status), false);
  }
  const feedback = C.feedbackText(batches, restored, late);
  assert.ok(feedback.includes('My shared wording'));
  assert.ok(feedback.includes('Keep my comment'));
  assert.ok(feedback.includes('Older duplicate comment'));
});

test('globalization support covers every downstream question, answer and result using exact source copy', () => {
  const current = batches.find(b => b.id === 'globalization-support-01');
  assert.ok(current && current.archived);
  const questions = vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../logical.js'), 'utf8') + '\nquestions');
  const questionNodes = new Set([current.scope.question]), resultNodes = new Set(), visited = new Set();
  function visit(node) {
    if (visited.has(node)) return;
    visited.add(node);
    const source = questions[node];
    assert.ok(source, `Missing source node ${node}`);
    if (source.question) {
      questionNodes.add(node);
      Object.values(source.next).forEach(visit);
    } else {
      assert.ok(source.result);
      resultNodes.add(node);
    }
  }
  assert.equal(current.scope.question, 'individual');
  assert.equal(questions.individual.options[current.scope.option], '支持');
  visit(questions.individual.next[current.scope.option]);
  assert.equal(questionNodes.size, 9); // Entry question plus eight downstream questions.
  assert.equal(resultNodes.size, 9);
  assert.deepEqual(Object.keys(current.copyRefs).sort(), [...questionNodes].sort());
  assert.deepEqual(Object.keys(current.resultRefs).sort(), [...resultNodes].sort());
  const byKey = new Map(batches.flatMap(b => b.sections.flatMap(s => s.entries.map(e => [C.keyOf(b, e), e]))));
  function sourceFor(key) {
    const copy = byKey.get(key);
    assert.ok(copy && !copy.duplicateOf, `Invalid shared reference ${key}`);
    return copy;
  }
  const used = new Set(), sharedAnswers = new Map();
  for (const node of questionNodes) {
    const source = questions[node], refs = current.copyRefs[node];
    used.add(refs.question);
    assert.equal(sourceFor(refs.question).zh, source.question);
    assert.deepEqual(Object.keys(refs.options).sort(), Object.keys(source.options).sort());
    for (const [option, zh] of Object.entries(source.options)) {
      const key = refs.options[option];
      used.add(key);
      assert.equal(sourceFor(key).zh, zh);
      if (zh === '是' || zh === '否') {
        if (sharedAnswers.has(zh)) assert.equal(key, sharedAnswers.get(zh));
        sharedAnswers.set(zh, key);
      }
    }
  }
  for (const node of resultNodes) {
    const key = current.resultRefs[node];
    used.add(key);
    assert.equal(sourceFor(key).zh, questions[node].result);
  }
  const entries = current.sections.flatMap(s => s.entries);
  assert.equal(entries.length, 33);
  assert.ok(entries.every(e => used.has(C.keyOf(current, e))));
  assert.equal(current.copyRefs.env.options['1'], 'monarchism-01/Q6.1');
  assert.equal(current.copyRefs.env.options['2'], 'integralism-01/Q4.2');
  // Identical Chinese does not merge a land-ownership choice with a stance on globalization.
  const stance = sourceFor(current.copyRefs.individual.options['3']);
  const land = sourceFor('fascism-01/Q3.4');
  assert.equal(stance.zh, land.zh);
  assert.notEqual(stance.en, land.en);
});

test('land ownership branches cover all reachable copy and reuse previously reviewed entries', () => {
  const current = batches.find(b => b.id === 'land-individual-indifferent-01');
  assert.ok(current && current.archived);
  const questions = vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../logical.js'), 'utf8') + '\nquestions');
  assert.equal(current.scope.question, 'economic');
  assert.equal(current.scope.includeEntryQuestion, true);
  assert.equal(current.scope.options.join('|'), '3|4');
  assert.equal(questions.economic.options['3'], '个人');
  assert.equal(questions.economic.options['4'], '都可以，无所谓');
  const questionNodes = new Set(['economic']), resultNodes = new Set(), visited = new Set();
  function visit(node) {
    if (visited.has(node)) return;
    visited.add(node);
    const source = questions[node];
    assert.ok(source, `Missing source node ${node}`);
    if (source.question) {
      questionNodes.add(node);
      Object.values(source.next).forEach(visit);
    } else {
      assert.ok(source.result);
      resultNodes.add(node);
    }
  }
  current.scope.options.forEach(option => visit(questions.economic.next[option]));
  assert.equal(questionNodes.size, 18);
  assert.equal(resultNodes.size, 20);
  assert.deepEqual(Object.keys(current.copyRefs).sort(), [...questionNodes].sort());
  assert.deepEqual(Object.keys(current.resultRefs).sort(), [...resultNodes].sort());
  assert.ok(!visited.has('state') && !visited.has('organization'));
  const byKey = new Map(batches.flatMap(b => b.sections.flatMap(s => s.entries.map(e => [C.keyOf(b, e), e]))));
  function sourceFor(key) {
    const copy = byKey.get(key);
    assert.ok(copy && !copy.duplicateOf, `Invalid shared reference ${key}`);
    return copy;
  }
  const used = new Set();
  for (const node of questionNodes) {
    const source = questions[node], refs = current.copyRefs[node];
    used.add(refs.question);
    assert.equal(sourceFor(refs.question).zh, source.question);
    assert.deepEqual(Object.keys(refs.options).sort(), Object.keys(source.options).sort());
    for (const [option, zh] of Object.entries(source.options)) {
      used.add(refs.options[option]);
      assert.equal(sourceFor(refs.options[option]).zh, zh);
    }
  }
  for (const node of resultNodes) {
    used.add(current.resultRefs[node]);
    assert.equal(sourceFor(current.resultRefs[node]).zh, questions[node].result);
  }
  assert.equal(current.copyRefs.notcare.question, current.copyRefs.redu.question);
  assert.equal(current.copyRefs.notcare.options['1'], current.copyRefs.redu.options['2']);
  for (const node of ['indifferent', 'change']) {
    assert.equal(current.copyRefs[node].options['1'], current.copyRefs.env.options['1']);
    assert.equal(current.copyRefs[node].options['2'], current.copyRefs.env.options['2']);
  }
  for (const option of ['1', '2']) {
    assert.equal(current.copyRefs.statusQuo.options[option], current.copyRefs.individual.options[option]);
  }
  const old = batches.find(b => b.id === 'globalization-support-01');
  for (const node of Object.keys(old.copyRefs)) assert.equal(JSON.stringify(current.copyRefs[node]), JSON.stringify(old.copyRefs[node]));
  for (const node of Object.keys(old.resultRefs)) assert.equal(current.resultRefs[node], old.resultRefs[node]);
  const entries = current.sections.flatMap(s => s.entries);
  assert.equal(entries.length, 27);
  assert.equal(entries.filter(e => e.label === '题目').length, 7);
  assert.equal(entries.filter(e => e.label.startsWith('选项')).length, 9);
  assert.equal(entries.filter(e => e.label === '结果').length, 11);
  const previousCopy = new Set(batches.filter(b => b !== current).flatMap(b => b.sections.flatMap(s => s.entries.map(e => JSON.stringify([e.zh, e.en])))));
  assert.ok(entries.every(e => used.has(C.keyOf(current, e)) && !previousCopy.has(JSON.stringify([e.zh, e.en]))));
  const typo = sourceFor(current.copyRefs.disglob.options['2']);
  assert.equal(typo.zh, '都差不多不');
  assert.ok(typo.priority && typo.note.includes('疑似'));
  const white = sourceFor(current.resultRefs.WhiteNationalism);
  assert.equal(white.en, 'Your result: White Supremacy');
  assert.ok(white.priority && white.note.includes('White Nationalism'));
});

test('economic branches cover all reachable copy without resubmitting previously reviewed answers', () => {
  const current = batches.find(b => b.id === 'economic-market-mixed-indifferent-01');
  assert.ok(current && current.archived);
  const questions = vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../logical.js'), 'utf8') + '\nquestions');
  assert.equal(current.scope.question, 'equality');
  assert.equal(current.scope.includeEntryQuestion, true);
  assert.equal(current.scope.options.join('|'), '1|3|4');
  assert.equal(current.scope.options.map(option => questions.equality.options[option]).join('|'), '市场经济|混合计划经济和市场经济|无所谓');
  const questionNodes = new Set(['equality']), resultNodes = new Set(), visited = new Set();
  function visit(node) {
    if (visited.has(node)) return;
    visited.add(node);
    const source = questions[node];
    assert.ok(source, `Missing source node ${node}`);
    if (source.question) {
      questionNodes.add(node);
      Object.values(source.next).forEach(visit);
    } else {
      assert.ok(source.result);
      resultNodes.add(node);
    }
  }
  current.scope.options.forEach(option => visit(questions.equality.next[option]));
  assert.equal(questionNodes.size, 5);
  assert.equal(resultNodes.size, 7);
  assert.ok(!visited.has('command'));
  assert.deepEqual(Object.keys(current.copyRefs).sort(), [...questionNodes].sort());
  assert.deepEqual(Object.keys(current.resultRefs).sort(), [...resultNodes].sort());
  const byKey = new Map(batches.flatMap(b => b.sections.flatMap(s => s.entries.map(e => [C.keyOf(b, e), e]))));
  const used = new Set();
  function sourceFor(key) {
    const copy = byKey.get(key);
    assert.ok(copy && !copy.duplicateOf, `Invalid shared reference ${key}`);
    used.add(key);
    return copy;
  }
  for (const node of questionNodes) {
    const source = questions[node], refs = current.copyRefs[node];
    assert.equal(sourceFor(refs.question).zh, source.question);
    assert.deepEqual(Object.keys(refs.options).sort(), Object.keys(source.options).sort());
    for (const [option, zh] of Object.entries(source.options)) assert.equal(sourceFor(refs.options[option]).zh, zh);
  }
  for (const node of resultNodes) assert.equal(sourceFor(current.resultRefs[node]).zh, questions[node].result);
  assert.equal(current.copyRefs.intervene.options['1'], 'monarchism-01/Q6.1');
  assert.equal(current.copyRefs.intervene.options['2'], 'integralism-01/Q4.2');
  const entries = current.sections.flatMap(s => s.entries);
  assert.equal(entries.length, 22);
  assert.equal(entries.filter(e => e.label === '题目').length, 5);
  assert.equal(entries.filter(e => e.label.startsWith('选项')).length, 10);
  assert.equal(entries.filter(e => e.label === '结果').length, 7);
  assert.equal(new Set(entries.map(e => e.zh)).size, entries.length);
  const previousCopy = new Set(batches.filter(b => b !== current).flatMap(b => b.sections.flatMap(s => s.entries.filter(e => !e.duplicateOf).map(e => e.zh))));
  assert.ok(entries.every(e => used.has(C.keyOf(current, e)) && !previousCopy.has(e.zh)));
  const typo = sourceFor(current.copyRefs.intervene.question);
  assert.ok(typo.priority && typo.note.includes('疑似'));
  const monarchy = sourceFor(current.resultRefs.EnlightenedAbsolutism);
  assert.ok(monarchy.priority && monarchy.note.includes('EnlightenedAbsolutism'));
});

test('planned economy review covers exactly its reachable graph and reuses the reviewed entry question', () => {
  const current = batches.find(b => b.id === 'economic-planned-01');
  assert.ok(current && current.archived);
  const questions = vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../logical.js'), 'utf8') + '\nquestions');
  assert.equal(current.scope.question, 'equality');
  assert.equal(current.scope.includeEntryQuestion, true);
  assert.equal(current.scope.options.join('|'), '2');
  assert.equal(questions.equality.options[current.scope.options[0]], '计划经济');
  const questionNodes = new Set(['equality']), resultNodes = new Set(), visited = new Set();
  function visit(node) {
    if (visited.has(node)) return;
    visited.add(node);
    const source = questions[node];
    assert.ok(source, `Missing source node ${node}`);
    if (source.question) {
      questionNodes.add(node);
      Object.values(source.next).forEach(visit);
    } else {
      assert.ok(source.result);
      resultNodes.add(node);
    }
  }
  current.scope.options.forEach(option => visit(questions.equality.next[option]));
  assert.equal(questionNodes.size, 15);
  assert.equal(resultNodes.size, 19);
  assert.ok(['market', 'mixed', 'notall'].every(node => !visited.has(node)));
  assert.deepEqual(Object.keys(current.copyRefs).sort(), [...questionNodes].sort());
  assert.deepEqual(Object.keys(current.resultRefs).sort(), [...resultNodes].sort());
  const previous = batches.filter(b => b !== current);
  const byKey = new Map(batches.flatMap(b => b.sections.flatMap(s => s.entries.map(e => [C.keyOf(b, e), e]))));
  const used = new Set();
  function sourceFor(key) {
    const copy = byKey.get(key);
    assert.ok(copy && !copy.duplicateOf, `Invalid shared reference ${key}`);
    used.add(key);
    return copy;
  }
  for (const node of questionNodes) {
    const source = questions[node], refs = current.copyRefs[node];
    assert.equal(sourceFor(refs.question).zh, source.question);
    assert.deepEqual(Object.keys(refs.options).sort(), Object.keys(source.options).sort());
    for (const [option, zh] of Object.entries(source.options)) assert.equal(sourceFor(refs.options[option]).zh, zh);
  }
  for (const node of resultNodes) assert.equal(sourceFor(current.resultRefs[node]).zh, questions[node].result);
  const old = batches.find(b => b.id === 'economic-market-mixed-indifferent-01');
  assert.equal(JSON.stringify(current.copyRefs.equality), JSON.stringify(old.copyRefs.equality));
  assert.equal(current.copyRefs.rebui.options['1'], 'monarchism-01/Q6.1');
  assert.equal(current.copyRefs.rebui.options['2'], 'integralism-01/Q4.2');
  const entries = current.sections.flatMap(s => s.entries);
  assert.equal(entries.length, 63);
  assert.equal(entries.filter(e => e.label === '题目').length, 14);
  assert.equal(entries.filter(e => e.label.startsWith('选项')).length, 30);
  assert.equal(entries.filter(e => e.label === '结果').length, 19);
  assert.equal(new Set(entries.map(e => e.zh)).size, entries.length);
  const previousCopy = new Set(previous.flatMap(b => b.sections.flatMap(s => s.entries.filter(e => !e.duplicateOf).map(e => e.zh))));
  assert.ok(entries.every(e => used.has(C.keyOf(current, e)) && !previousCopy.has(e.zh)));
});

test('both violence response branches include every reachable question, answer and result exactly once', () => {
  const current = batches.find(b => b.id === 'violence-retaliation-not-priority-01');
  assert.ok(current && current.archived);
  const questions = vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../logical.js'), 'utf8') + '\nquestions');
  assert.equal(current.scope.question, 'should2');
  assert.equal(current.scope.includeEntryQuestion, true);
  assert.equal(current.scope.options.join('|'), '1|2');
  assert.equal(questions.should2.question, '对于已经发生在了自己身上的暴力事件？');
  assert.equal(questions.should2.options['1'], '强烈支持用自己的武器反击、报复');
  assert.equal(questions.should2.options['2'], '这个问题不是重点');
  const questionNodes = new Set(['should2']), resultNodes = new Set(), visited = new Set();
  function visit(node) {
    if (visited.has(node)) return;
    visited.add(node);
    const source = questions[node];
    assert.ok(source, `Missing source node ${node}`);
    if (source.question) {
      questionNodes.add(node);
      Object.values(source.next).forEach(visit);
    } else {
      assert.ok(source.result);
      resultNodes.add(node);
    }
  }
  current.scope.options.forEach(option => visit(questions.should2.next[option]));
  assert.equal(questionNodes.size, 16);
  assert.equal(resultNodes.size, 19);
  assert.ok(['initial', 'people', 'economic2', 'minimum', 'shouldnot2'].every(node => !visited.has(node)));
  assert.deepEqual(Object.keys(current.copyRefs).sort(), [...questionNodes].sort());
  assert.deepEqual(Object.keys(current.resultRefs).sort(), [...resultNodes].sort());
  const previous = batches.filter(b => b !== current);
  const byKey = new Map(batches.flatMap(b => b.sections.flatMap(s => s.entries.map(e => [C.keyOf(b, e), e]))));
  const used = new Set();
  function sourceFor(key) {
    const copy = byKey.get(key);
    assert.ok(copy && !copy.duplicateOf, `Invalid shared reference ${key}`);
    used.add(key);
    return copy;
  }
  for (const node of questionNodes) {
    const source = questions[node], refs = current.copyRefs[node];
    assert.equal(sourceFor(refs.question).zh, source.question);
    assert.deepEqual(Object.keys(refs.options).sort(), Object.keys(source.options).sort());
    for (const [option, zh] of Object.entries(source.options)) assert.equal(sourceFor(refs.options[option]).zh, zh);
  }
  for (const node of resultNodes) assert.equal(sourceFor(current.resultRefs[node]).zh, questions[node].result);
  assert.equal(current.copyRefs.portect.question, 'monarchism-01/Q6');
  assert.equal(current.copyRefs.portect.options['3'], 'economic-market-mixed-indifferent-01/Q1.4');
  assert.equal(current.copyRefs.currencyissuance.options['1'], 'globalization-support-01/Q1.1');
  for (const node of questionNodes) for (const [option, zh] of Object.entries(questions[node].options)) {
    if (zh === '是') assert.equal(current.copyRefs[node].options[option], 'monarchism-01/Q6.1');
    if (zh === '否') assert.equal(current.copyRefs[node].options[option], 'integralism-01/Q4.2');
  }
  const entries = current.sections.flatMap(s => s.entries);
  assert.equal(entries.length, 52);
  assert.equal(entries.filter(e => e.label === '题目').length, 15);
  assert.equal(entries.filter(e => e.label.startsWith('选项')).length, 18);
  assert.equal(entries.filter(e => e.label === '结果').length, 19);
  assert.equal(new Set(entries.map(e => e.zh)).size, entries.length);
  const previousCopy = new Set(previous.flatMap(b => b.sections.flatMap(s => s.entries.filter(e => !e.duplicateOf).map(e => e.zh))));
  assert.ok(entries.every(e => used.has(C.keyOf(current, e)) && !previousCopy.has(e.zh)));
  assert.ok(entries.every(e => !e.selected));
  const downloaded = C.makeCurrentBackup(batches, {});
  assert.ok(Object.keys(downloaded.reviews).every(key => !key.startsWith(`${current.id}/`)));
});

test('means of production covers all three branches without resubmitting approved copy', () => {
  const current = batches.find(b => b.id === 'means-of-production-01');
  assert.ok(current && current.archived);
  assert.ok(batches.find(b => b.id === 'personal-freedom-01').archived);
  assert.equal(current.scope.question, 'should');
  assert.equal(current.scope.includeEntryQuestion, true);
  assert.equal(current.scope.options.join('|'), '1|2|3');
  const questions = vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../logical.js'), 'utf8') + '\nquestions');
  const questionNodes = new Set(), resultNodes = new Set(), visited = new Set();
  function visit(node) {
    if (visited.has(node)) return;
    visited.add(node);
    const source = questions[node];
    assert.ok(source, `Missing source node ${node}`);
    if (source.question) {
      questionNodes.add(node);
      Object.values(source.next).forEach(visit);
    } else {
      assert.ok(source.result);
      resultNodes.add(node);
    }
  }
  visit(current.scope.question);
  assert.equal(questionNodes.size, 11);
  assert.equal([...questionNodes].reduce((sum, node) => sum + Object.keys(questions[node].options).length, 0), 26);
  assert.equal(resultNodes.size, 16);
  assert.ok(['initial', 'equality2', 'shouldnot', 'should2', 'retaliation'].every(node => !visited.has(node)));
  assert.deepEqual(Object.keys(current.copyRefs).sort(), [...questionNodes].sort());
  assert.deepEqual(Object.keys(current.resultRefs).sort(), [...resultNodes].sort());
  const byKey = new Map(batches.flatMap(b => b.sections.flatMap(s => s.entries.map(e => [C.keyOf(b, e), e]))));
  const used = new Set(), sourceVariants = [];
  function sourceFor(key) {
    const copy = byKey.get(key);
    assert.ok(copy && !copy.duplicateOf, `Invalid shared reference ${key}`);
    used.add(key);
    return copy;
  }
  for (const node of questionNodes) {
    const source = questions[node], refs = current.copyRefs[node];
    assert.equal(sourceFor(refs.question).zh, source.question);
    assert.deepEqual(Object.keys(refs.options).sort(), Object.keys(source.options).sort());
    for (const [option, zh] of Object.entries(source.options)) {
      const copy = sourceFor(refs.options[option]);
      const variant = current.sourceVariants[node]?.options?.[option];
      if (variant) {
        assert.equal(variant.zh, zh);
        assert.ok(variant.note.trim());
        assert.notEqual(copy.zh, zh);
        assert.ok(!refs.options[option].startsWith(`${current.id}/`));
        sourceVariants.push(`${node}/${option}`);
      } else assert.equal(copy.zh, zh);
    }
  }
  assert.deepEqual(sourceVariants.sort(), ['strike/2', 'union/1']);
  for (const node of resultNodes) assert.equal(sourceFor(current.resultRefs[node]).zh, questions[node].result);
  assert.equal(current.copyRefs.should.question, 'social-democracy-01/Q4');
  assert.equal(current.copyRefs.minimum.question, 'violence-retaliation-not-priority-01/Q1');
  assert.ok(current.copyRefs.minimum.options['1'].startsWith(`${current.id}/`));
  assert.equal(current.copyRefs.public.options['1'], 'fascism-01/Q3.1');
  assert.equal(current.copyRefs.union.options['1'], 'economic-planned-01/Q10.1');
  assert.equal(current.copyRefs.strike.options['1'], 'economic-planned-01/Q3.1');
  assert.equal(current.copyRefs.strike.options['2'], 'integralism-01/Q4.2');
  assert.equal(current.resultRefs.SocialDemocracy, 'social-democracy-01/R1');
  const previous = batches.filter(b => b !== current);
  const previousCopy = new Set(previous.flatMap(b => b.sections.flatMap(s => s.entries.filter(e => !e.duplicateOf).map(e => e.zh))));
  const entries = current.sections.flatMap(s => s.entries);
  assert.equal(entries.length, 29);
  assert.equal(entries.filter(e => e.label === '题目').length, 6);
  assert.equal(entries.filter(e => e.label.startsWith('选项')).length, 8);
  assert.equal(entries.filter(e => e.label === '结果').length, 15);
  assert.equal(new Set(entries.map(e => e.zh)).size, entries.length);
  assert.ok(entries.every(e => used.has(C.keyOf(current, e)) && !previousCopy.has(e.zh)));
  assert.ok(entries.every(e => !e.selected));
  const downloaded = C.makeCurrentBackup(batches, {});
  assert.ok(Object.keys(downloaded.reviews).every(key => !key.startsWith(`${current.id}/`)));
});

test('free market includes both complete branches and reuses approved answers with their original polarity', () => {
  const current = batches.find(b => b.id === 'free-market-01');
  assert.ok(current && !current.archived);
  assert.deepEqual(Array.from(batches.filter(b => !b.archived), b => b.id), [current.id]);
  assert.ok(batches.filter(b => b !== current).every(b => b.archived));
  assert.equal(current.scope.question, 'shouldnot');
  assert.equal(current.scope.includeEntryQuestion, true);
  assert.equal(current.scope.options.join('|'), '1|2');
  const questions = vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../logical.js'), 'utf8') + '\nquestions');
  assert.equal(questions.shouldnot.question, '你是否支持在社会中应该有自由市场？');
  const questionNodes = new Set(), resultNodes = new Set(), visited = new Set();
  function visit(node) {
    if (visited.has(node)) return;
    visited.add(node);
    const source = questions[node];
    assert.ok(source, `Missing source node ${node}`);
    if (source.question) {
      questionNodes.add(node);
      assert.deepEqual(Object.keys(source.next).sort(), Object.keys(source.options).sort());
      Object.values(source.next).forEach(visit);
    } else {
      assert.ok(source.result);
      resultNodes.add(node);
    }
  }
  visit(current.scope.question);
  assert.equal(questionNodes.size, 9);
  assert.equal([...questionNodes].reduce((sum, node) => sum + Object.keys(questions[node].options).length, 0), 19);
  assert.equal(resultNodes.size, 11);
  assert.ok(['initial', 'should', 'minimum', 'should2', 'shouldnot2', 'agreefreemarket'].every(node => !visited.has(node)));
  assert.deepEqual(Object.keys(current.copyRefs).sort(), [...questionNodes].sort());
  assert.deepEqual(Object.keys(current.resultRefs).sort(), [...resultNodes].sort());
  const byKey = new Map(batches.flatMap(b => b.sections.flatMap(s => s.entries.map(e => [C.keyOf(b, e), e]))));
  const used = new Set(), sourceVariants = [], sharedOptions = [];
  function sourceFor(key) {
    const copy = byKey.get(key);
    assert.ok(copy && !copy.duplicateOf, `Invalid shared reference ${key}`);
    used.add(key);
    return copy;
  }
  for (const node of questionNodes) {
    const source = questions[node], refs = current.copyRefs[node];
    assert.equal(sourceFor(refs.question).zh, source.question);
    assert.deepEqual(Object.keys(refs.options).sort(), Object.keys(source.options).sort());
    for (const [option, zh] of Object.entries(source.options)) {
      const copy = sourceFor(refs.options[option]);
      const variant = current.sourceVariants[node]?.options?.[option];
      if (variant) {
        assert.equal(variant.zh, zh);
        assert.ok(variant.note.trim());
        assert.notEqual(copy.zh, zh);
        assert.ok(!refs.options[option].startsWith(`${current.id}/`));
        sourceVariants.push(`${node}/${option}`);
      } else assert.equal(copy.zh, zh);
      if (!refs.options[option].startsWith(`${current.id}/`)) sharedOptions.push(`${node}/${option}`);
    }
  }
  assert.deepEqual(sourceVariants.sort(), ['key/2', 'socie/1', 'socie/2']);
  assert.equal(sharedOptions.length, 10);
  for (const node of resultNodes) assert.equal(sourceFor(current.resultRefs[node]).zh, questions[node].result);
  assert.equal(current.copyRefs.nofree.options['1'], 'fascism-01/Q3.3');
  assert.equal(current.copyRefs.key.options['2'], 'violence-retaliation-not-priority-01/Q1.2');
  // The negative question must keep Yes = oppose and No = do not oppose.
  assert.equal(sourceFor(current.copyRefs.socie.question).en, 'Do you oppose violent revolution?');
  assert.equal(sourceFor(current.copyRefs.socie.options['1']).en, 'Yes');
  assert.equal(sourceFor(current.copyRefs.socie.options['2']).en, 'No');
  assert.equal(questions.socie.next['1'], 'noviol');
  assert.equal(questions.socie.next['2'], 'viol');
  const entries = current.sections.flatMap(s => s.entries);
  assert.equal(entries.length, 29);
  assert.equal(entries.filter(e => e.label === '题目').length, 9);
  assert.equal(entries.filter(e => e.label.startsWith('选项')).length, 9);
  assert.equal(entries.filter(e => e.label === '结果').length, 11);
  const previousCopy = new Set(batches.filter(b => b !== current).flatMap(b => b.sections.flatMap(s => s.entries.filter(e => !e.duplicateOf).map(e => e.zh))));
  assert.equal(new Set(entries.map(e => e.zh)).size, entries.length);
  assert.ok(entries.every(e => used.has(C.keyOf(current, e)) && !previousCopy.has(e.zh)));
  assert.ok(entries.every(e => !e.selected));
  const downloaded = C.makeCurrentBackup(batches, {});
  assert.equal(Object.keys(downloaded.reviews).length, entries.length);
  assert.ok(Object.keys(downloaded.reviews).every(key => key.startsWith(`${current.id}/`)));
});

test('download backups contain all retained copy across status pages and exclude retired records', () => {
  const current = batches.find(b => !b.archived);
  const contexts = current.sections.flatMap(s => s.entries.filter(e => !e.duplicateOf).map(e => ({ section: s, entry: e })));
  const copies = contexts.slice(0, 3);
  const reviews = {};
  for (const [index, status] of Object.keys(C.STATUSES).entries()) {
    const context = copies[index];
    reviews[C.keyOf(current, context.entry)] = C.updateRecord(null, { status, note: `note ${status}` }, context.entry, context.section, early);
  }
  const key = C.keyOf(current, copies[0].entry);
  reviews[key] = C.updateRecord(reviews[key], { draft: 'My English' }, copies[0].entry, copies[0].section, late);
  // Also preserve the snapshot of an active entry whose source has changed.
  reviews[key].source.en = 'Earlier English';
  reviews[C.keyOf(batch, entry)] = C.updateRecord(null, { status: 'approved', note: 'Retired comment' }, entry, section, early);
  reviews['deleted-batch/X1'] = reviews[C.keyOf(batch, entry)];
  const originalRecords = JSON.stringify(reviews);
  const downloaded = C.makeCurrentBackup(batches, reviews, late);
  const restored = C.validateBackup(JSON.parse(JSON.stringify(downloaded)));
  const retained = current.sections.flatMap(s => s.entries).filter(e => !e.duplicateOf);
  assert.equal(Object.keys(restored).length, retained.length);
  assert.ok(retained.length > 0);
  assert.ok(Object.keys(restored).every(k => k.startsWith(`${current.id}/`)));
  assert.equal(JSON.stringify(reviews), originalRecords, 'Downloading must not change local or historical records');
  assert.equal(JSON.stringify(restored[key]), JSON.stringify(reviews[key]));
  for (const [index, status] of Object.keys(C.STATUSES).entries()) {
    assert.equal(restored[C.keyOf(current, copies[index].entry)].status, status);
    assert.equal(restored[C.keyOf(current, copies[index].entry)].note, `note ${status}`);
  }
  const { section: untouchedSection, entry: untouched } = contexts[3];
  const untouchedKey = C.keyOf(current, untouched);
  assert.equal(restored[untouchedKey].source.en, untouched.en);
  assert.equal(restored[untouchedKey].status, 'pending');
  assert.equal(restored[untouchedKey].updatedAt, '1970-01-01T00:00:00.000Z');
  const decision = C.updateRecord(null, { status: 'approved', note: 'Real decision' }, untouched, untouchedSection, early);
  assert.equal(C.mergeRecords({ [untouchedKey]: decision }, restored)[untouchedKey], decision, 'Untouched exported copy must not overwrite a real decision on import');
  const duplicate = { ...untouched, id: 'legacy-duplicate', duplicateOf: untouchedKey };
  const augmented = [{ ...current, sections: [{ ...untouchedSection, entries: [untouched, duplicate] }] }];
  const withDuplicate = { ...reviews, [C.keyOf(current, duplicate)]: decision };
  assert.deepEqual(Object.keys(C.makeCurrentBackup(augmented, withDuplicate).reviews), [untouchedKey]);
  assert.deepEqual(C.makeCurrentBackup([], reviews).reviews, {});
  const appSource = fs.readFileSync(path.join(__dirname, 'app.js'), 'utf8');
  assert.match(appSource, /JSON\.stringify\(C\.makeCurrentBackup\(batches, reviews\)/);
  assert.match(appSource, /localStorage\.setItem\(STORAGE_KEY, JSON\.stringify\(C\.makeBackup\(reviews\)\)\)/);
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
