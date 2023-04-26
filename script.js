'use strict';
// generate random number between 1 and 20
 let randao = Math.trunc(Math.random() * 20) + 1;

 // create variable that will store remaining attempts
let attemptRemaining = 20;
let msg;
let highScore = 0;

// create logic behind checking if the number is correct
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    attemptRemaining = attemptRemaining - 1;

    if (guess === randao) {
        msg = 'Correct Number!';
        document.querySelector('.number').textContent = randao;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
// check highscore
        if (highScore <= attemptRemaining) {
            highScore = attemptRemaining;
            document.querySelector('.highscore').textContent = highScore;
        };

    } else if (!guess) {
        msg = 'No Number!';
    } else if (attemptRemaining > 1) {
        if (guess < randao) {
            msg = 'Number too low!';
        } else if (guess > randao) {
            msg = 'Number too high!';
        }
    } else if (attemptRemaining > 0) {
        msg = 'The End!';   
    };

    document.querySelector('.message').textContent = msg;
    document.querySelector('.score').textContent = attemptRemaining;
});

// restore page to initial state (restart game)
document.querySelector('.again').addEventListener('click', function(){
    randao = Math.trunc(Math.random() * 20) + 1;
    attemptRemaining = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = attemptRemaining;
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

});