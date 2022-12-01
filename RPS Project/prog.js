const ChoiceArray = Array('Rock', 'Paper', 'Scissors');
const playerbuttons = document.querySelectorAll('.choicebutton');
const resultstxt = document.querySelector('#results-txt');
const comptxt = document.querySelector('#computermove');
const yourtxt = document.querySelector('#yourmove');

let playerSelection;
let computerSelection;

function getComputerChoice() {
    return ChoiceArray[Math.floor(Math.random()*ChoiceArray.length)];
}

playerbuttons.forEach(button => {button.addEventListener('click', e => {
    playerSelection = button.textContent.trim();
    computerSelection = getComputerChoice().trim();
    comptxt.textContent = `Computer: ${computerSelection}`;
    yourtxt.textContent = `You: ${playerSelection}`;
    resultstxt.textContent = `Results: ${playRound()}`;
})})

function playRound() {

    if (playerSelection == computerSelection){
        return "It's a draw!";
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors' || playerSelection == 'Paper' && computerSelection == 'Rock' || playerSelection == 'Scissors' && computerSelection == 'Paper'){
        return 'You Win!';
    }
    else {
        return 'You Lose!';
    }
    }