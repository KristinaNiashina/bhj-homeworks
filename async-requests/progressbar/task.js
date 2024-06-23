let xhr = new XMLHttpRequest();
let formInfo = document.getElementById('form');
let progressBar = document.querySelector("progress")
formInfo.addEventListener('submit', (event) => {
    event.preventDefault();

    let formData = new FormData(formInfo);

    xhr.upload.onprogress = function(event) {
        progressBar.value = event.loaded / 10000000;
    }

    xhr.upload.onload = function(event) {
        progressBar.value = event.total;
    }

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
    xhr.send(formData);
})

