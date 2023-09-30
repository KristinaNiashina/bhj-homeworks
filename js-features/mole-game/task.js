let hole = document.getElementsByClassName('hole');
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');

for (let i = 0; i <hole.length; i++){
    hole[i].onclick = () => {
        if(hole[i].className.includes('hole_has-mole')){
            deadMole.textContent = Number(deadMole.textContent) + 1;
            if(Number(deadMole.textContent) === 10){
                alert('Победа');
                deadMole.textContent = '0';
                lostMole.textContent = '0';
            }
        }
        else{
            lostMole.textContent = Number(lostMole.textContent) + 1;
            if(Number(lostMole.textContent) === 5){
                alert('Проигрыш');
                deadMole.textContent = '0';
                lostMole.textContent = '0';
            }
        }
    }
}
