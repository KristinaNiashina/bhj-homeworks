let dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach( (item) => {
    let value = item.querySelector(".dropdown__value");
    let list = item.querySelector('.dropdown__list');
    let items = item.querySelectorAll('.dropdown__link');

    function toggleList(){
        list.classList.toggle('dropdown__list_active');
        items.forEach((element) => {
            element.onclick = (event) => {
                event.preventDefault();
                value.textContent = element.textContent;
                list.classList.remove('dropdown__list_active')
            }
        })
    }

    value.addEventListener('click', toggleList);

})


