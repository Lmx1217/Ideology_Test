let path = ['initial']; // 用于保存用户选择的路径

function loadQuestion(questionKey) {
    const questionData = questions[questionKey];
    document.getElementById('question').innerText = questionData.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    for (const [key, value] of Object.entries(questionData.options)) {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.innerText = value;
        button.onclick = () => selectOption(key);
        optionsContainer.appendChild(button);
    }

    if (path.length > 1) {
        const backButton = document.createElement('button');
        backButton.className = 'option-button back-button';
        backButton.innerText = '后退';
        backButton.onclick = () => goBack();
        optionsContainer.appendChild(backButton);
    }

    document.getElementById('result-image').style.display = 'none'; // 隐藏结果图片
}

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

    backButton.style.display = 'block';

    // 使用 requestAnimationFrame 确保动画开始
    requestAnimationFrame(() => {
        const randomTime = Math.random() * 1500 + 500; // 随机时间在 0.5s 到 2s 之间
        progressBar.style.transition = `width ${randomTime}ms ease`;
        progressBar.style.width = '100%';

        setTimeout(() => {
            loadingContainer.style.display = 'none';
            questionContainer.style.display = 'block';
            optionsContainer.style.display = 'block';
            backButton.style.display = path.length > 1 ? 'block' : 'none';
            callback();
        }, randomTime);
    });
}

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
            document.getElementById('question').innerText = questions[nextKey].result;

            const resultImage = document.getElementById('result-image');
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
            restartButton.innerText = '再来一次';
            restartButton.onclick = () => restartQuiz();
            optionsContainer.appendChild(restartButton);

            const backButton = document.getElementById('back-button');
            backButton.style.display = 'block';
        }
    });
}

function loadQuestion(questionKey) {
    const questionData = questions[questionKey];
    document.getElementById('question').innerText = questionData.question;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    for (const [key, value] of Object.entries(questionData.options)) {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.innerText = value;
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
    loadQuestion('initial');
});

function showVersion() {
    window.location.href = 'index.html';
}
