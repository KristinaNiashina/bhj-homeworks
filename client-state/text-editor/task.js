let textareaContent = document.querySelector('#editor');

if (readData('textarea')) {
    textareaContent.value = readData('textarea');
}
textareaContent.addEventListener('input', () => {
    setTimeout(() => {
        saveData('textarea', textareaContent.value);
    }, 1000);
});

function readData(key) {
    return localStorage.getItem(key);
}

function saveData(key, value) {
    localStorage.setItem(key, value);
}
