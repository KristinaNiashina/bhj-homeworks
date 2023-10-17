let reveals = document.querySelectorAll('.reveal');


function appearAd(){
    reveals.forEach(item => {
        let rectReveal = item.getBoundingClientRect();
        if(rectReveal.bottom >= 0 && rectReveal.top <= window.innerHeight){
            item.classList.add('reveal_active');
        }
        else{
            item.classList.remove('reveal_active');
        }

    })
}

window.addEventListener('scroll', appearAd);
