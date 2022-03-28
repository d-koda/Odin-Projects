//Game Code
let playerPoints = 0
let cpuPoints = 0

const playerScore = document.getElementById('pScore')
const cpuScore = document.getElementById('cpuScore')
let roundWinner = ''
let gameWinner = ''
let winnerMessage = document.getElementById('winnerMessage')
const pRock = document.getElementById('rockBtn');
const pPaper = document.getElementById('paperBtn');
const pScissors = document.getElementById('scissorsBtn');

pRock.addEventListener('click', () => initiateRound('rock'));
pPaper.addEventListener('click', () => initiateRound('paper'));
pScissors.addEventListener('click', () => initiateRound('scissors'));


function cpuChoice(){
    let cpuRPS = Math.floor(Math.random()*3)
    switch(cpuRPS){
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function playRound(playerSelection, cpuSelection){
    if 
        ((playerSelection === 'rock' && cpuSelection === 'paper')||
        (playerSelection === 'paper' && cpuSelection === 'scissors')||
        (playerSelection === 'scissors' && cpuSelection === 'rock')){
        cpuPoints++
        roundWinner = 'cpu'
    }
    if
        ((playerSelection === 'rock' && cpuSelection === 'scissors')||
        (playerSelection === 'paper' && cpuSelection === 'rock')||
        (playerSelection === 'scissors' && cpuSelection === 'paper')){
        playerPoints++
        roundWinner = 'player'
    }
    if
        (playerSelection === cpuSelection){
        roundWinner = 'tie'
    }
    updateGamestateMessage(roundWinner, playerSelection, cpuSelection)
}

function updateGamestateMessage(){
    if (roundWinner === 'cpu'){
        winnerMessage.textContent = "CPU wins the round!"
    } else if (roundWinner === 'player'){
        winnerMessage.textContent = "You win the round!"
    } else if (roundWinner === 'tie')
        winnerMessage.textContent = "It's a tie!"
    cpuScore.textContent = "CPU: " + `${cpuPoints}`
    pScore.textContent = "You: "+`${playerPoints}`
}

function gameOver(){
    return (playerPoints === 5||cpuPoints === 5)   
}

function initiateRound(playerSelection){
    if (gameOver()){
        popupShow()
    } else {
        let cpuSelection = cpuChoice()
            console.log(playerSelection)
        cpuChoice()
            if (cpuSelection === 'rock'){
                document.getElementById('cpu-choice').src='./resources/rock.png';
            }

            if (cpuSelection === 'paper'){
                document.getElementById('cpu-choice').src='./resources/paper.png';
            }

            if (cpuSelection === 'scissors'){
                document.getElementById('cpu-choice').src='./resources/scissors.png';
            }
            console.log(cpuSelection)
        playRound(playerSelection, cpuSelection)
            console.log(playerPoints, cpuPoints)
    }
}

//Page Code

function popupShow(){
    let popup = document.getElementById("popup");
    popup.classList.remove("invis")
}


