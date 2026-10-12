const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function load({ search = '', saved = null, blockedStorage = false } = {}) {
    const storage = new Map(saved === null ? [] : [['homepageLanguage', saved]]);
    const elements = ['title', 'startTest', 'miniGames', 'notes', 'versionHistory',
        'feedback', 'switchLanguage', 'loading', 'back'].map(key => ({ dataset: { i18n: key } }));
    const context = vm.createContext({
        URLSearchParams,
        window: {
            location: { search },
            localStorage: {
                getItem(key) {
                    if (blockedStorage) throw new Error('Storage unavailable');
                    return storage.get(key) ?? null;
                },
                setItem(key, value) {
                    if (blockedStorage) throw new Error('Storage unavailable');
                    storage.set(key, value);
                }
            }
        },
        document: { documentElement: {}, querySelectorAll: () => elements }
    });
    for (const file of ['approved-translations.js', 'i18n.js', 'logical.js']) {
        vm.runInContext(fs.readFileSync(path.join(__dirname, file), 'utf8'), context, { filename: file });
    }
    return { i18n: context.window.SiteI18n, copy: context.window.APPROVED_TRANSLATIONS,
        questions: vm.runInContext('questions', context), document: context.document, elements, storage };
}

test('language links override saved preferences and remain usable without storage', () => {
    assert.equal(load().i18n.language, 'en');
    assert.equal(load({ saved: 'zh' }).i18n.language, 'zh');
    assert.equal(load({ search: '?lang=en', saved: 'zh' }).i18n.language, 'en');
    assert.equal(load({ search: '?lang=zh', saved: 'en' }).i18n.language, 'zh');
    assert.equal(load({ search: '?lang=fr', saved: 'zh' }).i18n.language, 'zh');
    assert.equal(load({ saved: 'invalid' }).i18n.language, 'en');
    const { i18n, document } = load({ search: '?lang=zh', blockedStorage: true });
    assert.doesNotThrow(() => i18n.applyPageLanguage());
    assert.equal(document.documentElement.lang, 'zh-CN');
    assert.equal(i18n.href('test.html'), 'test.html?lang=zh');
    assert.equal(i18n.href('index.html'), 'index.html?lang=zh');
});

test('homepage and test controls use the approved selection, including the alternative chosen by the user', () => {
    const { i18n, elements, document, storage } = load({ search: '?lang=en' });
    i18n.applyPageLanguage();
    assert.equal(document.documentElement.lang, 'en');
    assert.equal(storage.get('homepageLanguage'), 'en');
    assert.deepEqual(elements.map(element => element.textContent), [
        'Where You Stand?', 'Start', 'Mini Games', 'How to Get Accurate Results',
        'Version History', 'Feedback', '中文', 'Loading…', 'Back'
    ]);
    assert.equal(i18n.ui('restart'), 'Take the quiz again');
    assert.equal(i18n.ui('feedbackMessage'), 'Found a problem or have a suggestion? Email [contact email].');
    assert.equal(i18n.ui('versionLabel'), 'Version:');
});

test('both approved routes have English questions, all answer options, and the same original results', () => {
    const { i18n, questions } = load();
    const original = JSON.stringify(questions);
    const routes = [
        { options: ['2', '2', '1', '1', '2', '1', '1'], result: 'SocialDemocracy', text: 'Your result: Social Democracy' },
        { options: ['1', '1', '1', '1', '1'], result: 'Fascism', text: 'Your result: Fascism' }
    ];
    for (const route of routes) {
        let key = 'initial';
        for (const option of route.options) {
            const question = questions[key];
            assert.doesNotMatch(i18n.questionText(key, question.question), /\p{Script=Han}/u, key);
            for (const [answerKey, chinese] of Object.entries(question.options)) {
                assert.doesNotMatch(i18n.optionText(key, answerKey, chinese), /\p{Script=Han}/u, `${key}/${answerKey}`);
            }
            key = question.next[option];
        }
        assert.equal(key, route.result);
        assert.equal(i18n.resultText(key, questions[key].result), route.text);
        assert.equal(i18n.resultImageAlt(key, 'Result Image'), 'Result Image');
    }
    assert.equal(JSON.stringify(questions), original, 'Localization must not mutate questions or branches');
});

test('shared questions reuse approved wording without changing their different destinations', () => {
    const { i18n, questions } = load();
    for (const [first, second] of [['people', 'government'], ['equality2', 'economic2']]) {
        assert.equal(i18n.questionText(first, questions[first].question), i18n.questionText(second, questions[second].question));
        assert.notEqual(i18n.questionText(first, questions[first].question), questions[first].question);
        assert.notDeepEqual(questions[first].next, questions[second].next);
    }
});

test('unapproved contexts and results keep their original copy, even when a short answer matches approved Chinese', () => {
    const { i18n, questions } = load();
    assert.equal(i18n.questionText('public', questions.public.question), questions.public.question);
    assert.equal(i18n.optionText('public', '1', '国家'), '国家');
    assert.equal(i18n.optionText('nofree', '1', '个人'), '个人');
    assert.equal(i18n.resultText('NordicModel', questions.NordicModel.result), questions.NordicModel.result);
    assert.equal(i18n.questionText('initial', '修改后的新题目'), '修改后的新题目');
});

test('Chinese mode retains every original question, answer, result and control', () => {
    const { i18n, questions } = load({ search: '?lang=zh' });
    for (const [key, question] of Object.entries(questions)) {
        if (question.question) {
            assert.equal(i18n.questionText(key, question.question), question.question);
            for (const [option, chinese] of Object.entries(question.options)) {
                assert.equal(i18n.optionText(key, option, chinese), chinese);
            }
        } else {
            assert.equal(i18n.resultText(key, question.result), question.result);
        }
    }
    assert.equal(i18n.ui('title'), '意识形态测试');
    assert.equal(i18n.ui('switchLanguage'), 'English');
    assert.equal(i18n.ui('restart'), '再来一次');
    assert.equal(i18n.ui('loading'), '计算中……');
});

test('production copy contains only source/selected-English pairs; every approved entry is used', () => {
    const { copy, i18n, questions } = load();
    const used = new Set();
    for (const key of ['title', 'startTest', 'miniGames', 'notes', 'versionHistory', 'feedback',
        'switchLanguage', 'loading', 'back', 'restart', 'feedbackMessage', 'versionLabel']) used.add(i18n.ui(key));
    for (const [key, question] of Object.entries(questions)) {
        if (question.question) {
            used.add(i18n.questionText(key, question.question));
            for (const [option, chinese] of Object.entries(question.options)) used.add(i18n.optionText(key, option, chinese));
        } else {
            used.add(i18n.resultText(key, question.result));
            used.add(i18n.resultImageAlt(key, 'Result Image'));
        }
    }
    for (const [id, entry] of Object.entries(copy)) {
        assert.deepEqual(Object.keys(entry).sort(), ['en', 'zh']);
        assert.ok(used.has(entry.en), `Unused approved entry: ${id}`);
    }
});
