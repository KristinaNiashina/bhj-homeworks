let counter = document.getElementById('clicker__counter');
let cookie = document.getElementById('cookie');


cookie.onclick = () => {
    counter.textContent = Number(counter.textContent) + 1;
    setTimeout(() => {
        cookie.width = 200;
    },50)
    cookie.width = 240;
};