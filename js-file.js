function computerPlay() {
    let result;
    choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        result = 'rock';
    } else if (choice === 1) {
        result = 'paper';
    } else {
        result = 'scissors';
    }
    const firstResult = document.querySelector('#firstResult');
    firstResult.textContent = ('Computer draws ' + result);
    return result;
}

let humanPlay;
let total = 0;
let computerWin = 0;
let humanWin = 0;

function playRound() {
    let computer = computerPlay();
    let human = humanPlay;
    let result;
    if (computer === 'rock' && human === 'scissors') {
        result = 'You lose! Rock beats Scissors';
        computerWin++;
        total++;
    } else if (computer === 'rock' && human === 'paper') {
        result = 'You win! Paper beats Rock';
        humanWin++;
        total++;
    } else if (computer === 'paper' && human === 'scissors') {
        result = 'You win! Scissors beat Paper';
        humanWin++;
        total++;
    } else if (computer === 'paper' && human === 'rock') {
        result = 'You lose! Paper beats Rock';
        computerWin++;
        total++;
    } else if (computer === 'scissors' && human === 'rock') {
        result = 'You win! Rock beats Scissors';
        humanWin++;
        total++;
    } else if (computer === 'scissors' && human === 'paper') {
        result ='You lose! Scissors beat Paper';
        computerWin++;
        total++;
    } else if (computer === human) {
        result = 'It\'s a draw!';
        total++;
    } else {
        result = 'Wrong input. Try again';
    }
    const secondResult = document.querySelector('#secondResult');
    secondResult.textContent = result;
    if (computerWin < 5 || humanWin < 5) {
        const finalResult = document.querySelector('#finalResult');
        finalResult.textContent = `Player ${humanWin} - ${computerWin} Computer`;
    }
    if (computerWin === 5 || humanWin === 5) {
        game();
    }
    return result;
}

function game() {
    let message;
    if (humanWin > computerWin) {
        message = 'You win!';
    } else if (humanWin < computerWin) {
        message = 'You lose!';
    } else {
        message = 'It\'s a draw!';
    }
    let result = `Total score is ${humanWin} to ${computerWin}. ${message}`;
    const finalResult = document.querySelector('#finalResult');
    finalResult.textContent = result;
    total = 0;
    computerWin = 0;
    humanWin = 0;
    return result;
}

const btnRock = document.querySelector('#rock');
btnRock.addEventListener('click' , () => {
    humanPlay = 'rock';
    playRound();
});

const btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click' , () => {
    humanPlay = 'paper';
    playRound();
});

const btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click' , () => {
    humanPlay = 'scissors';
    playRound();
});