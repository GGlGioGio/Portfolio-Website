document.getElementById('emailBtn').addEventListener('click', function() {
    // 1. Укажите здесь свой настоящий рабочий email
    const emailAddress = "khelaia.gg@gmail.com"; 
    
    // 2. Используем Clipboard API для копирования текста в буфер обмена
    navigator.clipboard.writeText(emailAddress).then(() => {
        const btn = document.getElementById('emailBtn');
        
        // Сохраняем исходное содержимое кнопки, чтобы вернуть его позже
        const originalContent = `Email <i class="fa-solid fa-envelope"></i>`;
        
        // Изменяем текст и ставим галочку вместо конверта
        btn.innerHTML = `Copied! <i class="fa-solid fa-check"></i>`;
        
        // Блокируем кнопку на время анимации, чтобы избежать повторных частых кликов
        btn.style.pointerEvents = 'none'; 
        
        // Через 2 секунды (2000 миллисекунд) возвращаем всё в исходное состояние
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.pointerEvents = 'auto'; // Возвращаем кнопке кликабельность
        }, 2000);
    }).catch(err => {
        console.error('Couldnt copy the text: ', err);
    });
});