let rotators = document.querySelectorAll('.rotator');

rotators.forEach(item => {
    let rotatorCase = item.querySelectorAll('.rotator__case');
    let counter = 0;

    function counterFunc() {
        rotatorCase.forEach(item => {
            item.classList.remove('rotator__case_active');
        })
        rotatorCase[counter].classList.add('rotator__case_active');
        counter = (counter + 1) % 5;
    }
    setInterval(counterFunc, 1000);
})



