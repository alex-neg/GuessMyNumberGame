"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 5;
let highScore = 0;

document.querySelector(".btn-check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No Number!";

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number!";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#77d47b";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When "guess" is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Using ternary operator
      document.querySelector(".message").textContent =
        guess > secretNumber ? "Too high!" : "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Play again
document.querySelector(".btn-again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 5;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#282c34";
});
