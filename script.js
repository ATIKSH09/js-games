
function compGuess() {
  let ran = Math.random();
  var guess = "rock";
  if (ran < 0.33) {
    guess = "rock";
  } else if (ran > 0.33 && ran < 0.66) {
    guess = "paper";
  } else {
    guess = "scissors";
  }
  return guess;
}

var pScore = document.getElementById("pScore");
var cScore = document.getElementById("cScore");
var statement = document.getElementById("statement");
var player = 0;
var comp = 0;

document.querySelector("#img1").addEventListener("click", () => {
  let cChoice = compGuess();
  if (cChoice == "rock") {
    statement.innerHTML = "Tie!";
  } else if (cChoice == "scissors") {
    statement.innerHTML = "Hurray! you win";
    player = player + 1;
    pScore.innerHTML = player;
  } else {
    statement.innerHTML = "You lose!";
    comp = comp + 1;
    cScore.innerHTML = comp;
  }
});


document.querySelector("#img2").addEventListener("click", () => {
  let cChoice = compGuess();
  if (cChoice == "paper") {
    statement.innerHTML = "Tie!";
  } else if (cChoice == "rock") {
    statement.innerHTML = "Hurray! you win";
    player = player + 1;
    pScore.innerHTML = player;
  } else {
    statement.innerHTML = "You lose!";
    comp = comp + 1;
    cScore.innerHTML = comp;
  }
});


document.querySelector("#img3").addEventListener("click", () => {
  let cChoice = compGuess();
  if (cChoice == "scissors") {
    statement.innerHTML = "Tie!";
  } else if (cChoice == "paper") {
    statement.innerHTML = "Hurray! you win";
    player = player + 1;
    pScore.innerHTML = player;
  } else {
    statement.innerHTML = "You lose!";
    comp = comp + 1;
    cScore.innerHTML = comp;
  }
});
