let path = ['initial']; // 用于保存用户选择的路径

let loadingTimeout;
let loadingAnimationFrame;
let previousPath = [];

function showLoading(callback) {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const loadingContainer = document.getElementById('loading-container');
    const progressBar = document.querySelector('.progress');
    const backButton = document.getElementById('back-button');

    questionContainer.style.display = 'none';
    optionsContainer.style.display = 'none';
    loadingContainer.style.display = 'block';
    progressBar.style.width = '0';

    previousPath = [...path];  // 记录当前路径

    backButton.style.display = 'block';

    // 使用 requestAnimationFrame 确保动画开始
    loadingAnimationFrame = requestAnimationFrame(() => {
        const randomTime = Math.random() * 1500 + 500; // 随机时间在 0.5s 到 2s 之间
        progressBar.style.transition = `width ${randomTime}ms ease`;
        progressBar.style.width = '100%';

        loadingTimeout = setTimeout(() => {
            loadingContainer.style.display = 'none';
            questionContainer.style.display = 'block';
            optionsContainer.style.display = 'block';
            backButton.style.display = path.length > 1 ? 'block' : 'none';
            callback();
        }, randomTime);
    });
}

function selectOption(option) {
    console.log("Selected option:", option);
    console.log("Current path:", path);
    showLoading(() => {
        const currentQuestionKey = path[path.length - 1];
        const currentQuestion = questions[currentQuestionKey];
        const nextKey = currentQuestion.next[option];

        if (questions[nextKey].question) {
            path.push(nextKey);
            loadQuestion(nextKey);
        } else if (questions[nextKey].result) {
            document.getElementById('question').innerText = SiteI18n.resultText(nextKey, questions[nextKey].result);

            const resultImage = document.getElementById('result-image');
            resultImage.alt = SiteI18n.resultImageAlt(nextKey, 'Result Image');
            if (questions[nextKey].image) {
                resultImage.src = questions[nextKey].image;
                resultImage.style.display = 'block';
            } else {
                resultImage.style.display = 'none';
            }

            const optionsContainer = document.getElementById('options-container');
            optionsContainer.innerHTML = ''; // 清空选项

            // 插入按钮
            const restartButton = document.createElement('button');
            restartButton.className = 'option-button restart-button';
            restartButton.innerText = SiteI18n.ui('restart');
            restartButton.onclick = () => restartQuiz();
            optionsContainer.appendChild(restartButton);

            const feedbackButton = document.createElement('button');
            feedbackButton.id = 'result-feedback-button';
            feedbackButton.className = 'option-button feedback-button';
            feedbackButton.innerText = SiteI18n.ui('resultFeedback');
            feedbackButton.onclick = () => ResultFeedback.open();
            optionsContainer.appendChild(feedbackButton);

            const backButton = document.getElementById('back-button');
            backButton.style.display = 'block';
        }
    });
}

function loadQuestion(questionKey) {
    ResultFeedback.reset();
    const questionData = questions[questionKey];
    document.getElementById('question').innerText = SiteI18n.questionText(questionKey, questionData.question);

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    for (const [key, value] of Object.entries(questionData.options)) {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.innerText = SiteI18n.optionText(questionKey, key, value);
        button.onclick = () => selectOption(key);
        optionsContainer.appendChild(button);
    }

    const backButton = document.getElementById('back-button');
    backButton.style.display = path.length > 1 ? 'block' : 'none';

    document.getElementById('result-image').style.display = 'none'; // 隐藏结果图片
}

function restartQuiz() {
    path = ['initial'];
    loadQuestion('initial');
}

function goBack() {
    // 清除加载进度条
    clearTimeout(loadingTimeout);
    cancelAnimationFrame(loadingAnimationFrame);

    // 隐藏加载进度条并显示问题和选项
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const loadingContainer = document.getElementById('loading-container');
    const backButton = document.getElementById('back-button');
    const resultImage = document.getElementById('result-image');

    loadingContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    optionsContainer.style.display = 'block';

    // 隐藏结果图片
    resultImage.style.display = 'none';

    // 恢复到加载进度条前的路径
    if (previousPath.length > 0) {
        path = [...previousPath];
        previousPath = []; // 清空 previousPath
    } else {
        path.pop();
    }

    const previousQuestion = path[path.length - 1];
    loadQuestion(previousQuestion);

    backButton.style.display = path.length > 1 ? 'block' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    SiteI18n.applyPageLanguage();
    loadQuestion('initial');
});

function showVersion() {
    window.location.href = SiteI18n.href('index.html');
}
