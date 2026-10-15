(function () {
    const copy = window.APPROVED_TRANSLATIONS;
    const uiIds = {
        title: 'social-democracy-01/H1',
        startTest: 'social-democracy-01/H2',
        miniGames: 'social-democracy-01/H3',
        notes: 'social-democracy-01/H4',
        versionHistory: 'social-democracy-01/H5',
        feedback: 'social-democracy-01/H6',
        switchLanguage: 'social-democracy-01/H7',
        loading: 'social-democracy-01/U1',
        back: 'social-democracy-01/U2',
        restart: 'social-democracy-01/U3',
        feedbackMessage: 'social-democracy-01/X1',
        versionLabel: 'social-democracy-01/X2',
        notesTitle: 'notes-01/title',
        notesTestTips: 'notes-01/test-tips',
        notesNotation: 'notes-01/notation',
        notesWording: 'notes-01/wording',
        notesConciseCopy: 'notes-01/concise-copy',
        notesElimination: 'notes-01/elimination',
        notesTryBoth: 'notes-01/try-both',
        notesReviewAnswers: 'notes-01/review-answers',
        notesSiteTips: 'notes-01/site-tips',
        notesFeedback: 'notes-01/feedback',
        notesBrowserBackPrefix: 'notes-01/browser-back-prefix',
        notesBrowserBackSuffix: 'notes-01/browser-back-suffix',
        notesBrowserBackAlt: 'notes-01/browser-back-alt',
        notesTitleActions: 'notes-01/title-actions',
        notesResultsHeading: 'notes-01/results-heading',
        notesResultsNote: 'notes-01/results-note',
        history170aHeading: 'history-01/v1.7.0a-heading',
        history170aEnglish: 'history-01/v1.7.0a-english',
        history160aHeading: 'history-01/v1.6.0a-heading',
        history160aResults: 'history-01/v1.6.0a-results',
        history160aMiniGames: 'history-01/v1.6.0a-minigames',
        history160aTextSize: 'history-01/v1.6.0a-textsize',
        history160aWording: 'history-01/v1.6.0a-wording',
        history150aHeading: 'history-01/v1.5.0a-heading',
        history150aMiniGames: 'history-01/v1.5.0a-minigames',
        history150aDarkMode: 'history-01/v1.5.0a-darkmode',
        history150aColors: 'history-01/v1.5.0a-colors',
        history150aHover: 'history-01/v1.5.0a-hover',
        history140aHeading: 'history-01/v1.4.0a-heading',
        history140aAnimations: 'history-01/v1.4.0a-animations',
        history140aTips: 'history-01/v1.4.0a-tips',
        history130aHeading: 'history-01/v1.3.0a-heading',
        history130aChinese: 'history-01/v1.3.0a-chinese',
        history130aTitleActions: 'history-01/v1.3.0a-titleactions',
        history130aTips: 'history-01/v1.3.0a-tips',
        history120aHeading: 'history-01/v1.2.0a-heading',
        history120aHistory: 'history-01/v1.2.0a-history',
        history120aMobile: 'history-01/v1.2.0a-mobile',
        history111aHeading: 'history-01/v1.1.1a-heading',
        history111aImages: 'history-01/v1.1.1a-images',
        history110aHeading: 'history-01/v1.1.0a-heading',
        history110aHome: 'history-01/v1.1.0a-home',
        history101aHeading: 'history-01/v1.0.1a-heading',
        history101aStructure: 'history-01/v1.0.1a-structure',
        history101aTitle: 'history-01/v1.0.1a-title',
        history100bHeading: 'history-01/v1.0.0b-heading',
        history100bTypo: 'history-01/v1.0.0b-typo',
        history100aHeading: 'history-01/v1.0.0a-heading',
        history100aResults: 'history-01/v1.0.0a-results',
        history060bHeading: 'history-01/v0.6.0b-heading',
        history060bTypos: 'history-01/v0.6.0b-typos',
        history060aHeading: 'history-01/v0.6.0a-heading',
        history060aResults: 'history-01/v0.6.0a-results',
        history051aHeading: 'history-01/v0.5.1a-heading',
        history051aResponsive: 'history-01/v0.5.1a-responsive',
        history050aHeading: 'history-01/v0.5.0a-heading',
        history050aResults: 'history-01/v0.5.0a-results',
        history042bHeading: 'history-01/v0.4.2b-heading',
        history042bBackFix: 'history-01/v0.4.2b-backfix',
        history042aHeading: 'history-01/v0.4.2a-heading',
        history042aConsole: 'history-01/v0.4.2a-console',
        history041aHeading: 'history-01/v0.4.1a-heading',
        history041aBack: 'history-01/v0.4.1a-back',
        history040aHeading: 'history-01/v0.4.0a-heading',
        history040aBack: 'history-01/v0.4.0a-back',
        history040aResults: 'history-01/v0.4.0a-results',
        history030aHeading: 'history-01/v0.3.0a-heading',
        history030aRestart: 'history-01/v0.3.0a-restart',
        history030aLogic: 'history-01/v0.3.0a-logic',
        history020aHeading: 'history-01/v0.2.0a-heading',
        history020aResults: 'history-01/v0.2.0a-results',
        history010aHeading: 'history-01/v0.1.0a-heading',
        history010aStyle: 'history-01/v0.1.0a-style',
        history010aResults: 'history-01/v0.1.0a-results'
    };

    // Match by question context, never by a global replacement of short answers.
    // Shared questions reuse the same approved copy while retaining their own branches.
    const questionIds = {
        initial: 'social-democracy-01/Q1',
        people: 'social-democracy-01/Q2',
        government: 'social-democracy-01/Q2',
        equality2: 'social-democracy-01/Q3',
        economic2: 'social-democracy-01/Q3',
        should: 'social-democracy-01/Q4',
        private: 'social-democracy-01/Q5',
        welfare: 'social-democracy-01/Q6',
        poor: 'social-democracy-01/Q7',
        economic: 'fascism-01/Q3',
        state: 'fascism-01/Q4',
        batter: 'fascism-01/Q5',
        same: 'monarchism-01/Q5',
        control: 'monarchism-01/Q6',
        Nomonarchism: 'socialism-with-chinese-characteristics-01/Q7',
        abscontrol: 'kraterocracy-01/Q6',
        organization: 'integralism-01/Q4',
        individual: 'globalization-support-01/Q1',
        agreeglob: 'globalization-support-01/Q2',
        notneed: 'globalization-support-01/Q3',
        env: 'globalization-support-01/Q4',
        nochrist: 'globalization-support-01/Q5',
        eco: 'globalization-support-01/Q6',
        redu: 'globalization-support-01/Q7',
        anticommu: 'globalization-support-01/Q8',
        minredu: 'globalization-support-01/Q9',
        disglob: 'land-individual-indifferent-01/Q1',
        adv: 'land-individual-indifferent-01/Q2',
        deportation: 'land-individual-indifferent-01/Q3',
        disadv: 'land-individual-indifferent-01/Q4',
        notcare: 'globalization-support-01/Q7',
        indifferent: 'land-individual-indifferent-01/Q6',
        change: 'land-individual-indifferent-01/Q7',
        statusQuo: 'land-individual-indifferent-01/Q8',
        equality: 'economic-market-mixed-indifferent-01/Q1',
        market: 'economic-market-mixed-indifferent-01/Q2',
        mixed: 'economic-market-mixed-indifferent-01/Q3',
        intervene: 'economic-market-mixed-indifferent-01/Q4',
        notall: 'economic-market-mixed-indifferent-01/Q5',
        command: 'economic-planned-01/Q1',
        national: 'economic-planned-01/Q2',
        race: 'economic-planned-01/Q3',
        direct: 'economic-planned-01/Q4',
        civil: 'economic-planned-01/Q5',
        conple: 'economic-planned-01/Q6',
        flex: 'economic-planned-01/Q7',
        peasant: 'economic-planned-01/Q8',
        inter: 'economic-planned-01/Q9',
        try: 'economic-planned-01/Q10',
        now: 'economic-planned-01/Q11',
        rebui: 'economic-planned-01/Q12',
        nohivemind: 'economic-planned-01/Q13',
        criti: 'economic-planned-01/Q14',
        should2: 'violence-retaliation-not-priority-01/Q1',
        retaliation: 'violence-retaliation-not-priority-01/Q2',
        religions: 'violence-retaliation-not-priority-01/Q3',
        noreligions: 'violence-retaliation-not-priority-01/Q4',
        noupdate: 'violence-retaliation-not-priority-01/Q5',
        agreefreemarket: 'violence-retaliation-not-priority-01/Q6',
        yescommunity: 'violence-retaliation-not-priority-01/Q7',
        nocommunity: 'violence-retaliation-not-priority-01/Q8',
        disagreefreemarket: 'violence-retaliation-not-priority-01/Q9',
        notimportant: 'violence-retaliation-not-priority-01/Q10',
        portect: 'monarchism-01/Q6',
        othersfreedom: 'violence-retaliation-not-priority-01/Q12',
        currencyissuance: 'violence-retaliation-not-priority-01/Q13',
        economicglobalization: 'violence-retaliation-not-priority-01/Q14',
        nocurrencyissuance: 'violence-retaliation-not-priority-01/Q15',
        outofenforcingthelaw: 'violence-retaliation-not-priority-01/Q16',
        shouldnot2: 'personal-freedom-01/Q1',
        everthing: 'personal-freedom-01/Q2',
        public: 'means-of-production-01/Q5',
        worker: 'means-of-production-01/Q6',
        minimum: 'violence-retaliation-not-priority-01/Q1',
        nominimum: 'means-of-production-01/Q8',
        nobible: 'means-of-production-01/Q9',
        union: 'means-of-production-01/Q10',
        strike: 'means-of-production-01/Q11',
        shouldnot: 'free-market-01/Q1',
        free: 'free-market-01/Q2',
        nofree: 'free-market-01/Q3',
        indiv: 'free-market-01/Q4',
        socie: 'free-market-01/Q5',
        noviol: 'free-market-01/Q6',
        key: 'free-market-01/Q7',
        auxil: 'free-market-01/Q8',
        viol: 'free-market-01/Q9'
    };
    // These reviewed questions share answers recorded under other stable review IDs.
    const optionIds = {
        abscontrol: {
            1: 'monarchism-01/Q6.1',
            2: 'monarchism-01/Q6.2'
        },
        organization: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        env: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        minredu: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        notcare: {
            1: 'globalization-support-01/Q7.2',
            2: 'land-individual-indifferent-01/Q5.2'
        },
        indifferent: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        change: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        statusQuo: {
            1: 'globalization-support-01/Q1.1',
            2: 'globalization-support-01/Q1.2'
        },
        intervene: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        rebui: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        retaliation: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        religions: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        agreefreemarket: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        portect: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2',
            3: 'economic-market-mixed-indifferent-01/Q1.4'
        },
        othersfreedom: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        currencyissuance: {
            1: 'globalization-support-01/Q1.1',
            2: 'violence-retaliation-not-priority-01/Q13.2'
        },
        economicglobalization: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        nocurrencyissuance: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        everthing: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        public: {
            1: 'fascism-01/Q3.1',
            2: 'means-of-production-01/Q5.2',
            3: 'means-of-production-01/Q5.3'
        },
        worker: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        minimum: {
            1: 'means-of-production-01/Q7.1',
            2: 'means-of-production-01/Q7.2'
        },
        nominimum: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        nobible: {
            1: 'means-of-production-01/Q9.1',
            2: 'means-of-production-01/Q9.2'
        },
        union: {
            1: 'economic-planned-01/Q10.1',
            2: 'means-of-production-01/Q10.2',
            3: 'means-of-production-01/Q10.3'
        },
        strike: {
            1: 'economic-planned-01/Q3.1',
            2: 'integralism-01/Q4.2'
        },
        shouldnot: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        free: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        nofree: {
            1: 'fascism-01/Q3.3',
            2: 'free-market-01/Q3.2'
        },
        indiv: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        socie: {
            1: 'monarchism-01/Q6.1',
            2: 'integralism-01/Q4.2'
        },
        key: {
            1: 'free-market-01/Q7.1',
            2: 'violence-retaliation-not-priority-01/Q1.2'
        }
    };
    // Reviewed source variants reuse an approved answer only in these exact contexts.
    const optionSourceVariants = {
        union: { 1: '通过民主途径' },
        strike: { 2: '不需要' },
        socie: { 1: '是的', 2: '不是' },
        key: { 2: '这个问题不是关注的重点' }
    };
    const resultIds = {
        SocialDemocracy: 'social-democracy-01/R1',
        Fascism: 'fascism-01/R1',
        NationalSocialism: 'nazism-01/R1',
        Monarchism: 'monarchism-01/R1',
        SocialismwithChinesecharacteristics: 'socialism-with-chinese-characteristics-01/R1',
        Imperialism: 'imperialism-01/R1',
        Kraterocracy: 'kraterocracy-01/R1',
        IngSoc: 'ingsoc-01/R1',
        Integralism: 'integralism-01/R1',
        Corporatism: 'corporatism-01/R1',
        ConstitutionalMonarchism: 'globalization-support-01/R1',
        ChristianDemocracy: 'globalization-support-01/R2',
        Liberalism: 'globalization-support-01/R3',
        OrdoLiberalism: 'globalization-support-01/R4',
        Neoconservatism: 'globalization-support-01/R5',
        Reaganism: 'globalization-support-01/R6',
        LiberalConservatism: 'globalization-support-01/R7',
        StateLiberalism: 'globalization-support-01/R8',
        EconomicLiberalism: 'globalization-support-01/R9',
        WhiteNationalism: 'land-individual-indifferent-01/R4',
        NationalCapitalism: 'land-individual-indifferent-01/R5',
        SocialDarwinism: 'land-individual-indifferent-01/R3',
        Conservatism: 'land-individual-indifferent-01/R1',
        Trumpism: 'land-individual-indifferent-01/R2',
        AuthoritarianCapitalism: 'land-individual-indifferent-01/R6',
        Pinochetism: 'land-individual-indifferent-01/R7',
        Mercantilism: 'land-individual-indifferent-01/R8',
        Bismarckism: 'land-individual-indifferent-01/R9',
        Homoconservatism: 'land-individual-indifferent-01/R10',
        Reactionary: 'land-individual-indifferent-01/R11',
        ThirdWay: 'economic-market-mixed-indifferent-01/R1',
        Distributism: 'economic-market-mixed-indifferent-01/R2',
        Titoism: 'economic-market-mixed-indifferent-01/R3',
        Longism: 'economic-market-mixed-indifferent-01/R4',
        StateCapitalism: 'economic-market-mixed-indifferent-01/R5',
        EnlightenedAbsolutism: 'economic-market-mixed-indifferent-01/R6',
        SocialistTranshumanism: 'economic-market-mixed-indifferent-01/R7',
        Strasserism: 'economic-planned-01/R1',
        Collectivism: 'economic-planned-01/R2',
        LeftWingPopulism: 'economic-planned-01/R3',
        Trotskyism: 'economic-planned-01/R4',
        Baathism: 'economic-planned-01/R5',
        HiveMindCollectivism: 'economic-planned-01/R6',
        Marxism: 'economic-planned-01/R7',
        LeftCommunism: 'economic-planned-01/R8',
        Eurocommunism: 'economic-planned-01/R9',
        NationalSyndicalism: 'economic-planned-01/R10',
        NationalBolshevism: 'economic-planned-01/R11',
        Bolsheviknationalism: 'economic-planned-01/R12',
        Stalinism: 'economic-planned-01/R13',
        Maoism: 'economic-planned-01/R14',
        Castroism: 'economic-planned-01/R15',
        MonarchoSocialism: 'economic-planned-01/R16',
        Mugabeism: 'economic-planned-01/R17',
        LeftWingNationalism: 'economic-planned-01/R18',
        Jacobinism: 'economic-planned-01/R19',
        Paleolibertarianism: 'violence-retaliation-not-priority-01/R1',
        LibertarianConservatism: 'violence-retaliation-not-priority-01/R2',
        LibertarianTranshumanism: 'violence-retaliation-not-priority-01/R3',
        SocialLibertarianism: 'violence-retaliation-not-priority-01/R4',
        Hoppeanism: 'violence-retaliation-not-priority-01/R5',
        Libertarianism: 'violence-retaliation-not-priority-01/R6',
        LiberalLibertarianism: 'violence-retaliation-not-priority-01/R7',
        Geolibertarianism: 'violence-retaliation-not-priority-01/R8',
        DistributistLibertarianism: 'violence-retaliation-not-priority-01/R9',
        Korwinism: 'violence-retaliation-not-priority-01/R10',
        NeoliberalConservatism: 'violence-retaliation-not-priority-01/R11',
        NationalLiberalism: 'violence-retaliation-not-priority-01/R12',
        PinkCapitalism: 'violence-retaliation-not-priority-01/R13',
        Neoliberalism: 'violence-retaliation-not-priority-01/R14',
        ClassicalLiberalism: 'violence-retaliation-not-priority-01/R15',
        Minarchism: 'violence-retaliation-not-priority-01/R16',
        Voluntaryism: 'violence-retaliation-not-priority-01/R17',
        Hayekism: 'violence-retaliation-not-priority-01/R18',
        Objectivism: 'violence-retaliation-not-priority-01/R19',
        AnarchoLiberalism: 'personal-freedom-01/R1',
        AnarchoNihilism: 'personal-freedom-01/R2',
        AnarchoCapitalism: 'personal-freedom-01/R3',
        Avaritionism: 'personal-freedom-01/R4',
        GreenLiberalism: 'means-of-production-01/R1',
        NordicModel: 'means-of-production-01/R3',
        Progressivism: 'means-of-production-01/R4',
        Georgism: 'means-of-production-01/R5',
        DemocraticSocialism: 'means-of-production-01/R6',
        LibertarianSocialism: 'means-of-production-01/R7',
        MinarchoSocialism: 'means-of-production-01/R8',
        ChristianSocialism: 'means-of-production-01/R9',
        MarketSocialism: 'means-of-production-01/R10',
        CouncilCommunism: 'means-of-production-01/R11',
        LiberalSocialism: 'means-of-production-01/R12',
        MonarchoSyndicalism: 'means-of-production-01/R13',
        Syndicalism: 'means-of-production-01/R14',
        UtopianSocialism: 'means-of-production-01/R15',
        Communalism: 'means-of-production-01/R16',
        SyndicalistMutualism: 'free-market-01/R1',
        Mutualism: 'free-market-01/R2',
        AnarchoPrimitivism: 'free-market-01/R3',
        Egoism: 'free-market-01/R4',
        DemocraticConfederalism: 'free-market-01/R5',
        LibertarianMunicipalism: 'free-market-01/R6',
        Soulism: 'free-market-01/R7',
        AnarchoPacifism: 'free-market-01/R8',
        AnarchoSyndicalism: 'free-market-01/R9',
        SocialAnarchism: 'free-market-01/R10',
        AnarchoCommunism: 'free-market-01/R11'
    };
    const resultImageIds = {
        SocialDemocracy: 'social-democracy-01/X3',
        Fascism: 'fascism-01/X3'
    };

    function resolveLanguage() {
        const requested = new URLSearchParams(window.location.search).get('lang');
        if (requested === 'en' || requested === 'zh') return requested;
        try {
            const saved = window.localStorage.getItem('homepageLanguage');
            if (saved === 'en' || saved === 'zh') return saved;
        } catch {
            // Explicit language links also work without browser storage.
        }
        return 'en';
    }

    const language = resolveLanguage();

    const feedbackCopy = {
        resultFeedback: { zh: '结果不准确？', en: 'My result seems inaccurate' },
        feedbackLabel: { zh: '你觉得哪里不准确？', en: 'What seems inaccurate?' },
        feedbackHint: {
            zh: '可以描述不符合你的观点的地方，或你认为更合适的结果（最多 5000 字）。',
            en: 'Tell me what does not reflect your views, or which result would fit better (up to 5,000 characters).'
        },
        feedbackCancel: { zh: '取消', en: 'Cancel' },
        feedbackClose: { zh: '关闭', en: 'Close' },
        feedbackSubmit: { zh: '提交反馈', en: 'Submit feedback' },
        feedbackSubmitting: { zh: '正在提交……', en: 'Submitting…' },
        feedbackEmpty: { zh: '请先填写反馈内容。', en: 'Please enter your feedback first.' },
        feedbackTooLong: { zh: '反馈内容不能超过 5000 字。', en: 'Please keep your feedback within 5,000 characters.' },
        feedbackSuccess: { zh: '反馈已保存，谢谢你的反馈！', en: 'Your feedback has been saved. Thank you!' },
        feedbackError: {
            zh: '反馈未能保存，请重试。你输入的内容已保留。',
            en: 'Your feedback could not be saved. Please try again. Your text has been kept.'
        },
        feedbackUnavailable: {
            zh: '当前页面未连接反馈服务，请通过本地反馈服务打开网站后再提交。你输入的内容已保留。',
            en: 'This page is not connected to the feedback service. Open the site through the local feedback server to submit. Your text has been kept.'
        }
    };

    function text(id, original) {
        const entry = copy[id];
        // Leave unreviewed or subsequently changed Chinese copy intact.
        return language === 'en' && entry && entry.zh === original ? entry.en : original;
    }

    function optionText(key, option, original) {
        const id = optionIds[key]?.[option] ?? `${questionIds[key]}.${option}`;
        if (language === 'en' && copy[id] && optionSourceVariants[key]?.[option] === original) {
            return copy[id].en;
        }
        return text(id, original);
    }

    function ui(key) {
        if (feedbackCopy[key]) return feedbackCopy[key][language];
        const id = uiIds[key];
        return text(id, copy[id].zh);
    }

    function href(page) {
        return `${page}?lang=${language}`;
    }

    function applyPageLanguage() {
        document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
        document.querySelectorAll('[data-i18n]').forEach(element => {
            element.textContent = ui(element.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-alt]').forEach(element => {
            element.setAttribute('alt', ui(element.dataset.i18nAlt));
        });
        try {
            window.localStorage.setItem('homepageLanguage', language);
        } catch {
            // Rendering and navigation do not depend on saving the preference.
        }
    }

    window.SiteI18n = {
        language,
        ui,
        href,
        applyPageLanguage,
        questionText: (key, original) => text(questionIds[key], original),
        optionText,
        resultText: (key, original) => text(resultIds[key], original),
        resultImageAlt: (key, original) => language === 'en'
            ? copy[resultImageIds[key]]?.en ?? original
            : original
    };
})();
