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
        versionLabel: 'social-democracy-01/X2'
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
        batter: 'fascism-01/Q5'
    };
    const resultIds = {
        SocialDemocracy: 'social-democracy-01/R1',
        Fascism: 'fascism-01/R1'
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

    function text(id, original) {
        const entry = copy[id];
        // Leave unreviewed or subsequently changed Chinese copy intact.
        return language === 'en' && entry && entry.zh === original ? entry.en : original;
    }

    function ui(key) {
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
        optionText: (key, option, original) => text(`${questionIds[key]}.${option}`, original),
        resultText: (key, original) => text(resultIds[key], original),
        resultImageAlt: (key, original) => language === 'en'
            ? copy[resultImageIds[key]]?.en ?? original
            : original
    };
})();
