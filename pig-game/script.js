'use strict';
// select elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const btnNew = document.querySelector('.btn--new');
const bntRoll = document.querySelector('.btn--roll');
const bntHold = document.querySelector('.btn--hold');

// set scores to 0
score0.textContent = 0;
score1.textContent = 0;

// hide dice
let dice = document.querySelector('.dice')
dice.classList.add('hidden');

let currentScore = 0;
let playerNum = 0;
let hold0 = 0;
let hold1 = 0;
let gameRunning = true;

//rolling dice function
bntRoll.addEventListener('click', function() {
    if (gameRunning) {
        const diceNum = Math.trunc(Math.random() * 6) + 1;
        dice.src = `dice-${diceNum}.png`;
        dice.classList.remove('hidden');
        // check if dice is 1
        if (diceNum != 1) {
        currentScore = currentScore + diceNum;
        document.getElementById(`current--${playerNum}`).textContent = currentScore;
        } else {
        document.getElementById(`current--${playerNum}`).textContent = 0;
        if (playerNum === 0) {
            playerNum = 1;
        } else {
            playerNum = 0; 
        }
        currentScore = 0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    }} else {

    }
});
// holding the score and switching to other player
bntHold.addEventListener('click', function() {
    // check if game is not finished
    if (gameRunning) {
        document.getElementById(`current--${playerNum}`).textContent = 0;
        if (playerNum === 0 ) {
        hold0 = hold0 + currentScore;
        score0.textContent = hold0;
        playerNum = 1;
        if (hold0 >= 20) {
            playing = false;
            document.querySelector('.player--0').classList.add('player--winner');
            document.querySelector('.player--0').classList.remove('player--active');
            dice.classList.add('hidden');
        };
    } else {
        hold1 = hold1 + currentScore;
        score1.textContent = hold1;
        playerNum = 0;
        if (hold1 >= 20) {
            playing = false;
            document.querySelector('.player--1').classList.add('player--winner');
            document.querySelector('.player--1').classList.remove('player--active');
            dice.classList.add('hidden');
        };
    };
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}
});
// reset all values to starting values
btnNew.addEventListener('click', function() {
    score0.textContent = 0;
    score1.textContent = 0;
    dice.classList.add('hidden');
    currentScore = 0;
    playerNum = 0;
    hold0 = 0;
    hold1 = 0;
    playing = true;
    document.getElementById(`current--0`).textContent = 0;
    document.getElementById(`current--1`).textContent = 0;
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--active');
})
