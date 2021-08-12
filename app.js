"use strict";


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  }
  // player wins
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    
    if(score > highscore)
    {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  
  }
  // Guess is too high
  else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "Too High!";
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
    }
  }
  // guess is too low
  else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "Too Low!";
    if (score > 1) {
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
    }
  }
});

function reload() {
  score = 20;
  secretNumber = Math.trunc(Math.random()*20)+1;
  console.log(secretNumber);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

}

document.querySelector('.again').addEventListener('click', reload);