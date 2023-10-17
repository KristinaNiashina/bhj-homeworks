let bookControls = document.querySelectorAll('.font-size');
let bookContent = document.querySelector('.book__content');


bookControls.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        bookControls.forEach(element => {
            element.classList.remove('font-size_active');
            item.classList.add('font-size_active');
            if(item.classList.contains('font-size_small')){
                bookContent.classList.add('font-size_small');
            }
            else if(item.classList.contains('font-size_big')){
                bookContent.classList.add('font-size_big');
            }
            else {
                bookContent.classList.remove('font-size_big', 'font-size_small');
            }
        })
    })
})

