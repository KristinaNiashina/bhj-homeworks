let tab = document.querySelectorAll('.tab');
let tabContent = document.querySelectorAll('.tab__content');


for (let i = 0; i < tab.length; i++){
    tab[i].addEventListener('click', () => {
        tab.forEach((item) => {
            item.classList.remove('tab_active');
        })
        tabContent.forEach(item => {
            item.classList.remove('tab__content_active');
        })
        tab[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
    })
}