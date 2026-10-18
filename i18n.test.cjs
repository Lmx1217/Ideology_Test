const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function load({ search = '', saved = null, blockedStorage = false } = {}) {
    const storage = new Map(saved === null ? [] : [['homepageLanguage', saved]]);
    const elements = ['title', 'startTest', 'miniGames', 'notes', 'versionHistory',
        'feedback', 'switchLanguage', 'back'].map(key => ({ dataset: { i18n: key } }));
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
        document: { documentElement: {}, querySelectorAll: selector => selector === '[data-i18n]' ? elements : [] }
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
        'Version History', 'Feedback', '中文 / Chinese', 'Back'
    ]);
    assert.equal(i18n.ui('restart'), 'Take the quiz again');
    assert.equal(i18n.ui('generalFeedbackLabel'), 'What would you like to share?');
    assert.equal(i18n.ui('versionLabel'), 'Version:');
});

test('all approved routes have English questions, all answer options, and the same original results', () => {
    const { i18n, questions } = load();
    const original = JSON.stringify(questions);
    const routes = [
        { options: ['2', '2', '1', '1', '2', '1', '1'], result: 'SocialDemocracy', text: 'Result: Social Democracy' },
        { options: ['1', '1', '1', '1', '1'], result: 'Fascism', text: 'Result: Fascism' },
        { options: ['1', '1', '1', '1', '2'], result: 'NationalSocialism', text: 'Result: Nazism' },
        { options: ['1', '1', '1', '2', '1', '1'], result: 'Monarchism', text: 'Result: Monarchism' },
        { options: ['1', '1', '1', '2', '1', '2', '1'], result: 'SocialismwithChinesecharacteristics', text: 'Result: Socialism with Chinese Characteristics' },
        { options: ['1', '1', '1', '2', '1', '2', '2'], result: 'Imperialism', text: 'Result: Imperialism' },
        { options: ['1', '1', '1', '2', '2', '1'], result: 'Kraterocracy', text: 'Result: Kraterocracy' },
        { options: ['1', '1', '1', '2', '2', '2'], result: 'IngSoc', text: 'Result: Ingsoc' },
        { options: ['1', '1', '2', '1'], result: 'Integralism', text: 'Result: Integralism' },
        { options: ['1', '1', '2', '2'], result: 'Corporatism', text: 'Result: Corporatism' },
        { options: ['1', '1', '3', '1', '1'], result: 'ConstitutionalMonarchism', text: 'Result: Constitutional Monarchism' },
        { options: ['1', '1', '3', '1', '2', '1', '1'], result: 'ChristianDemocracy', text: 'Result: Christian Democracy' },
        { options: ['1', '1', '3', '1', '2', '1', '2', '1'], result: 'Liberalism', text: 'Result: Liberalism' },
        { options: ['1', '1', '3', '1', '2', '1', '2', '2'], result: 'OrdoLiberalism', text: 'Result: Ordoliberalism' },
        { options: ['1', '1', '3', '1', '2', '2', '1', '1', '1'], result: 'Neoconservatism', text: 'Result: Neoconservatism' },
        { options: ['1', '1', '3', '1', '2', '2', '1', '1', '2'], result: 'Reaganism', text: 'Result: Reaganism' },
        { options: ['1', '1', '3', '1', '2', '2', '1', '2'], result: 'LiberalConservatism', text: 'Result: Liberal Conservatism' },
        { options: ['1', '1', '3', '1', '2', '2', '2', '1'], result: 'StateLiberalism', text: 'Result: State Liberalism' },
        { options: ['1', '1', '3', '1', '2', '2', '2', '2'], result: 'EconomicLiberalism', text: 'Result: Economic Liberalism' },
        { options: ['1', '1', '3', '2', '1', '1', '1'], result: 'WhiteNationalism', text: 'Result: White Nationalism' },
        { options: ['1', '1', '3', '2', '1', '1', '2'], result: 'NationalCapitalism', text: 'Result: National Capitalism' },
        { options: ['1', '1', '3', '2', '1', '2'], result: 'SocialDarwinism', text: 'Result: Social Darwinism' },
        { options: ['1', '1', '3', '2', '2', '1'], result: 'Conservatism', text: 'Result: Conservatism' },
        { options: ['1', '1', '3', '2', '2', '2'], result: 'Trumpism', text: 'Result: Trumpism' },
        { options: ['1', '1', '3', '3', '1'], result: 'AuthoritarianCapitalism', text: 'Result: Authoritarian Capitalism' },
        { options: ['1', '1', '3', '3', '2'], result: 'Pinochetism', text: 'Result: Pinochetism' },
        { options: ['1', '1', '4', '1', '1'], result: 'Mercantilism', text: 'Result: Mercantilism' },
        { options: ['1', '1', '4', '1', '2'], result: 'Bismarckism', text: 'Result: Bismarckism' },
        { options: ['1', '1', '4', '2', '1'], result: 'Homoconservatism', text: 'Result: LGBT Conservatism' },
        { options: ['1', '1', '4', '2', '2'], result: 'Reactionary', text: 'Result: Reactionary Politics' },
        { options: ['1', '2', '1', '1'], result: 'ThirdWay', text: 'Result: Third Way' },
        { options: ['1', '2', '1', '2'], result: 'Distributism', text: 'Result: Distributism' },
        { options: ['1', '2', '3', '1'], result: 'Titoism', text: 'Result: Titoism' },
        { options: ['1', '2', '3', '2', '1'], result: 'Longism', text: 'Result: Longism' },
        { options: ['1', '2', '3', '2', '2'], result: 'StateCapitalism', text: 'Result: State Capitalism' },
        { options: ['1', '2', '4', '1'], result: 'EnlightenedAbsolutism', text: 'Result: Enlightened Monarchism' },
        { options: ['1', '2', '4', '2'], result: 'SocialistTranshumanism', text: 'Result: Socialist Transhumanism' },
        { options: ['1', '2', '2', '1', '1', '1', '1'], result: 'Stalinism', text: 'Result: Stalinism' },
        { options: ['1', '2', '2', '1', '1', '1', '2'], result: 'Maoism', text: 'Result: Maoism' },
        { options: ['1', '2', '2', '1', '1', '1', '3'], result: 'Castroism', text: 'Result: Castroism' },
        { options: ['1', '2', '2', '1', '1', '2', '1'], result: 'MonarchoSocialism', text: 'Result: Monarcho-Socialism' },
        { options: ['1', '2', '2', '1', '1', '2', '2'], result: 'Mugabeism', text: 'Result: Mugabeism' },
        { options: ['1', '2', '2', '1', '1', '3', '1'], result: 'LeftWingNationalism', text: 'Result: Left-Wing Nationalism' },
        { options: ['1', '2', '2', '1', '1', '3', '2'], result: 'Jacobinism', text: 'Result: Jacobinism' },
        { options: ['1', '2', '2', '1', '2', '1'], result: 'NationalSyndicalism', text: 'Result: National Syndicalism' },
        { options: ['1', '2', '2', '1', '2', '2', '1'], result: 'NationalBolshevism', text: 'Result: National Bolshevism' },
        { options: ['1', '2', '2', '1', '2', '2', '2'], result: 'Bolsheviknationalism', text: 'Result: Bolshevik Nationalism' },
        { options: ['1', '2', '2', '2', '1'], result: 'Collectivism', text: 'Result: Collectivism' },
        { options: ['1', '2', '2', '2', '2', '1', '1'], result: 'HiveMindCollectivism', text: 'Result: Hive-Mind Collectivism' },
        { options: ['1', '2', '2', '2', '2', '1', '2', '1'], result: 'Marxism', text: 'Result: Orthodox Marxism' },
        { options: ['1', '2', '2', '2', '2', '1', '2', '2', '1'], result: 'LeftCommunism', text: 'Result: Left Communism' },
        { options: ['1', '2', '2', '2', '2', '1', '2', '2', '2'], result: 'Eurocommunism', text: 'Result: Eurocommunism' },
        { options: ['1', '2', '2', '2', '2', '2'], result: 'Baathism', text: 'Result: Baathism' },
        { options: ['1', '2', '2', '2', '3', '1'], result: 'LeftWingPopulism', text: 'Result: Left-Wing Populism' },
        { options: ['1', '2', '2', '2', '3', '2'], result: 'Trotskyism', text: 'Result: Trotskyism' },
        { options: ['1', '2', '2', '3'], result: 'Strasserism', text: 'Result: Strasserism' },
        { options: ['2', '1', '1', '1', '1', '1'], result: 'Paleolibertarianism', text: 'Result: Paleolibertarianism' },
        { options: ['2', '1', '1', '1', '1', '2'], result: 'LibertarianConservatism', text: 'Result: Libertarian Conservatism' },
        { options: ['2', '1', '1', '1', '2', '1'], result: 'LibertarianTranshumanism', text: 'Result: Libertarian Transhumanism' },
        { options: ['2', '1', '1', '1', '2', '2', '1', '1', '1'], result: 'SocialLibertarianism', text: 'Result: Social Libertarianism' },
        { options: ['2', '1', '1', '1', '2', '2', '1', '1', '2'], result: 'Hoppeanism', text: 'Result: Hoppeanism' },
        { options: ['2', '1', '1', '1', '2', '2', '1', '2', '1'], result: 'Libertarianism', text: 'Result: Libertarianism' },
        { options: ['2', '1', '1', '1', '2', '2', '1', '2', '2'], result: 'LiberalLibertarianism', text: 'Result: Liberal Libertarianism' },
        { options: ['2', '1', '1', '1', '2', '2', '2', '1'], result: 'Geolibertarianism', text: 'Result: Geolibertarianism' },
        { options: ['2', '1', '1', '1', '2', '2', '2', '2'], result: 'DistributistLibertarianism', text: 'Result: Distributist Libertarianism' },
        { options: ['2', '1', '1', '2', '1', '1'], result: 'Korwinism', text: 'Result: Korwinism' },
        { options: ['2', '1', '1', '2', '1', '2'], result: 'NeoliberalConservatism', text: 'Result: Neoliberal Conservatism' },
        { options: ['2', '1', '1', '2', '1', '3'], result: 'NationalLiberalism', text: 'Result: National Liberalism' },
        { options: ['2', '1', '1', '2', '2'], result: 'PinkCapitalism', text: 'Result: Pink Capitalism' },
        { options: ['2', '1', '1', '2', '3', '1', '1', '1'], result: 'Neoliberalism', text: 'Result: Neoliberalism' },
        { options: ['2', '1', '1', '2', '3', '1', '1', '2'], result: 'ClassicalLiberalism', text: 'Result: Classical Liberalism' },
        { options: ['2', '1', '1', '2', '3', '1', '2'], result: 'Minarchism', text: 'Result: Minarchism' },
        { options: ['2', '1', '1', '2', '3', '2', '1'], result: 'Voluntaryism', text: 'Result: Voluntaryism' },
        { options: ['2', '1', '1', '2', '3', '2', '2', '1'], result: 'Hayekism', text: 'Result: Hayekism' },
        { options: ['2', '1', '1', '2', '3', '2', '2', '2'], result: 'Objectivism', text: 'Result: Objectivism' },
        { options: ['2', '1', '2', '1'], result: 'AnarchoLiberalism', text: 'Result: Anarcho-Liberalism' },
        { options: ['2', '1', '2', '2', '1'], result: 'AnarchoNihilism', text: 'Result: Anarcho-Nihilism' },
        { options: ['2', '1', '2', '2', '2'], result: 'AnarchoCapitalism', text: 'Result: Anarcho-Capitalism' },
        { options: ['2', '1', '2', '3'], result: 'Avaritionism', text: 'Result: Avaritionism' },
        { options: ['2', '2', '1', '1', '1'], result: 'GreenLiberalism', text: 'Result: Green Liberalism' },
        { options: ['2', '2', '1', '1', '2', '1', '2'], result: 'NordicModel', text: 'Result: Nordic Model' },
        { options: ['2', '2', '1', '1', '2', '2'], result: 'Progressivism', text: 'Result: Progressivism' },
        { options: ['2', '2', '1', '1', '3'], result: 'Georgism', text: 'Result: Georgism' },
        { options: ['2', '2', '1', '2', '1'], result: 'DemocraticSocialism', text: 'Result: Democratic Socialism' },
        { options: ['2', '2', '1', '2', '2', '1', '1'], result: 'LibertarianSocialism', text: 'Result: Libertarian Socialism' },
        { options: ['2', '2', '1', '2', '2', '1', '2'], result: 'MinarchoSocialism', text: 'Result: Minarcho-Socialism' },
        { options: ['2', '2', '1', '2', '2', '2', '1'], result: 'ChristianSocialism', text: 'Result: Christian Socialism' },
        { options: ['2', '2', '1', '2', '2', '2', '2', '1'], result: 'MarketSocialism', text: 'Result: Market Socialism' },
        { options: ['2', '2', '1', '2', '2', '2', '2', '2'], result: 'CouncilCommunism', text: 'Result: Council Communism' },
        { options: ['2', '2', '1', '2', '3', '1'], result: 'LiberalSocialism', text: 'Result: Liberal Socialism' },
        { options: ['2', '2', '1', '2', '3', '2', '1'], result: 'MonarchoSyndicalism', text: 'Result: Monarcho-Syndicalism' },
        { options: ['2', '2', '1', '2', '3', '2', '2'], result: 'Syndicalism', text: 'Result: Syndicalism' },
        { options: ['2', '2', '1', '2', '3', '3'], result: 'UtopianSocialism', text: 'Result: Utopian Socialism' },
        { options: ['2', '2', '1', '3'], result: 'Communalism', text: 'Result: Communalism' },
        { options: ['2', '2', '2', '1', '1'], result: 'SyndicalistMutualism', text: 'Result: Syndicalist Mutualism' },
        { options: ['2', '2', '2', '1', '2'], result: 'Mutualism', text: 'Result: Mutualism' },
        { options: ['2', '2', '2', '2', '1', '1'], result: 'AnarchoPrimitivism', text: 'Result: Anarcho-Primitivism' },
        { options: ['2', '2', '2', '2', '1', '2'], result: 'Egoism', text: 'Result: Egoism' },
        { options: ['2', '2', '2', '2', '2', '1', '1', '1'], result: 'DemocraticConfederalism', text: 'Result: Democratic Confederalism' },
        { options: ['2', '2', '2', '2', '2', '1', '1', '2'], result: 'LibertarianMunicipalism', text: 'Result: Libertarian Municipalism' },
        { options: ['2', '2', '2', '2', '2', '1', '2', '1'], result: 'Soulism', text: 'Result: Soulism' },
        { options: ['2', '2', '2', '2', '2', '1', '2', '2'], result: 'AnarchoPacifism', text: 'Result: Anarcho-Pacifism' },
        { options: ['2', '2', '2', '2', '2', '2', '1'], result: 'AnarchoSyndicalism', text: 'Result: Anarcho-Syndicalism' },
        { options: ['2', '2', '2', '2', '2', '2', '2'], result: 'SocialAnarchism', text: 'Result: Social Anarchism' },
        { options: ['2', '2', '2', '2', '2', '2', '3'], result: 'AnarchoCommunism', text: 'Result: Anarcho-Communism' }
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
    }
    assert.equal(JSON.stringify(questions), original, 'Localization must not mutate questions or branches');
});

