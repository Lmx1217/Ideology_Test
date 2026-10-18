document.addEventListener('DOMContentLoaded', function() {
    const versions = document.querySelectorAll('.version');
    versions.forEach((version, index) => {
        setTimeout(() => {
            version.style.opacity = '1';
            version.style.transform = 'scale(1)';
        }, index * 100);
    });
});
