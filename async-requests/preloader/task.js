let xhr = new XMLHttpRequest();
let loader = document.querySelector('.loader_active');
let item = document.querySelector('.item');

xhr.addEventListener('readystatechange', () => {

    if(xhr.readyState === xhr.DONE) {
        const response = JSON.parse(xhr.responseText).response.Valute;
        loader.classList.remove('loader_active');

        createValuteInfo(response);
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

function createValuteInfo(response) {
    for (let valuteKey in response) {
        const valuteItem = response[valuteKey];

        const clonedElement = item.cloneNode(true);

        let firstChild = document.createElement('div');
        firstChild.classList.add('item__code');
        firstChild.textContent = valuteKey;
        clonedElement.appendChild(firstChild);

        let secondChild = document.createElement('div');
        secondChild.classList.add('item__value');
        secondChild.textContent = valuteItem.Value;
        clonedElement.appendChild(secondChild);

        let thirdChild = document.createElement('div');
        thirdChild.classList.add('item__currency');
        thirdChild.textContent = 'руб.';
        clonedElement.appendChild(thirdChild);

        item.parentNode?.appendChild(clonedElement);
    }
}