test('shared questions reuse approved wording without changing their different destinations', () => {
    const { i18n, questions } = load();
    for (const [first, second] of [['people', 'government'], ['equality2', 'economic2'], ['redu', 'notcare']]) {
        assert.equal(i18n.questionText(first, questions[first].question), i18n.questionText(second, questions[second].question));
        assert.notEqual(i18n.questionText(first, questions[first].question), questions[first].question);
        assert.notDeepEqual(questions[first].next, questions[second].next);
    }
});

test('shared answers keep the distinction between No and No / No preference', () => {
    const { i18n, questions } = load();
    assert.equal(i18n.optionText('abscontrol', '1', questions.abscontrol.options[1]), 'Yes');
    assert.equal(i18n.optionText('abscontrol', '2', questions.abscontrol.options[2]), 'No / No preference');
    assert.equal(i18n.optionText('control', '2', questions.control.options[2]), 'No / No preference');
    assert.equal(i18n.optionText('organization', '1', questions.organization.options[1]), 'Yes');
    assert.equal(i18n.optionText('organization', '2', questions.organization.options[2]), 'No');
    assert.equal(i18n.optionText('organization', '2', '否/无所谓'), '否/无所谓');
    for (const key of ['env', 'minredu', 'indifferent', 'change', 'intervene', 'rebui', 'everthing']) {
        assert.equal(i18n.optionText(key, '1', questions[key].options[1]), 'Yes');
        assert.equal(i18n.optionText(key, '2', questions[key].options[2]), 'No');
        assert.equal(i18n.optionText(key, '2', '否/无所谓'), '否/无所谓');
    }
});

