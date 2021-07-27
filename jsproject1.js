"use strict";

let number = document.querySelector(".number");
let check = document.querySelector(".check");
let guess = document.querySelector(".guess");
let guessValue = guess.value;
let score = document.querySelector(".score").textContent;
let message = document.querySelector(".message");
let highscore = document.querySelector(".highscore");
let highScore = 0;

number.value = Math.floor(Math.random() * 20 + 1);
//function for on click event on check button
check.addEventListener("click", function () {
  //checking if any number entered
  if (guessValue) {
    //checking if player has more chances to play
    if (score > 1) {
      //checking if random value is equal to guessed  value
      if (guess.value == number.value) {
        document.body.style.backgroundColor = "#188f10";
        document.querySelector(".highscore").textContent = score;
        message.textContent = "correct number!";
        check.style.display = "none";
        number.textContent = number.value;
        // to replace highscore with score, if player made new highscore
        if (highScore > score) {
          highScore = score;
          highscore.textContent = highScore;
        }
      } // if guessed number not equal to the random number
      else {
        document.body.style.backgroundColor = "red";
        score = score - 1;
        document.querySelector(".score").textContent = score;
        let difference = number.value - guess.value;
        if (difference < 0) {
          message.textContent = " Too High!";
        } else {
          message.textContent = "Too Low!";
        }
      }
    }
    // if player has no more chances to play
    else {
      message.textContent = "You Lost The Game!";
      score = 0;
      document.querySelector(".score").textContent = score;
      check.style.display = "none";
    }
  }
  // if player doesnot enter any number
  else {
    message.textContent = "No number!";
    document.body.style.backgroundColor = " orange";
  }
});
// to reset the values after clicking on again button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number.value = Math.floor(Math.random() * 20 + 1);

  message.textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  number.textContent = "?";
  guess.value = "";
  check.style.display = "block";
  document.querySelector("body").style.backgroundColor = "#222";
});
