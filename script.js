
(function () {
  
    const bEl = document.getElementById('browserInfo');
    if (bEl) bEl.textContent = 'Ваш браузер: ' + navigator.userAgent;

 
    const a = 12, b = 4;
    const out = document.getElementById('mathOutput');
    if (out) {
        out.innerHTML = '<p><b>Сума:</b> ' + (a + b) + '</p>' +
            '<p><b>Різниця:</b> ' + (a - b) + '</p>';
    }
  
    window.addEventListener('load', () => {
        alert('Добуток: ' + (a * b));
        alert('Ділення: ' + (a / b));
    });

    function attachZoomHandlers() {
        document.querySelectorAll('.zoomable').forEach(img => {
            img.addEventListener('mouseenter', () => img.classList.add('enlarged'));
            img.addEventListener('mouseleave', () => img.classList.remove('enlarged'));
        });
    }

    const imageContainer = document.getElementById('imageContainer');
    const defaultImageContainerHTML = imageContainer ? imageContainer.innerHTML : '';
    function showImage(value) {
        if (!imageContainer) return;
        imageContainer.innerHTML = `
      <div>
        <button id="backBtn">Повернутися</button><br><br>
        <img src="photo/${value}.png" alt="big" width="600" height="400" class="zoomable">
        <p>Мала копія:</p>
        <img src="photo/${value}.png" alt="small" width="300" height="200" class="zoomable">
      </div>
    `;
        attachZoomHandlers();
        const back = document.getElementById('backBtn');
        if (back) back.addEventListener('click', backToMain);
    }
    function backToMain() {
        if (!imageContainer) return;
        imageContainer.innerHTML = defaultImageContainerHTML;
        attachRadioListeners(); 
    }

    function attachRadioListeners() {
        document.querySelectorAll('input[type=radio][name=pic]').forEach(r => {
            r.removeEventListener('change', onRadioChange);
            r.addEventListener('change', onRadioChange);
        });
    }
    function onRadioChange(e) { showImage(e.target.value); }

 
    document.querySelectorAll('nav a').forEach(a => {
        a.addEventListener('mouseenter', () => a.classList.add('nav-hover'));
        a.addEventListener('mouseleave', () => a.classList.remove('nav-hover'));
    });
   

 
    function goToPage(selectEl) {
        const url = selectEl.value;
        if (url) window.location.href = url;
    }

  
    function changeLanguage(lang) {
        const pages = {
            UA: 'index.html',
            RUS: 'index_ru.html',
        };
        const target = pages[lang];
        if (!target) {
            console.warn('Сторінка для мови не знайдена:', lang);
            return;
        }
        window.location.href = target;
    }

    const messages = [
        'Успіх — 1% натхнення і 99% праці.',
        'Програмісти не помиляються — у них фічі.',
        'Код — як гумор: якщо треба пояснювати, значить погано.',
        'Чистий код економить час усім.',
        'Навчайся кожен день.'
    ];
    function showRandomMessage() {
        const i = Math.floor(Math.random() * messages.length);
        console.log('Інформація дня:', messages[i]);
    }

    window.changeLanguage = changeLanguage;
    window.goToPage = goToPage;
    window.showImage = showImage;
    window.backToMain = backToMain;

    attachZoomHandlers();
    attachRadioListeners();
    showRandomMessage();
})();