test('the same Chinese answer retains the approved wording for each question context', () => {
    const { i18n, questions } = load();
    assert.equal(i18n.optionText('economic', '4', questions.economic.options[4]), 'Any of these is fine');
    assert.equal(i18n.optionText('individual', '3', questions.individual.options[3]), 'No preference');
    assert.equal(i18n.optionText('equality', '4', questions.equality.options[4]), 'I don’t have a preference');
    assert.equal(i18n.optionText('individual', '1', questions.individual.options[1]), 'I support it');
    assert.equal(i18n.optionText('individual', '2', questions.individual.options[2]), 'I oppose it');
    assert.equal(i18n.optionText('notcare', '1', questions.notcare.options[1]), 'It’s generally bad');
    assert.equal(i18n.optionText('redu', '2', questions.redu.options[2]), 'It’s generally bad');
    assert.equal(i18n.optionText('notcare', '2', questions.notcare.options[2]), 'Arrest and execute them all');
    assert.equal(i18n.optionText('statusQuo', '1', questions.statusQuo.options[1]), 'I support it');
    assert.equal(i18n.optionText('statusQuo', '2', questions.statusQuo.options[2]), 'I oppose it');
    assert.equal(i18n.optionText('union', '1', questions.union.options[1]), 'Through democratic means');
    assert.equal(i18n.optionText('strike', '1', questions.strike.options[1]), 'Yes');
    assert.equal(i18n.optionText('strike', '2', questions.strike.options[2]), 'No');
    assert.equal(i18n.optionText('union', '1', '通过暴力途径'), '通过暴力途径');
    assert.equal(i18n.optionText('strike', '2', '不需要/无所谓'), '不需要/无所谓');
    assert.equal(i18n.optionText('organization', '2', '不需要'), '不需要');
});

