'use strict';
// select elements
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
// set scores to 0
score0.textContent = 0;
score1.textContent = 0;
// hide dice
let dice = document.querySelector('.dice')
dice.classList.add('hidden');
