'use strict';
const modal = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
const btnShow = document.querySelectorAll('.show-modal');

const openModel = function () {
  console.log(`btn is clicked`);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShow.length; i++) {
  btnShow[i].addEventListener('click', openModel);
}

btnClose.addEventListener('click', closeModel);
overlay.addEventListener('click', closeModel);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModel();
  }
});
