const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

const gameLengthInRounds = 5;

let computerPoints = 0;
let playerPoints = 0;

function computerPlay() {
    let computerSelection = Math.floor(Math.random()*3);
    switch(computerSelection){
        case 0: computerSelection = rock; break;
        case 1: computerSelection = paper; break;
        case 2: computerSelection = scissors; break;
    }
    return computerSelection;
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    
    if(playerSelection == computerSelection){
        return "It's a tie!";
    }
    if(playerSelection == rock && computerSelection == paper){
        computerPoints++;
        return "You lose! Paper beats Rock.";
    }
    if(playerSelection == rock && computerSelection == scissors){
        playerPoints++;
        return "You win! Rock beats Scissors.";
    }
    if(playerSelection == paper && computerSelection == rock){
        playerPoints++;
        return "You win! Paper beats Rock.";
    }
    if(playerSelection == paper && computerSelection == scissors){
        computerPoints++;
        return "You lose! Scissors beat Paper.";
    }        
    if(playerSelection == scissors && computerSelection == rock){
        computerPoints++;
        return "You lose! Rock beats Scissors.";
    }
    if(playerSelection == scissors && computerSelection == paper){
        playerPoints++;
        return "You win! Scissors beat Paper.";
    }
}

function declareWinner(playerPoints, computerPoints, textBox) {
    if(playerPoints>computerPoints){
        textBox.textContent = `You win the game with ${playerPoints}:${computerPoints}!`;
    }
    else if(computerPoints>playerPoints){
        textBox.textContent = `You lose the game with ${playerPoints}:${computerPoints}!`;
    }
    else{
        textBox.textContent = `It's a tied game with ${playerPoints}:${computerPoints}!`;
    }
}

function endGame() {
    playerPoints = 0;
    computerPoints = 0;
}

function updateScore (playerPoints, computerPoints, scoreText) {
    scoreText.textContent = `${playerPoints} : ${computerPoints}`;
}

const score = document.querySelector(".score");

const results = document.querySelector(".results");
const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => btn.addEventListener("click", () => {
    results.textContent = playRound(btn.id);
    updateScore(playerPoints, computerPoints, score);
    if(playerPoints >= gameLengthInRounds || computerPoints >= gameLengthInRounds){
        declareWinner(playerPoints,computerPoints, results);
        endGame();
        updateScore(playerPoints, computerPoints, score);
    }
}));
