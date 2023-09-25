'use strict';

let score = 20;
let highscore = 0;

let scoreEl = document.querySelector('.score');
let bodyEl = document.querySelector('body');
let messageEl = document.querySelector('.message');
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

document.querySelector('.check').addEventListener('click', function () {
  whatIs = Number(localStorage.getItem('randomNumber'));

  const guess = Number(guessEl.value);

  // if player doesnt enter a number
  if (!guess) {
    messageEl.textContent = 'Enter your guess between 1 - 20!';

    // if a player guesses correctly!
  } else if (guess === whatIs) {
    score--;
    scoreEl.textContent = score;
    bodyEl.style.backgroundColor = '#60b347';
    messageEl.textContent = "You're a Winner!";
    numberEl.textContent = whatIs;
    numberEl.style.width = '30rem';
    checkEl.disabled = true;

    // check if the final score is higher than highscore!

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = score;
    }

    // if player guesses to high!
  } else if (score > 1) {
    messageEl.textContent = guess > whatIs ? 'Too high!' : 'Too low!';
    score--;
    scoreEl.textContent = score;
  } else {
    messageEl.textContent = 'You lost the game!';
    scoreEl.textContent = 0;
  }

  //     const age = 26;
  // const beverage = age >= 21 ? "Beer" : "Juice";
  // console.log(beverage); // "Beer"

  //// else if ( guess > whatIs && score > 1) ? messageEl.textContent = "Too high!" : "Too low!" ;
  //// score--;
  //// scoreEl.textContent = score;
  //// do I need to run this (score > 1) first? how does that effect the logic...?

  //   } else if (guess > whatIs) {
  //     // check if the player hasnt used up all the tries
  //     if (score > 1) {
  //       messageEl.textContent = 'Too high!';
  //       score--;
  //       scoreEl.textContent = score;
  //     } else {
  //       // no more credits so looses
  //       messageEl.textContent = 'You lost the game!';
  //       scoreEl.textContent = 0;
  //     }
  //     // player gueses too low
  //   } else if (guess < whatIs) {
  //     if (score > 1) {
  //       score--;
  //       scoreEl.textContent = score;
  //       messageEl.textContent = 'Too low!';
  //     } else {
  //       messageEl.textContent = 'You lost the game!';
  //       scoreEl.textContent = 0;
  //     }
  //   }
});

// reset the game when again is clicked!
againEl.addEventListener('click', function () {
  score = 20;
  scoreEl.textContent = score;
  bodyEl.style.backgroundColor = '#222';
  messageEl.textContent = 'Try to beat the highscore!';
  checkEl.disabled = false;
  numberEl.textContent = '?';
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

// I really like to take the script over to a new js file, refining and refactoring, this makes a nice way to check the adjustments easily with the previous version... incase I break something aha! or more like when... hahaha
