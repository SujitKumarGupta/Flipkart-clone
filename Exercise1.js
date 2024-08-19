/*
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // Expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // Expected output: 0
  
  console.log(Math.random());
  // Expected output: a number from 0 to <1
  */


const prompt = require("prompt-sync")();
let num = Math.floor(Math.random() * 100);
let No_of_guesses = 0
No_of_guesses = Number.parseInt(No_of_guesses)

let guess;
do {
    guess = prompt("Enter the number:")
    guess = Number.parseInt(guess)
    if (num > guess) {
        console.log("This is smaller!")
    }
    else if (num < guess) {
        console.log("This is bigger!")
    }
    else {
        console.log("You have guessed it correctly!")
    }
    No_of_guesses++
} while (guess != num)

let score = 100 - No_of_guesses
console.log("Your Score:", score)