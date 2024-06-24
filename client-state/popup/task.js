let modal = document.querySelector('#subscribe-modal');
let modalClose = document.querySelector('.modal__close');

if (!getCookie('modalClose')) {
    modal.classList.add('modal_active');

    modalClose.addEventListener('click', () => {
        setCookie('modalClose', 'true');
        modal.classList.remove('modal_active');
    });
}

function setCookie(key, value) {
    document.cookie = key + '=' + value;
}

function getCookie(key) {
    const name = key + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        if (cookieArray[i].trim().startsWith(name)) {
            return cookieArray[i].trim().substring(name.length, name.length + 1);
        }
    }
    return null;
}