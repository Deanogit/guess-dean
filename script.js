'use strict';

// // let random = '';
// // random = Number(Math.floor(Math.random() * 20 + 1));
// // console.log(random);

// localStorage.setItem(
//   'randomNumber',
//   `${Number(Math.floor(Math.random() * 20 + 1))}`
// );
// let whatIs = '';
// console.log(localStorage.getItem('randomNumber'));

// // console.log(document.querySelector('.message').textContent);

// // document.querySelector('.message').textContent = 'You got it!';

// // console.log(document.querySelector('.message').textContent);

// // document.querySelector('.score').textContent = '10';
// // document.querySelector('.number').textContent = '13';

// // console.log(document.querySelector('.guess').textContent);
// // console.log((document.querySelector('.guess').value = 23)); // use the .value to get the.... value of the input!
// // document.querySelector('.guess').placeholder = '10';

// let message = document.getElementsByClassName('message').textContent;

// document.querySelector('.check').addEventListener('click', function () {
//   whatIs = Number(localStorage.getItem('randomNumber'));
//   console.log(whatIs);
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(typeof guess, guess);
//   //   document.querySelector('.score').textContent -= 1;

//   if (!guess) {
//     alert('Enter your guess between 1 - 20!');
//   } else if (guess === whatIs) {
//     document.querySelector('.score').textContent -= 1;
//     console.log('Winner!');
//     document.body.style.backgroundColor = '#60b347';
//     document.querySelector('.message').textContent = "You're a Winner!";
//     document.querySelector('.number').textContent = guess;
//     console.log(guess);
//     document.querySelector('.check').disabled = true;
//   } else if (
//     Number(document.querySelector('.score').textContent) >
//     Number(document.querySelector('.highscore').textContent)
//   ) {
//     // document.querySelector('.score').textContent -= 1;
//     document.querySelector('.highscore').textContent =
//       document.querySelector('.score').textContent;
//     console.log(document.querySelector('.highscore').textContent);
//   } else {
//     // document.querySelector('.score').textContent -= 1;
//     document.querySelector('.message').textContent = 'Try again!';
//     if (guess > whatIs) {
//       document.querySelector('.message').textContent = 'Try lower!';
//     } else if (guess < whatIs) {
//       document.querySelector('.message').textContent = 'Try higher!';
//     }
//   }
// });

/// fark I broke it!!

// NOW I NEED TO MAKE THE HIGHER OR LOWER MESSAGE!

// make the check button inactive

// also got to make the highscore work, if .check.value is > than highscore = highscore

// - so i need to generate a random number each time the browser is loaded

// console.log(random);

// document.querySelector('.again').addEventListener('click', function () {
//   // reset all the things that changed in the check funtion;
//   // call the random function again,
//   // reset the input
//   // reset the message
//   // reset the score
//   // leave the highscore! maybe that needs to happen in the thingy that saves something in the browser... what was that again???
// });

// I need to store the random number in a variable that can be checked with the input! So maybe I dont need to put it in a function, because its going to be called straight away when the page loads // Yep that works // well done Deano!

// ok so this is returning a number between 1-20

// - then when a guess is inputed, i need to check if this input matches the random number

// if the number is matching,
// - the styling of the page changes
// - the message changes to 'winning!'
// - the highscore may need to be updated if its higher than previously
// - the score needs to be updated, but this may be better so seperate concerns with a check function

// what would the check function look like?
// - check number is matching random number
// - if matching, execute matching()
// - if not matching, check input to see if its higher or lower than random
// - change message to higher / lower...
// - subtract 1 from score

// PROBLEMS
// - Why doesnt the 'You're a Winner' render in the browser? Do I need to save it to a variable outside of the function??

// console.log(Number(document.querySelector('.highscore').textContent));

// so how do I reset everything for the again btn?

// document.querySelector('.again').addEventListener('click', function () {
//   document.querySelector('.score').textContent = '20';
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('.check').disabled = false;
//   localStorage.removeItem('randomNumber');
//   localStorage.setItem(
//     'randomNumber',
//     `${Number(Math.floor(Math.random() * 20 + 1))}`
//   );
//   whatIs = Number(localStorage.getItem('randomNumber'));
//   console.log(whatIs);
//   document.body.style.backgroundColor = '#222';
//   document.querySelector('.message').textContent =
//     'Can you beat the highscore?';
// });
// console.log(typeof randomGen());

// ahhhh i've broken it by trying to make the random number generator into a function... because I want to call it again when the again button is fired.... so how do I fix this???

// fuck yeah I have to generate the number before the check event listener is called...

// do i need to put an event in the function parameter...?

// when the page loads, a random number must be generated, ok fine, but then, when the random number is matched with the guesses, I have to make a new random number for the next game to play... how do I get rid of the original random number and generate another one... sounds quite simple.. no?

// there is a problem because... the random number is declared globally , but when I want to generate the new one, this is done locally inside the again function... so how do i reset this? do I declare a variable random globally, then assign values inside the functions... I'm going to give this a go...

// so I can put a string in localstorage, but not a function, so the function must be called globally and then the value can be stored in the localStorage, this can then be updated when the again button is fired, storing a new value in localstorage

// bear in mind, I will have to change the string back to a number for this to work... just use Number()

// do i need to place the again function inside the check function? does this change how the random number generated is accessed... or how the game loops into another game...

// yeah Deano, you got it working :)

///////////// Clever Jonas's Solution

// first off he uses Math.trunc() to literally chop off the fractional digits... it doesnt round up or down, it just straight up chops them off, so 1.9999999 becomes 1!

// example:
// console.log(Math.trunc(1.999999999));

// so
const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20; // we're going to use a variable here!

//  now to be able to see the number generated, clever Jonas is rendering the number where it would normally be hidden for the player,
document.querySelector('.number').textContent = secretNumber;
//  nice!

// this code below checks if there has been a value entered into the input, if not, it renders 'No Number!' in the message element.

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
});

/// Ok so we have do adapt the logic so the game doesnt continue after the score gets to zero....

/// also I have to stop the score decreasing when there is no input....
