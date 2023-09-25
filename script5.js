'use strict';

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// variables
let bodyEl = document.querySelector('body');
let numberEl = document.querySelector('.number');
let checkEl = document.querySelector('.check');
let highscoreEl = document.querySelector('.highscore');
let againEl = document.querySelector('.again');
let guessEl = document.querySelector('.guess');

localStorage.setItem(
  'randomNumber',
  `${Number(Math.floor(Math.random() * 20 + 1))}`
);
let whatIs = '';

checkEl.addEventListener('click', function () {
  whatIs = Number(localStorage.getItem('randomNumber'));

  const guess = Number(guessEl.value);

  // if player doesnt enter a number
  if (!guess) {
    displayMessage('Enter your guess between 1 - 20!');

    // if a player guesses correctly!
  } else if (guess === whatIs) {
    score--;
    displayScore(score);
    bodyEl.style.backgroundColor = '#60b347';
    displayMessage("You're a Winner!");
    displayNumber(whatIs);
    numberEl.style.width = '30rem';
    checkEl.disabled = true;

    // check if the final score is higher than highscore!

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = score;
    }

    // if player guesses to high!
  } else if (score > 1) {
    displayMessage(guess > whatIs ? 'Too high!' : 'Too low!');
    score--;
    displayScore(score);
  } else {
    displayMessage('You lost the game!');
    displayScore(0);
  }
});

// reset the game when again is clicked!
againEl.addEventListener('click', function () {
  score = 20;
  displayScore(score);
  bodyEl.style.backgroundColor = '#222';
  displayMessage('Try to beat the highscore!');
  checkEl.disabled = false;
  displayNumber('?');
  guessEl.value = '';
  localStorage.removeItem('randomNumber');
  localStorage.setItem(
    'randomNumber',
    `${Number(Math.floor(Math.random() * 20 + 1))}`
  );
  whatIs = Number(localStorage.getItem('randomNumber'));
  console.log(whatIs);
  numberEl.style.width = '15rem';
});
