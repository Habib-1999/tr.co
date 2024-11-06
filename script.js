// script.js
document.getElementById('translateBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    
    // Здесь можно подключить API перевода для получения перевода на разные языки
    // Для демонстрации заполним поля фиксированными значениями
    document.getElementById('outputRUS').value = inputText;
    document.getElementById('outputENG').value = "Translation in English";
    document.getElementById('outputTJ').value = "Translation in Tajik";
    document.getElementById('outputUZ').value = "Translation in Uzbek";
    document.getElementById('outputKZ').value = "Translation in Kazakh";
    document.getElementById('outputBEL').value = "Translation in Belarusian";
    document.getElementById('outputKG').value = "Translation in Kyrgyz";
    document.getElementById('outputAZR').value = "Translation in Azerbaijani";
    document.getElementById('outputUK').value = "Translation in Ukrainian";
});
