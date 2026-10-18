let path = ['initial']; // 用于保存用户选择的路径
let selectedOptions = [];

function selectOption(option) {
    console.log("Selected option:", option);
    console.log("Current path:", path);
    const currentQuestionKey = path[path.length - 1];
    const currentQuestion = questions[currentQuestionKey];
    const nextKey = currentQuestion.next[option];
    selectedOptions.push(option);
    path.push(nextKey);

    if (questions[nextKey].question) {
        loadQuestion(nextKey);
    } else if (questions[nextKey].result) {
        document.getElementById('answer-context').hidden = true;
        const questionText = document.getElementById('question');
        questionText.classList.add('result-text');
        questionText.innerText = SiteI18n.resultText(nextKey, questions[nextKey].result);

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
}

function loadQuestion(questionKey) {
    ResultFeedback.reset();
    const questionData = questions[questionKey];
    const questionText = document.getElementById('question');
    questionText.classList.remove('result-text');
    questionText.innerText = SiteI18n.questionText(questionKey, questionData.question);

    const answerContext = document.getElementById('answer-context');
    const previousAnswer = document.getElementById('previous-answer');
    answerContext.hidden = path.length === 1;
    previousAnswer.textContent = '';
    if (path.length > 1) {
        const previousQuestionKey = path[path.length - 2];
        const previousOption = selectedOptions[selectedOptions.length - 1];
        previousAnswer.textContent = SiteI18n.optionText(previousQuestionKey, previousOption,
            questions[previousQuestionKey].options[previousOption]);
    }

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
}

function restartQuiz() {
    path = ['initial'];
    selectedOptions = [];
    loadQuestion('initial');
}

function goBack() {
    if (path.length <= 1) return;
    path.pop();
    selectedOptions.pop();
    loadQuestion(path[path.length - 1]);
}

document.addEventListener('DOMContentLoaded', () => {
    SiteI18n.applyPageLanguage();
    loadQuestion('initial');
});

function showVersion() {
    window.location.href = SiteI18n.href('index.html');
}
