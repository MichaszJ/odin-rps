function getComputerChoice() {
    const choiceInt = Math.floor(Math.random() * 3);
    let choice = '';

    if (choiceInt == 0) {
        choice = 'Rock'
    } else if (choiceInt == 1) {
        choice = 'Paper'
    } else {
        choice = 'Scissors'
    }

    return choice
};

console.log(getComputerChoice());