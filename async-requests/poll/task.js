let xhr = new XMLHttpRequest();
const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

xhr.addEventListener('readystatechange', () => {

    if(xhr.readyState === xhr.DONE) {
        const response = JSON.parse(xhr.responseText).data;

        createPollInfo(response);
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.send();

function createPollInfo(response) {
    pollTitle.textContent = response.title;

    for (let responseAnswers of response.answers) {

        let answer = document.createElement('button');
        answer.classList.add('poll__answer');
        answer.textContent = responseAnswers;

        pollAnswers.appendChild(answer);

        answer.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        })
    }
}