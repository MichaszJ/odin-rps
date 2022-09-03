"use strict";
function getComputerChoice() {
    const choiceInt = Math.floor(Math.random() * 3);
    let choice;
    if (choiceInt == 0) {
        choice = 'rock';
    }
    else if (choiceInt == 1) {
        choice = 'paper';
    }
    else {
        choice = 'scissors';
    }
    return choice;
}
let results = [];
function playRound(playerSelection, computerSelection = getComputerChoice()) {
    let result;
    const roundNum = results.length + 1;
    if ((playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') || (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') || (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper')) {
        result = { roundNumber: roundNum, result: 'win', playerChoice: playerSelection.toLowerCase(), computerChoice: computerSelection };
    }
    else if (playerSelection.toLowerCase() == computerSelection) {
        result = { roundNumber: roundNum, result: 'tie', playerChoice: playerSelection.toLowerCase(), computerChoice: computerSelection };
    }
    else {
        result = { roundNumber: roundNum, result: 'loss', playerChoice: playerSelection.toLowerCase(), computerChoice: computerSelection };
    }
    return result;
}
const resultListElement = document.querySelector('.result-list');
const scoreElement = document.querySelector('.score');
const gameElement = document.querySelector('.game-result');
function drawResults() {
    if (resultListElement != null && scoreElement != null && gameElement != null && results.length > 0) {
        let wins = 0;
        let losses = 0;
        for (const round of results) {
            if (round.result == 'win') {
                wins++;
            }
            else if (round.result == 'loss') {
                losses++;
            }
        }
        scoreElement.innerText = `Wins: ${wins} | Losses: ${losses}`;
        resultListElement.innerHTML = '';
        const revArray = results.slice().reverse();
        for (const round of revArray) {
            const roundElement = document.createElement('p');
            const roundNode = document.createTextNode(`Round ${round.roundNumber}: ${round.result}! ${round.playerChoice} vs. ${round.computerChoice}`);
            roundElement.appendChild(roundNode);
            resultListElement.appendChild(roundElement);
        }
        if (results.length == 5) {
            if (wins > losses) {
                gameElement.innerText = 'Congratulations! You Won';
            }
            else if (wins < losses) {
                gameElement.innerText = 'Sorry! You Lost';
            }
            else {
                gameElement.innerText = 'It\'s a Tie! At least you didn\'t lose';
            }
        }
    }
}
const buttonRock = document.querySelector(".btn-rock");
const paperRock = document.querySelector(".btn-paper");
const scissorsRock = document.querySelector(".btn-scissors");
if (buttonRock != null) {
    buttonRock.addEventListener('click', () => {
        if (results.length < 5) {
            const roundResult = playRound('rock');
            results.push(roundResult);
            drawResults();
        }
    });
}
if (paperRock != null) {
    paperRock.addEventListener('click', () => {
        if (results.length < 5) {
            const roundResult = playRound('paper');
            results.push(roundResult);
            drawResults();
        }
    });
}
if (scissorsRock != null) {
    scissorsRock.addEventListener('click', () => {
        if (results.length < 5) {
            const roundResult = playRound('scissors');
            results.push(roundResult);
            drawResults();
        }
    });
}
