function getComputerChoice() {
    const choiceInt = Math.floor(Math.random() * 3)
    let choice = ''

    if (choiceInt == 0) {
        choice = 'rock'
    } else if (choiceInt == 1) {
        choice = 'paper'
    } else {
        choice = 'scissors'
    }

    return choice
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
    let result = ''

    if ((playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') || (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') || (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper')) {
        result = `You Win! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection.toLowerCase() == computerSelection) {
        result = `It's a Tie! You both chose ${playerSelection}`
    } else {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`
    };

    return result
}

function game(rounds = 5) {
    let results = []

    for (let i = 0; i < rounds; i++) {
        const playerSelection = prompt('Enter your move')
        const roundResult = playRound(playerSelection)

        console.log(`Round ${i + 1}`)
        console.log(roundResult)

        if (roundResult.includes('Tie')) {
            results.push(2)
        } else if (roundResult.includes('Win')) {
            results.push(1)
        } else {
            results.push(0)
        }
    }

    console.log(results)

    let wins = 0;
    let losses = 0;

    for (let i = 0; i < rounds; i++) {
        if (results[i] == 1) {
            wins++
        } else if (results[i] == 0) {
            losses++
        }
    }

    if (wins == losses) {
        console.log(`It's a Tie! You won/lost ${wins} rounds`)
    } else if (wins > losses) {
        console.log(`You Win! You won ${wins} rounds and lost ${losses} rounds`)
    } else {
        console.log(`You Lost! You lost ${losses} rounds and won ${wins} rounds`)
    }
}

game()