let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(humanChoice) { 
  const computerChoice = getComputerChoice();
  let result = "";

  if (humanChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    result = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }

  updateResult(result);
  updateScore();
  checkWinner(); 
}

function checkWinner() {
  if (humanScore === 5) {
    updateScore();
    alert("Congratulations! You won the game 🎉");
    resetGame();
  } else if (computerScore === 5) {
    updateScore();
    alert("Oh no! The computer won the game 😞");
    resetGame();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateScore();
  const roundResult = document.querySelector(".round-result");
  roundResult.textContent = "Game reset! Start a new round.";
}

function updateResult(resultText) {
  const roundResult = document.querySelector(".round-result");
  roundResult.textContent = resultText;
}

function updateScore() {
  const scoreBoard = document.querySelector(".score");
  scoreBoard.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function getHumanChoice() {
  const rockButton = document.querySelector(".rock");
  const paperButton = document.querySelector(".paper");
  const scissorsButton = document.querySelector(".scissors");

  rockButton.addEventListener("click", () => playRound("rock"));
  paperButton.addEventListener("click", () => playRound("paper"));
  scissorsButton.addEventListener("click", () => playRound("scissors"));
}

function initGame() {
  getHumanChoice();
  updateScore();   
}

initGame();
