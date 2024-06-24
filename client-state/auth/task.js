let form = document.querySelector('#signin__form');
let xml = new XMLHttpRequest();
let signStep = document.querySelector('.signin');
let welcomeStep = document.querySelector('.welcome');

if(!isAuthUser('userId')) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let formData = new FormData(form);

        xml.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
        xml.send(formData);

        xml.onload = () => {
            if (xml.readyState === xml.DONE) {
                let response = JSON.parse(xml.response);
                if(response.success) {
                    localStorage.setItem('userId', response.user_id);
                    redirectToHomePage('userId');
                } else {
                    alert('Неверный логин/пароль');
                    form.reset();
                }
            }
        };
    })
} else {
    redirectToHomePage('userId');
}

function isAuthUser(key) {
   return localStorage.getItem(key);
}

function redirectToHomePage(userId) {
    signStep.classList.remove('signin_active');
    welcomeStep.classList.add('welcome_active');
    welcomeStep.querySelector('#user_id').textContent = localStorage.getItem(userId);
}
