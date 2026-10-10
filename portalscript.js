const homepageTranslations = {
    // Keep direct translations when they read naturally in US English; adapt where needed.
    en: {
        title: 'Where You Stand?',
        startTest: 'Start',
        miniGames: 'Mini Games',
        notes: 'How to Get Accurate Results',
        versionHistory: 'Version History',
        feedback: 'Report',
        switchLanguage: '中文',
        feedbackMessage: 'Found a bug or have a suggestion? Email notavailable.',
        versionLabel: 'Version: '
    },
    zh: {
        title: '意识形态测试',
        startTest: '开始测试',
        miniGames: '小游戏',
        notes: '如何获得准确的结果',
        versionHistory: '版本历史记录',
        feedback: '反馈问题',
        switchLanguage: 'English',
        feedbackMessage: '任何问题或建议，请发送邮件至notavailable',
        versionLabel: '版本：'
    }
};

function isHomepageLanguage(language) {
    return language === 'en' || language === 'zh';
}

function resolveHomepageLanguage() {
    const urlLanguage = new URLSearchParams(window.location.search).get('lang');
    if (isHomepageLanguage(urlLanguage)) {
        return urlLanguage;
    }

    try {
        const savedLanguage = window.localStorage.getItem('homepageLanguage');
        if (isHomepageLanguage(savedLanguage)) {
            return savedLanguage;
        }
    } catch {
        // Language links still work when browser storage is unavailable.
    }

    return 'en';
}

const homepageLanguage = resolveHomepageLanguage();
const homepageText = homepageTranslations[homepageLanguage];

function applyHomepageLanguage() {
    document.documentElement.lang = homepageLanguage === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(element => {
        element.textContent = homepageText[element.dataset.i18n];
    });

    try {
        window.localStorage.setItem('homepageLanguage', homepageLanguage);
    } catch {
        // Remembering the language is optional; rendering does not depend on it.
    }
}

function startTest() {
    const containerall = document.querySelector('.containerall');
    const optionButtons = document.querySelectorAll('.option-button1');
    const header = document.querySelector('h1');
    const startButton = document.querySelector('.option-button');

    // 隐藏其他按钮和标题，但保持占位
    optionButtons.forEach(button => button.classList.add('hidden'));
    header.classList.add('hidden');

    // 改变容器的背景颜色为与外部相同的灰色
    // 获取当前主题
    const currentTheme = document.body.getAttribute("data-theme");

    // 获取containerall元素
    const containerAll = document.querySelector(".containerall");

    // 根据当前主题设置containerall的颜色
    if (currentTheme === "dark") {
    containerAll.style.backgroundColor = "#141414";
    containerall.style.boxShadow = '0 0 10px rgba(30, 30, 30, 0.1)';
    } else {
    containerAll.style.backgroundColor = "#f4f4f4";
    containerall.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.1)';
    }

    // 延迟0.2秒后执行动画
    setTimeout(() => {
        // 为 .option-button 添加动画类
        startButton.classList.add('animate');

        // 在动画结束后进行跳转
        startButton.addEventListener('animationend', function() {
            window.location.href = 'test.html';
        });
    }, 400); // 200毫秒延迟
}

function showNotes() {
    window.location.href = 'note.html';
}

function history() {
    window.location.href = 'history.html';
}

function giveFeedback() {
    alert(homepageText.feedbackMessage);
}

function switchLanguage() {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', homepageLanguage === 'en' ? 'zh' : 'en');
    window.location.assign(url.href);
}

function showVersion() {
    alert(homepageText.versionLabel + 'alpha-1.6.0a-2024.7.25');
}

function games() {
    window.location.href = 'games/snake/snake.html';
}

applyHomepageLanguage();
