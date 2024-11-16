function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function getHumanChoice() {
    let choice = prompt("Enter your Choice: Rock / Paper / Scissors").toLowerCase();
  
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
      return choice;
    } else {
      console.log("Invalid Choice, please choose wisely.");
      return getHumanChoice();
    }
  }
  
  function playRound(humanChoice, computerChoice) {
    console.log(`Human chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
  
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
      return null;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats Rock");
      return 'computer';
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors");
      return 'human';
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats Rock");
      return 'human';
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper");
      return 'computer';
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats Paper");
      return 'human';
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors");
      return 'computer';
    }
  }
  
  function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      console.log(`\nRound ${i + 1}:`);
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      const roundWinner = playRound(humanSelection, computerSelection);
  
      if (roundWinner === 'human') {
        humanScore++;
      } else if (roundWinner === 'computer') {
        computerScore++;
      }
    }
  
    console.log(`\nFinal Scores: Human - ${humanScore}, Computer - ${computerScore}`);
    if (humanScore > computerScore) {
      console.log("You win the game!");
    } else if (humanScore < computerScore) {
      console.log("Computer wins the game!");
    } else {
      console.log("It's a tie game!");
    }
  }
  
  playGame();
  