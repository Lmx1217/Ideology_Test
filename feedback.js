(function () {
    const dialog = document.getElementById('feedback-dialog');
    const form = document.getElementById('feedback-form');
    const input = document.getElementById('feedback-text');
    const status = document.getElementById('feedback-status');
    const submitButton = document.getElementById('feedback-submit');
    const cancelButton = document.getElementById('feedback-cancel');
    let submitting = false;
    let saved = false;

    function setStatus(key, isError = false) {
        status.textContent = key ? SiteI18n.ui(key) : '';
        status.dataset.error = String(isError);
        input.setAttribute('aria-invalid', String(isError && ['feedbackEmpty', 'feedbackTooLong'].includes(key)));
    }

    function reset() {
        dialog.close();
        form.reset();
        saved = false;
        input.disabled = false;
        submitButton.hidden = false;
        setStatus('');
        cancelButton.textContent = SiteI18n.ui('feedbackCancel');
    }

    cancelButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('cancel', event => {
        if (submitting) event.preventDefault();
    });

    form.addEventListener('submit', async event => {
        event.preventDefault();
        if (submitting || saved) return;
        const text = input.value.trim();
        if (!text || input.value.length > 5000) {
            setStatus(text ? 'feedbackTooLong' : 'feedbackEmpty', true);
            input.focus();
            return;
        }
        if (!['http:', 'https:'].includes(window.location.protocol)) {
            setStatus('feedbackUnavailable', true);
            return;
        }

        submitting = true;
        input.disabled = true;
        submitButton.disabled = true;
        cancelButton.disabled = true;
        form.setAttribute('aria-busy', 'true');
        submitButton.textContent = SiteI18n.ui('feedbackSubmitting');
        setStatus('');
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 15000);
        try {
            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text }),
                signal: controller.signal
            });
            if ([404, 405, 501].includes(response.status)) {
                setStatus('feedbackUnavailable', true);
                return;
            }
            const result = await response.json();
            if (!response.ok || result.saved !== true) throw new Error('Feedback was not saved');
            saved = true;
            input.value = '';
            submitButton.hidden = true;
            cancelButton.textContent = SiteI18n.ui('feedbackClose');
            setStatus('feedbackSuccess');
        } catch {
            setStatus('feedbackError', true);
        } finally {
            clearTimeout(timeout);
            submitting = false;
            input.disabled = saved;
            submitButton.disabled = false;
            cancelButton.disabled = false;
            form.setAttribute('aria-busy', 'false');
            submitButton.textContent = SiteI18n.ui('feedbackSubmit');
            if (saved) cancelButton.focus();
        }
    });

    window.ResultFeedback = {
        open() {
            dialog.showModal();
            if (saved) cancelButton.focus();
            else input.focus();
        },
        reset
    };
})();
