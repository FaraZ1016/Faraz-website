// script.js
document.addEventListener('DOMContentLoaded', () => {
    const languageSwitch = document.getElementById('language-switch');
    const contentEn = document.getElementById('content-en');
    const contentFa = document.getElementById('content-fa');

    // Set initial language based on browser or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    languageSwitch.value = savedLanguage;
    updateLanguage(savedLanguage);

    languageSwitch.addEventListener('change', (e) => {
        const selectedLanguage = e.target.value;
        updateLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
    });

    function updateLanguage(lang) {
        if (lang === 'en') {
            contentEn.classList.remove('hidden');
            contentFa.classList.add('hidden');
            document.documentElement.lang = 'en';
            document.documentElement.dir = 'ltr';
        } else {
            contentEn.classList.add('hidden');
            contentFa.classList.remove('hidden');
            document.documentElement.lang = 'fa';
            document.documentElement.dir = 'rtl';
        }
    }
});
