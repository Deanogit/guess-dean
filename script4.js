'use strict';

// using functions instead of the variables to hold the html elements... not sure its easier to understand... but yeah I get it, if its reads, displayMessage('....') then this makes quite a lot of sense...

//

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

// not sure its worth it to refactor these variables into functions as they havent been repeated that much, like maybe twice....
// let scoreEl = document.querySelector('.score');

// variables
let bodyEl = document.querySelector('body');
// let messageEl = document.querySelector('.message');
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
    // messageEl.textContent = 'Enter your guess between 1 - 20!';

    // if a player guesses correctly!
  } else if (guess === whatIs) {
    score--;
    displayScore(score);
    // scoreEl.textContent = score;
    bodyEl.style.backgroundColor = '#60b347';
    displayMessage("You're a Winner!");
    // messageEl.textContent = "You're a Winnzer!";
    displayNumber(whatIs);
    // numberEl.textContent = whatIs;
    numberEl.style.width = '30rem';
    checkEl.disabled = true;

    // check if the final score is higher than highscore!

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = score;
    }

    // if player guesses to high!
  } else if (score > 1) {
    // f;
    displayMessage(guess > whatIs ? 'Too high!' : 'Too low!');
    // messageEl.textContent = guess > whatIs ? 'Too high!' : 'Too low!';
    score--;
    displayScore(score);
    // scoreEl.textContent = score;
  } else {
    displayMessage('You lost the game!');
    // messageEl.textContent = 'You lost the game!';
    displayScore(0);
    // scoreEl.textContent = 0;
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
  displayScore(score);
  //   scoreEl.textContent = score;
  bodyEl.style.backgroundColor = '#222';
  displayMessage('Try to beat the highscore!');
  //   messageEl.textContent = 'Try to beat the highscore!';
  checkEl.disabled = false;
  displayNumber('?');
  //   numberEl.textContent = '?';
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
