let playerScore = 0;
let computerScore = 0;

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

//get player choice from prompt and lower case it for further comparison
function getPlayerChoice() {
    return prompt('Choose rock, paper or scissors', '').toLowerCase()
}

//play a round, decide the winner & return the result
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        playerScore++
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
               (playerSelection === 'paper' && computerSelection === 'scissors') || 
               (playerSelection === ' scissors' && computerSelection === 'rock')) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`)
        computerScore++
    } else {
        console.log('It\'s a draw')
    }
}

//play 5 rounds, keep the score & return the result
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(), getComputerChoice())
    }
    if (playerScore > computerScore) {
        console.log(`Player wins ${playerScore} to ${computerScore}`)
    } else if (computerScore > playerScore) {
        console.log(`Computer wins ${computerScore} to ${playerScore}`)
    } else {
        console.log(`It's a draw ${playerScore} to ${computerScore}`)
    }
}