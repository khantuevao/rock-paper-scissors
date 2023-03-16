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

const results = document.getElementById('results')
const currentScore = document.getElementById('current-score')
let playerScore = 0
let computerScore = 0
let roundCount = 0

//play a round, decide the winner & return the result
function playRound(playerSelection, computerSelection) {
    if (roundCount === 5) return

    if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'paper' && computerSelection === 'rock') || 
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        playerScore++
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || 
               (playerSelection === 'paper' && computerSelection === 'scissors') || 
               (playerSelection === 'scissors' && computerSelection === 'rock')) {
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        computerScore++
    } else {
        results.textContent = 'It\'s a draw'
    }
    currentScore.textContent = `Player ${playerScore} - ${computerScore} Computer`
    roundCount++

    if (roundCount === 5) {
        if (playerScore > computerScore) {
            results.textContent = `Player wins ${playerScore} to ${computerScore}`
        } else if (computerScore > playerScore) {
            results.textContent = `Computer wins ${computerScore} to ${playerScore}`
        } else {
            results.textContent = `It's a draw ${playerScore} to ${computerScore}`
        }
    }
}

//buttons
const mainContainer = document.getElementById('main-container')

const rockButton = document.createElement('button')
rockButton.textContent = 'rock'
rockButton.addEventListener('click', () => {
    playRound('rock', getComputerChoice())
})
mainContainer.appendChild(rockButton)

const paperButton = document.createElement('button')
paperButton.textContent = 'paper'
paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice())
})
mainContainer.appendChild(paperButton)

const scissorsButton = document.createElement('button')
scissorsButton.textContent = 'scissors'
scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice())
})
mainContainer.appendChild(scissorsButton)