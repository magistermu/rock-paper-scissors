let playerScore = 0;
let computerScore = 0;

let options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

function getPlayerChoice() {
    let selection = prompt("Rock, Paper, or Scissors");
    while (selection == null) {
        selection = prompt("Rock, Paper, or Scissors");
    }
    let transformedSelection = capitalize(selection);
    let checkInput = validateInput(transformedSelection);
    
    while (checkInput == false) {
        selection = prompt("Rock, Paper, or Scissors");
        transformedSelection = capitalize(selection);
        checkInput = validateInput(transformedSelection);
    }

    return transformedSelection;
}

function validateInput(choice){
    return options.includes(choice);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log(`You chose ${playerSelection} and Computer chose ${computerSelection}. It's a Tie.`);
    } else if (
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')
        ) {
            console.log(`You chose ${playerSelection} and Computer chose ${computerSelection}. You won.`); 
            playerScore += 1;
            
        } else {
            console.log(`You chose ${playerSelection} and Computer chose ${computerSelection}. You lost.`);
            computerScore += 1;
        }
        console.log(`Player: ${playerScore}. Computer: ${computerScore}.`);
}

function capitalize(string) {
     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log(`______________`);
        console.log(`Round number ${i + 1} of 5.`);
        playRound(playerSelection, computerSelection);
    }
    checkWinner(playerScore, computerScore);
    //reset score
    playerScore = 0;
    computerScore = 0;
}

function checkWinner(playerScore, computerScore) {
    if (playerScore == computerScore) {
        console.log(`It's a tie.`);
    } else if (playerScore > computerScore) {
        console.log(`You are the winner!`);
    } else {
        console.log(`You lost. Computer is the winner.`);
    }
}