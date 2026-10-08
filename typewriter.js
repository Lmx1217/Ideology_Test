document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in-text');
    let totalDelay = 0;

    elements.forEach((element, elementIndex) => {
        const text = element.innerHTML;
        element.innerHTML = ''; // 清空元素内容
        let newHTML = '';
        let isTag = false;
        let currentTag = '';

        for (let i = 0; i < text.length; i++) {
            if (text[i] === '<') {
                isTag = true;
                currentTag = text[i];
            } else if (isTag && text[i] === '>') {
                isTag = false;
                currentTag += text[i];
                newHTML += `<span class="hidden">${currentTag}</span>`;
                currentTag = '';
            } else if (isTag) {
                currentTag += text[i];
            } else {
                newHTML += `<span class="hidden">${text[i]}</span>`;
            }
        }
        element.innerHTML = newHTML;

        const spans = element.querySelectorAll('span');
        spans.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add('fade-in-text');
                span.classList.remove('hidden');
            }, totalDelay + (index * 5)); // 每个字的延迟时间
        });

        totalDelay += spans.length * 5; // 计算总的延迟时间
    });
});
