//randomly return 'rock', 'paper' or 'scissors' for computer
function getComputerChoice() {
    let result = Math.floor(Math.random() * 3);
    if (result === 0) {
        return 'rock'
    } else if (result === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

//play a round, decide the winner and return a string with results
function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection;
    if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
        return `You win! ${player} beats ${computer}`
    } else if ((player === 'rock' && computer === 'paper') || (player === 'paper' && computer === 'scissors') || (player === ' scissors' && computer === 'rock')) {
        return `You lose! ${computer} beats ${player}`
    } else {
        return 'It\'s a draw'
    }
}