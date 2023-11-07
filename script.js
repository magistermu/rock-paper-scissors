//select buttons
const buttons = document.querySelectorAll('button');
//select div for displaying results
const results = document.querySelector('#results');

//add event listener to each button
for (button of buttons) {
    button.addEventListener('click', game);
}

//create paragraphs
//paragraph that describes round selection and result
let paraRound = document.createElement('p');
//para that describes the accumulative score of the game
let paraScore = document.createElement('p');

//create play again button
const startButton = document.createElement('button');
startButton.textContent = 'Play Again';
startButton.addEventListener('click', startGame);


let playerScore = 0;
let computerScore = 0;

let options = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}

// function getPlayerChoice() {
//     let selection = prompt("Rock, Paper, or Scissors");
//     while (selection == null) {
//         selection = prompt("Rock, Paper, or Scissors");
//     }
//     let transformedSelection = capitalize(selection);
//     let checkInput = validateInput(transformedSelection);
    
//     while (checkInput == false) {
//         selection = prompt("Rock, Paper, or Scissors");
//         transformedSelection = capitalize(selection);
//         checkInput = validateInput(transformedSelection);
//     }

//     return transformedSelection;
// }

// function validateInput(choice){
//     return options.includes(choice);
// }

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        //create paragraph
        paraRound.textContent = `You chose ${playerSelection} and Computer chose ${computerSelection}. It's a Tie.`;
        results.appendChild(paraRound);
    } else if (
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')
        ) {
            //create paragraph
            paraRound.textContent = `You chose ${playerSelection} and Computer chose ${computerSelection}. You won.`;
            results.appendChild(paraRound); 
            playerScore += 1;
            
        } else {
            //create paragraph
            paraRound.textContent = `You chose ${playerSelection} and Computer chose ${computerSelection}. You lost.`;
            results.appendChild(paraRound);
            computerScore += 1;
        }
        paraScore.textContent = `Player: ${playerScore}. Computer: ${computerScore}.`;
        results.appendChild(paraScore);
}

function capitalize(string) {
     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function game() {
    let playerSelection = this.textContent;
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);

    checkWinner(playerScore, computerScore);
}

//check who gets to 5 first
function checkWinner(playerScore, computerScore) {
    let gameResult = document.createElement('p');
    if (playerScore == 5 || computerScore == 5) {
        //disable buttons
        for (button of buttons) {
            button.disabled = true;
        }
        if (playerScore > computerScore) {
            results.appendChild(gameResult);
            gameResult.textContent = `You are the winner!`;
            } else {
            gameResult.textContent = `You lost. Computer is the winner.`;
            results.appendChild(gameResult);
            }
            results.appendChild(startButton);    
    }
}

function startGame() {
    playerScore = 0;
    computerScore = 0;
    removeAllChildNodes(results);
    //enable buttons
    for (button of buttons) {
        button.disabled = false;
    }
}

//empty div to start game
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}