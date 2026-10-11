(function (root) {
  'use strict';
  const APP = 'ideology-translation-review';
  const STATUSES = { pending: '待审查', changes: '要改', approved: '已通过' };
  const keyOf = (batch, entry) => `${batch.id}/${entry.id}`;
  const alternativesOf = source => (source.alternatives || []).map(({ id, en, note }) => ({ id, en, note }));
  const choicesOf = entry => [{ id: 'original', en: entry.en }, ...alternativesOf(entry)];
  const sourceOf = (entry, section) => ({ zh: entry.zh, en: entry.en, note: entry.note || '', context: (section.notes || []).map(n => n.text).join('\n\n'), alternatives: alternativesOf(entry) });
  // Missing alternatives in older backups mean an empty list, not a changed source.
  const sameSource = (a, b) => !!a && ['zh', 'en', 'note', 'context'].every(k => a[k] === b[k])
    && JSON.stringify(alternativesOf(a)) === JSON.stringify(alternativesOf(b));

  function reviewOf(record, entry, section) {
    const stale = !!record && !sameSource(record.source, sourceOf(entry, section));
    const text = record?.draft ?? entry.en;
    return { status: stale ? 'pending' : record?.status || 'pending', note: record?.note || '',
      draft: record?.draft ?? null, text, stale, edited: record?.draft != null && record.draft !== entry.en,
      choiceId: choicesOf(entry).find(choice => choice.en === text)?.id || null };
  }

  function belongsOnPage(record, entry, section, status) {
    return reviewOf(record, entry, section).status === status;
  }

  function updateRecord(record, patch, entry, section, time = new Date().toISOString()) {
    const current = reviewOf(record, entry, section);
    const next = { status: current.status, note: current.note, draft: current.draft, ...patch,
      source: record?.source || sourceOf(entry, section), updatedAt: time };
    // A status decision explicitly acknowledges the current proposal. Editing a
    // previously approved wording reopens it; comments alone do not approve changes.
    if (Object.hasOwn(patch, 'status')) next.source = sourceOf(entry, section);
    if (Object.hasOwn(patch, 'draft')) {
      next.status = 'pending';
      if (patch.draft === entry.en) next.draft = null;
    }
    return next;
  }

  function validateBackup(value) {
    if (!value || value.app !== APP || value.version !== 1 || !value.reviews || typeof value.reviews !== 'object' || Array.isArray(value.reviews)) throw new Error('这不是本页导出的审查备份。');
    const entries = Object.entries(value.reviews);
    if (entries.length > 10000) throw new Error('备份中的记录过多。');
    for (const [key, r] of entries) {
      if (!/^[a-zA-Z0-9._-]+\/[a-zA-Z0-9._-]+$/.test(key) || !r || !Object.hasOwn(STATUSES, r.status)
        || typeof r.note !== 'string' || (r.draft !== null && typeof r.draft !== 'string')
        || typeof r.updatedAt !== 'string' || !Number.isFinite(Date.parse(r.updatedAt))
        || !r.source || ['zh', 'en', 'note', 'context'].some(k => typeof r.source[k] !== 'string')) throw new Error('备份格式不完整，现有记录未改动。');
      const alternatives = r.source.alternatives;
      if (alternatives !== undefined && (!Array.isArray(alternatives) || alternatives.length > 100
        || alternatives.some(a => !a || typeof a.id !== 'string' || a.id === 'original' || !/^[a-zA-Z0-9._-]+$/.test(a.id)
          || typeof a.en !== 'string' || !a.en.trim() || typeof a.note !== 'string')
        || new Set(alternatives.map(a => a.id)).size !== alternatives.length)) throw new Error('备份中的英文候选格式不完整，现有记录未改动。');
    }
    return value.reviews;
  }

  function mergeRecords(local, incoming) {
    const merged = { ...local };
    for (const [key, record] of Object.entries(incoming)) {
      if (!merged[key] || Date.parse(record.updatedAt) > Date.parse(merged[key].updatedAt)) merged[key] = record;
    }
    return merged;
  }

  function makeBackup(reviews) { return { app: APP, version: 1, exportedAt: new Date().toISOString(), reviews }; }
  function candidateFeedback(source) {
    return (source.alternatives || []).map(a => `\n\n同样可用的英文（${a.id}）：\n${a.en}\n选择说明：\n${a.note}`).join('');
  }
  function feedbackText(batches, reviews, time = new Date().toISOString()) {
    const groups = [];
    for (const b of batches) {
      const entries = [];
      for (const section of b.sections) for (const entry of section.entries) {
        const stored = reviews[keyOf(b, entry)]; if (!stored) continue;
        const r = reviewOf(stored, entry, section);
        if (r.status === 'pending' && !r.edited && !r.note && !r.stale) continue;
        entries.push(`### ${entry.id} · ${entry.label}\n\n- 批次 ID：${b.id}\n- 所在部分：${section.title}\n- 状态：${STATUSES[r.status]}${r.stale ? '（AI 原稿、候选或说明已更新，需重新确认）' : ''}\n- 更新时间：${stored.updatedAt}\n- 当前采用：${r.choiceId === 'original' ? '原建议' : r.choiceId ? '候选 ' + r.choiceId : '自定义英文'}\n\n中文原文：\n${entry.zh}\n\nAI 英文建议：\n${entry.en}${candidateFeedback(entry)}\n\n当前采用的英文：\n${r.text}\n\n我的批注：\n${r.note || '（无）'}${r.stale ? '\n\n上次审查的英文：\n' + stored.source.en + candidateFeedback(stored.source) : ''}\n\n原稿说明：\n${[entry.note, ...section.notes.map(n => n.text)].filter(Boolean).join('\n\n') || '（无）'}`);
      }
      if (entries.length) groups.push(`## ${b.title}\n\n${entries.join('\n\n---\n\n')}`);
    }
    return groups.length ? `# 中英文文案审查反馈\n\n导出时间：${time}\n\n以下是用户在本地审查页中的标记、选择、修改与批注。请结合状态逐条处理；“通过”仅指“当前采用的英文”，不代表通过全部候选。此文件不授权发布正式网站。\n\n${groups.join('\n\n')}` : null;
  }
  const api = { APP, STATUSES, keyOf, choicesOf, reviewOf, belongsOnPage, updateRecord, validateBackup, mergeRecords, makeBackup, feedbackText };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.ReviewCore = api;
})(typeof window === 'undefined' ? {} : window);
