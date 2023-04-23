'use strict';
// generate random number between 1 and 20
 const randao = Math.trunc(Math.random() * 20) + 1;

 // create variable that will store remaining attempts
let attemptRemaining = 20;

// create logic behind checking if the number is correct
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    let msg;

    if (guess === randao) {
        msg = 'Correct Number!';
        document.querySelector('.number').textContent = randao;
    } else if (attemptRemaining > 1) {
        if (guess < randao) {
            msg = 'Number too low!';
        } else if (guess > randao) {
            msg = 'Number too high!';
        }
    } else if (attemptRemaining > 0) {
        msg = 'The End!';   
    };

    attemptRemaining = attemptRemaining - 1;
    document.querySelector('.message').textContent = msg;
    document.querySelector('.score').textContent = attemptRemaining;
});