test('planned-economy copy preserves custom English and the selected result alternative', () => {
    const { i18n, questions } = load();
    assert.equal(i18n.resultText('Maoism', questions.Maoism.result), 'Result: Maoism');
    assert.equal(i18n.resultText('MonarchoSocialism', questions.MonarchoSocialism.result), 'Result: Monarcho-Socialism');
    assert.equal(i18n.optionText('nohivemind', '2', questions.nohivemind.options[2]), 'I’m critical of it, and may favor other approaches');
    assert.equal(i18n.optionText('national', '2', questions.national.options[2]), 'Within a specific ethnic or racial group');
    assert.equal(i18n.optionText('command', '3', questions.command.options[3]), 'Beyond our own country, but within a specific ethnic group');
});

test('unapproved contexts and changed sources keep their original copy, even when an answer matches approved Chinese', () => {
    const { i18n, questions } = load();
    assert.equal(i18n.questionText('unreviewed-context', questions.shouldnot.question), questions.shouldnot.question);
    assert.equal(i18n.optionText('unreviewed-context', '1', '是'), '是');
    assert.equal(i18n.optionText('unreviewed-context', '1', '个人'), '个人');
    assert.equal(i18n.resultText('unreviewed-result', questions.AnarchoPrimitivism.result), questions.AnarchoPrimitivism.result);
    assert.equal(i18n.questionText('initial', '修改后的新题目'), '修改后的新题目');
    assert.equal(i18n.questionText('public', '修改后的生产资料题目'), '修改后的生产资料题目');
    assert.equal(i18n.optionText('minimum', '1', '修改后的反击选项'), '修改后的反击选项');
    assert.equal(i18n.questionText('shouldnot', '修改后的自由市场题目'), '修改后的自由市场题目');
    assert.equal(i18n.resultText('AnarchoPrimitivism', '修改后的结果'), '修改后的结果');
});

