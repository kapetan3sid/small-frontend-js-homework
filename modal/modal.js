'use strict';
// new project
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnOpen = document.querySelectorAll('.show-modal');

// define variable that holds function that allows user to open modal
const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
// allow user to open modals by removing "hidden" in HTML class name
for (let i = 0; i < btnOpen.length; i++) {
    btnOpen[i].addEventListener('click', openModal);
};

// define variable that holds function that allows user to close modal
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// X button click close modal
btnClose.addEventListener('click', closeModal);
// overlay click close modal
overlay.addEventListener('click', closeModal)