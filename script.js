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
    let winner;



    
}