test('opposing violent revolution keeps its Yes/No direction and exact shared-answer contexts', () => {
    const { i18n, questions } = load();
    assert.equal(i18n.questionText('socie', questions.socie.question), 'Do you oppose violent revolution?');
    assert.equal(i18n.optionText('socie', '1', questions.socie.options[1]), 'Yes');
    assert.equal(i18n.optionText('socie', '2', questions.socie.options[2]), 'No');
    assert.equal(questions.socie.next[1], 'noviol');
    assert.equal(questions.socie.next[2], 'viol');
    assert.equal(i18n.optionText('nofree', '1', questions.nofree.options[1]), 'Individuals');
    assert.equal(i18n.optionText('key', '2', questions.key.options[2]), 'This question isn’t a priority for me');
    assert.equal(i18n.optionText('key', '2', '这个问题是关注的重点'), '这个问题是关注的重点');
    assert.equal(i18n.optionText('socie', '1', '不是'), '不是');
    assert.equal(i18n.optionText('socie', '2', '是的'), '是的');
});

test('violence-response copy keeps user edits and context-specific shared answers', () => {
    const { i18n, questions } = load();
    assert.equal(i18n.optionText('should2', '1', questions.should2.options[1]),
        'I strongly support using my own weapons to fight back and take revenge');
    assert.equal(i18n.optionText('should2', '2', questions.should2.options[2]),
        'This question isn’t a priority for me');
    assert.equal(i18n.questionText('minimum', questions.minimum.question),
        i18n.questionText('should2', questions.should2.question));
    assert.equal(i18n.optionText('minimum', '1', questions.minimum.options[1]),
        'Fight back with my own weapons (or even take revenge)');
    assert.equal(i18n.optionText('minimum', '2', questions.minimum.options[2]),
        'Seek help from the government');
    assert.equal(i18n.optionText('noreligions', '2', questions.noreligions.options[2]),
        'This isn’t a priority for me');
    assert.equal(i18n.questionText('portect', questions.portect.question),
        i18n.questionText('control', questions.control.question));
    assert.equal(i18n.optionText('portect', '2', questions.portect.options[2]), 'No');
    assert.equal(i18n.optionText('control', '2', questions.control.options[2]), 'No / No preference');
    assert.equal(i18n.optionText('portect', '3', questions.portect.options[3]), 'I don’t have a preference');
    assert.equal(i18n.questionText('currencyissuance', questions.currencyissuance.question),
        'What’s your view of economic globalization?');
    assert.equal(i18n.optionText('currencyissuance', '1', questions.currencyissuance.options[1]), 'I support it');
    assert.equal(i18n.optionText('currencyissuance', '2', questions.currencyissuance.options[2]), 'I’m indifferent or neutral');
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
    assert.equal(i18n.ui('switchLanguage'), 'English / 英文');
    assert.equal(i18n.ui('restart'), '再来一次');
});

test('production copy contains only source/selected-English pairs; every approved entry is used', () => {
    const { copy, i18n, questions } = load();
    const used = new Set();
    for (const key of ['title', 'startTest', 'miniGames', 'notes', 'versionHistory', 'feedback',
        'switchLanguage', 'back', 'restart', 'versionLabel']) used.add(i18n.ui(key));
    for (const page of ['index.html', 'note.html', 'history.html', 'test.html']) {
        const html = fs.readFileSync(path.join(__dirname, page), 'utf8');
        for (const [, key] of html.matchAll(/data-i18n(?:-alt)?="([^"]+)"/g)) used.add(i18n.ui(key));
    }
    for (const [key, question] of Object.entries(questions)) {
        if (question.question) {
            used.add(i18n.questionText(key, question.question));
            for (const [option, chinese] of Object.entries(question.options)) used.add(i18n.optionText(key, option, chinese));
        } else {
            used.add(i18n.resultText(key, question.result));
        }
    }
    for (const [id, entry] of Object.entries(copy)) {
        assert.deepEqual(Object.keys(entry).sort(), ['en', 'zh']);
        assert.ok(used.has(entry.en), `Unused approved entry: ${id}`);
    }
});
