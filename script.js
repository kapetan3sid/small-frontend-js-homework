'use strict';
// generate random number between 1 and 20
 const randao = Math.trunc(Math.random() * 20) + 1;
 document.querySelector('.number').textContent = randao;
// create variable that will store remaining attempts
let attemptRemaining = 20;
// create logic behind checking if the number is correct
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    if (guess === randao) {
        document.querySelector('.message').textContent = 'Corrent Number!';
        attemptRemaining = attemptRemaining - 1;
        document.querySelector('.score').textContent = attemptRemaining;
    } else if (attemptRemaining > 1) {
        if (guess < randao) {
            document.querySelector('.message').textContent = 'Number too low!';
            attemptRemaining = attemptRemaining - 1;
            document.querySelector('.score').textContent = attemptRemaining;
        } else if (guess > randao) {
            document.querySelector('.message').textContent = 'Number too high!';
            attemptRemaining = attemptRemaining - 1;
            document.querySelector('.score').textContent = attemptRemaining;  
        }
    } else if (attemptRemaining > 0) {
        document.querySelector('.message').textContent = 'The End!';
        attemptRemaining = attemptRemaining - 1;
        document.querySelector('.score').textContent = attemptRemaining;   
    };
});