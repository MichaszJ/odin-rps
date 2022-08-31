function getComputerChoice() {
    const choiceInt = Math.floor(Math.random() * 3);
    let choice = '';

    if (choiceInt == 0) {
        choice = 'rock';
    } else if (choiceInt == 1) {
        choice = 'paper';
    } else {
        choice = 'scissors';
    };

    return choice
};

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    let result = '';

    if ((playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') || (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') || (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper')) {
        result = `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection.toLowerCase() == computerSelection) {
        result = `It's a tie! You both chose ${playerSelection}`;
    }
    else {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    };

    return result;
};

console.log(playRound('rock'));