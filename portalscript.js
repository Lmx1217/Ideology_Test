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
            window.location.href = SiteI18n.href('test.html');
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
    alert(SiteI18n.ui('feedbackMessage'));
}

function switchLanguage() {
    const url = new URL(window.location.href);
    url.searchParams.set('lang', SiteI18n.language === 'en' ? 'zh' : 'en');
    window.location.assign(url.href);
}

function showVersion() {
    alert(SiteI18n.ui('versionLabel') + ' alpha-1.6.0a-2024.7.25');
}

function games() {
    window.location.href = 'games/snake/snake.html';
}

SiteI18n.applyPageLanguage();
