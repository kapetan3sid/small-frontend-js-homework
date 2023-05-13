'use strict';
// select elements
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

const playerScores = [0, 0];
let currentScore = 0;
let playerNum = 0;

//rolling dice function
bntRoll.addEventListener('click', function() {
    const diceNum = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${diceNum}.png`;
    dice.classList.remove('hidden');

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

    }
});