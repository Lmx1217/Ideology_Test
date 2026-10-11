(() => {
  'use strict';
  const C = window.ReviewCore;
  const batches = window.REVIEW_BATCHES;
  const STORAGE_KEY = `${C.APP}:v1`;
  const $ = id => document.getElementById(id);
  const escape = text => String(text).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]));
  const contexts = new Map(batches.flatMap(batch => batch.sections.flatMap(section =>
    section.entries.map(entry => [C.keyOf(batch, entry), { batch, section, entry }]))));
  let reviews = {}, canSave = true, hasUnsaved = false, toastTimer;
  const editing = new Set(), commenting = new Set();
  const pageFromHash = () => {
    const status = location.hash.slice(2);
    return location.hash.startsWith('#/') && Object.hasOwn(C.STATUSES, status) ? status : null;
  };
  let pageStatus = pageFromHash() || 'pending';

  function storageWarning(message) { $('storage-warning').hidden = false; $('storage-warning').textContent = message; }
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) reviews = C.validateBackup(JSON.parse(saved));
  } catch {
    canSave = false;
    storageWarning('无法读取浏览器中的审查记录。已有数据不会被覆盖；本次修改会暂存在此页，请用“备份与导入”下载保存。');
  }

  function persist() {
    try {
      if (!canSave) throw new Error('Storage unavailable');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(C.makeBackup(reviews)));
      hasUnsaved = false;
      $('save-status').textContent = '已保存到此浏览器';
    } catch {
      hasUnsaved = true;
      $('save-status').textContent = '暂存于此页，请下载备份';
      storageWarning('浏览器目前无法保存记录。请在关闭此页前下载备份，避免丢失本次修改。');
    }
  }
  if (!canSave) $('save-status').textContent = '暂存于此页，请下载备份';

  function notify(message) {
    clearTimeout(toastTimer);
    $('toast').textContent = message; $('toast').hidden = false;
    toastTimer = setTimeout(() => { $('toast').hidden = true; }, 3500);
  }
  const review = (entry, section, batch) => C.reviewOf(reviews[C.keyOf(batch, entry)], entry, section);
  const isOnPage = (entry, section, batch) => C.belongsOnPage(reviews[C.keyOf(batch, entry)], entry, section, pageStatus);
  const cardId = (batch, entry) => `entry-${batch.id}--${entry.id}`;
  function update(entry, section, batch, patch) {
    const key = C.keyOf(batch, entry);
    reviews[key] = C.updateRecord(reviews[key], patch, entry, section);
    persist();
  }

  function renderNotes(section) {
    if (!section.notes.length) return '';
    return `<aside class="section-notes"><h4>说明</h4>${section.notes.map(n => `<p class="${n.tone === 'attention' ? 'attention' : ''}">${escape(n.text)}</p>`).join('')}</aside>`;
  }

  const englishLabel = r => r.edited ? `<span class="edited-flag">${r.choiceId ? '已选用其他表达' : '你的修改'}</span>` : '英文建议 · US';
  function renderChoices(entry, r) {
    if (!entry.alternatives?.length) return '';
    return `<div class="candidate-options" role="group" aria-label="可采用的英文表达">${C.choicesOf(entry).map(choice => {
      const active = r.choiceId === choice.id;
      return `<div class="candidate" data-selected="${active}"><p class="copy" lang="en">${escape(choice.en)}</p>
        ${choice.note ? `<p class="candidate-note">${escape(choice.note)}</p>` : ''}
        <button class="mini-button" data-action="choose" data-choice="${escape(choice.id)}" aria-pressed="${active}">${active ? '✓ 当前采用' : '采用此译文'}</button></div>`;
    }).join('')}</div>`;
  }

  function renderEntry(entry, section, batch) {
    const r = review(entry, section, batch), key = C.keyOf(batch, entry), isEditing = editing.has(key);
    const showComment = commenting.has(key) || !!r.note;
    const tag = entry.priority ? '<span class="tag priority">重点审查</span>' : '';
    const selected = entry.selected ? '<span class="tag">路线所选</span>' : '';
    const previous = r.stale ? `<div class="stale-warning">AI 原稿、候选或说明已更新，请重新审查。你的修改和批注已保留。<details><summary>上次审查的英文及候选</summary><p lang="en">${escape(reviews[key].source.en)}</p>${(reviews[key].source.alternatives || []).map(a => `<p lang="en">${escape(a.en)}</p><p>${escape(a.note)}</p>`).join('')}</details></div>` : '';
    return `<article class="entry" id="${escape(cardId(batch, entry))}" data-key="${escape(key)}" data-status="${r.status}" aria-label="${escape(entry.id + ' ' + entry.label)}">
      <div class="entry-top"><div class="entry-tags">${tag}${selected}</div><span class="entry-status ${r.status}">${C.STATUSES[r.status]}</span></div>${previous}
      <div class="comparison"><div class="chinese"><div class="language-label">${entry.id === 'X3' ? '项目原文' : '中文原文'}</div><p class="copy">${escape(entry.zh)}</p></div>
      <div class="english"><div class="language-label"><span class="english-label">${englishLabel(r)}</span><button class="mini-button" data-action="edit">${isEditing ? '完成编辑' : '修改英文'}</button></div>
      ${isEditing ? `<textarea class="editor" data-field="draft" aria-label="${escape(entry.id)} 英文草稿" lang="en" spellcheck="true">${escape(r.text)}</textarea><div class="editor-footer"><span>自动保存 · 改后需重新确认</span><button class="mini-button" data-action="restore">恢复 AI 原稿</button></div>` : !entry.alternatives?.length || !r.choiceId ? `<p class="copy" lang="en">${escape(r.text)}</p>` : ''}
      ${renderChoices(entry, r)}
      ${!entry.alternatives?.length && (r.edited || isEditing) ? `<details class="original"><summary>查看 AI 原稿</summary><p lang="en">${escape(entry.en)}</p></details>` : ''}</div></div>
      ${entry.note ? `<div class="entry-note"><strong>措辞说明</strong>${escape(entry.note)}</div>` : ''}
      <div class="entry-bottom"><div class="status-actions" role="group" aria-label="${escape(entry.id)} 审查状态">${Object.entries(C.STATUSES).map(([status, label]) => `<button data-action="status" data-status="${status}" aria-pressed="${r.status === status}">${status === 'approved' ? '✓ ' : ''}${label}</button>`).join('')}</div><button class="comment-button ${r.note ? 'has-comment' : ''}" data-action="comment" aria-expanded="${showComment}">${r.note ? '已有批注' : showComment ? '收起批注' : '+ 写批注'}</button></div>
      <div class="comment-box" ${showComment ? '' : 'hidden'}><label class="field-label" for="note-${escape(batch.id)}--${escape(entry.id)}">我的批注</label><textarea id="note-${escape(batch.id)}--${escape(entry.id)}" data-field="note" placeholder="例如：保留这个意思，但换成更自然的说法。">${escape(r.note)}</textarea></div>
    </article>`;
  }

  function renderContent() {
    $('page-title').textContent = pageStatus === 'pending' ? '翻译审查' : C.STATUSES[pageStatus];
    document.title = `${C.STATUSES[pageStatus]} · 翻译审查`;
    document.querySelectorAll('[data-page]').forEach(link => {
      if (link.dataset.page === pageStatus) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    const content = batches.map(batch => {
      const groups = batch.sections.map(section => {
        const entries = section.entries.filter(entry => isOnPage(entry, section, batch));
        if (!entries.length) return '';
        return `<div class="text-group">${entries.map(entry => renderEntry(entry, section, batch)).join('')}${renderNotes(section)}</div>`;
      }).join('');
      if (!groups) return '';
      return `<div class="review-set">${groups}
      <details class="source-details"><summary>路线与来源</summary><p>${escape(batch.route.join(' → '))}</p>
        <p>“路线所选”只标明这次走过的答案，不代表正确答案。</p>
        <p>${batch.sections.map(section => escape(section.sources.join(' · '))).join(' / ')}</p>
        <div>${(batch.references || []).filter(r => /^https:\/\//.test(r.url)).map(r => `<a href="${escape(r.url)}" target="_blank" rel="noopener noreferrer">${escape(r.label)}</a>`).join(' · ')}</div>
      </details></div>`;
    }).join('');
    const emptyMessage = pageStatus === 'pending' ? '暂时没有待审查的译文，可以到“要改”或“已通过”页面查看。' : `还没有标记为“${C.STATUSES[pageStatus]}”的译文。`;
    $('review-content').innerHTML = content || `<p class="empty-message" role="status">${emptyMessage}</p>`;
  }
  function replaceCard(entry, section, batch) {
    const old = document.getElementById(cardId(batch, entry));
    old.outerHTML = renderEntry(entry, section, batch);
    return document.getElementById(cardId(batch, entry));
  }

  function moveOutOfPage(entry, section, batch, card) {
    const visible = [...document.querySelectorAll('.entry')];
    const position = visible.indexOf(card);
    const nextId = visible[position + 1]?.id || visible[position - 1]?.id;
    editing.delete(C.keyOf(batch, entry));
    renderContent();
    const next = nextId && document.getElementById(nextId);
    (next?.querySelector('[data-action="status"]') || document.querySelector('[data-page][aria-current="page"]')).focus({ preventScroll: true });
    notify(`已移到“${C.STATUSES[review(entry, section, batch).status]}”页面`);
  }

  $('review-content').addEventListener('click', event => {
    const button = event.target.closest('button[data-action]'); if (!button) return;
    const card = button.closest('[data-key]'); if (!card) return;
    const { entry, section, batch } = contexts.get(card.dataset.key), key = C.keyOf(batch, entry);
    switch (button.dataset.action) {
      case 'status':
        if (button.dataset.status === 'approved' && !review(entry, section, batch).text.trim()) { notify('英文草稿为空，请填写后再通过。'); return; }
        update(entry, section, batch, { status: button.dataset.status });
        if (!isOnPage(entry, section, batch)) moveOutOfPage(entry, section, batch, card);
        else replaceCard(entry, section, batch).querySelector(`[data-status="${button.dataset.status}"]`).focus();
        break;
      case 'edit':
        editing.has(key) ? editing.delete(key) : editing.add(key);
        if (!editing.has(key) && !isOnPage(entry, section, batch)) moveOutOfPage(entry, section, batch, card);
        else { const next = replaceCard(entry, section, batch); (next.querySelector('.editor') || next.querySelector('[data-action="edit"]')).focus(); }
        break;
      case 'choose': {
        const choice = C.choicesOf(entry).find(candidate => candidate.id === button.dataset.choice);
        if (!choice || review(entry, section, batch).text === choice.en) return;
        update(entry, section, batch, { draft: choice.en });
        editing.delete(key);
        if (!isOnPage(entry, section, batch)) moveOutOfPage(entry, section, batch, card);
        else replaceCard(entry, section, batch).querySelector(`[data-choice="${choice.id}"]`).focus();
        break;
      }
      case 'restore':
        if (!review(entry, section, batch).edited) return;
        if (window.confirm('将这一条英文恢复为当前 AI 原稿？批注会保留。')) { update(entry, section, batch, { draft: null }); replaceCard(entry, section, batch).querySelector('.editor').focus(); }
        break;
      case 'comment': {
        const box = card.querySelector('.comment-box');
        box.hidden = !box.hidden;
        box.hidden ? commenting.delete(key) : commenting.add(key);
        button.setAttribute('aria-expanded', String(!box.hidden));
        button.textContent = review(entry, section, batch).note ? '已有批注' : box.hidden ? '+ 写批注' : '收起批注';
        if (!box.hidden) box.querySelector('textarea').focus();
        break;
      }
    }
  });

  $('review-content').addEventListener('input', event => {
    const field = event.target.dataset.field; if (!field) return;
    const card = event.target.closest('[data-key]'), { entry, section, batch } = contexts.get(card.dataset.key);
    update(entry, section, batch, { [field]: event.target.value });
    const r = review(entry, section, batch);
    card.dataset.status = r.status;
    const label = card.querySelector('.entry-status'); label.textContent = C.STATUSES[r.status]; label.className = `entry-status ${r.status}`;
    card.querySelectorAll('[data-action="status"]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.status === r.status)));
    card.querySelector('.english-label').innerHTML = englishLabel(r);
    card.querySelectorAll('[data-action="choose"]').forEach(button => {
      const active = button.dataset.choice === r.choiceId;
      button.setAttribute('aria-pressed', String(active));
      button.textContent = active ? '✓ 当前采用' : '采用此译文';
      button.closest('.candidate').dataset.selected = String(active);
    });
    const comment = card.querySelector('.comment-button'); comment.classList.toggle('has-comment', !!r.note); comment.textContent = r.note ? '已有批注' : card.querySelector('.comment-box').hidden ? '+ 写批注' : '收起批注';
  });

  function download(name, text, type) {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const link = document.createElement('a'); link.href = url; link.download = name;
    document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 10000);
  }
  const dateTag = () => { const date = new Date(); return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`; };
  $('export-feedback').addEventListener('click', () => { const text = C.feedbackText(batches, reviews); if (!text) { notify('先标记、修改或批注一条文案，再导出反馈。'); return; } $('feedback-text').value = text; $('feedback-copy').textContent = '复制反馈'; $('feedback-dialog').showModal(); });
  $('feedback-close').addEventListener('click', () => $('feedback-dialog').close());
  $('feedback-copy').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText($('feedback-text').value); $('feedback-copy').textContent = '已复制'; }
    catch { $('feedback-text').focus(); $('feedback-text').select(); $('feedback-copy').textContent = '已选中，请手动复制'; }
  });
  $('feedback-download').addEventListener('click', () => download(`translation-feedback-${dateTag()}.md`, $('feedback-text').value, 'text/markdown;charset=utf-8'));
  $('backup-open').addEventListener('click', () => $('backup-dialog').showModal());
  $('backup-close').addEventListener('click', () => $('backup-dialog').close());
  $('download-backup').addEventListener('click', () => { download(`translation-review-backup-${dateTag()}.json`, JSON.stringify(C.makeBackup(reviews), null, 2), 'application/json'); notify('备份已导出。'); });
  $('import-file').addEventListener('change', async event => {
    const file = event.target.files[0]; if (!file) return;
    try {
      if (file.size > 5 * 1024 * 1024) throw new Error('备份超过 5 MB，请确认选中了审查备份。');
      const incoming = C.validateBackup(JSON.parse(await file.text()));
      reviews = C.mergeRecords(reviews, incoming); persist(); renderContent();
      $('import-status').textContent = `已合并 ${Object.keys(incoming).length} 条记录；已有的更新记录已保留。`;
    } catch (error) { $('import-status').textContent = error instanceof SyntaxError ? '文件不是有效的 JSON，现有记录未改动。' : error.message; }
    event.target.value = '';
  });
  window.addEventListener('storage', event => {
    if (event.key !== STORAGE_KEY || !event.newValue) return;
    try { reviews = C.mergeRecords(reviews, C.validateBackup(JSON.parse(event.newValue))); if (!document.activeElement.matches('textarea')) renderContent(); } catch { /* Keep this tab's intact records. */ }
  });
  window.addEventListener('hashchange', () => {
    const status = pageFromHash() || 'pending';
    if (status === pageStatus) return;
    pageStatus = status;
    editing.clear(); commenting.clear();
    clearTimeout(toastTimer); $('toast').hidden = true;
    renderContent();
    window.scrollTo(0, 0);
  });
  document.querySelector('.skip-link').addEventListener('click', event => {
    event.preventDefault();
    $('content').focus();
    $('content').scrollIntoView();
  });
  window.addEventListener('beforeunload', event => { if (hasUnsaved) { event.preventDefault(); event.returnValue = ''; } });
  renderContent();
})();
