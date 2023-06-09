const characterBox = document.getElementById('character-box');
const block = document.getElementById('block');
const character = document.getElementById('character');



let gameover = new Audio('sounds effect/die.mp3');
let music = new Audio('sounds effect/tr.mp3');

let score = document.getElementById('score');
let scoreIncrease = 0;

music.loop = true;
music.play();
music.volume=0.5;

document.addEventListener('click', jump);
function jump() {
    if (characterBox.classList == 'jump') {
        return;
    }
    characterBox.classList.add('jump');
    
    setTimeout(() => {
        characterBox.classList.remove('jump')


    },700);

}
let flag = 1;
function check() {

    let blockleft = parseInt(window.getComputedStyle(block). getPropertyValue('left'));
    let characterbottom = parseInt(window.getComputedStyle (characterBox).getPropertyValue('bottom'));

    if (blockleft > 30 && blockleft < 336 && characterbottom <= 150) {

        music.pause();
        block.style.animationPlayState = 'paused';
        character.style.animationPlayState = 'paused';
        characterBox.style.animationPlayState = 'paused';


        if (flag == 1) {
            gameover.play();
            setTimeout(() => {
                gameover.pause();
            }, 1000);
            flag++;
        }


    }
    else {

        scoreIncrease++
        score.innerHTML = scoreIncrease;
    }


}

setInterval(() => {
    check();

}, 10);