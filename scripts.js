const getComputerChoice= ()=>{
    computer = ["rock","paper","scissors"];
    return computer[Math.floor(Math.random()*3)];
}

const playRound = (playerSelection, computerSelection)=>{
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == "paper" && computerSelection =="rock"){
        return "You Won! Paper beats Rock";
    }
    else if(playerSelection == "paper" && computerSelection =="scissors"){
        return "You Lose! Scissor beats Paper";
    }
    else if(playerSelection == "scissors" && computerSelection =="rock"){
        return "You Lose! Rock beats Scissor";
    }
    else if(playerSelection == "scissors" && computerSelection =="paper"){
        return "You Won! Scissors beats Paper";
    }
    else if(playerSelection == "rock" && computerSelection =="paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection == "rock" && computerSelection =="scissors"){
        return "You Won! Rock beats Scissors";
    }
    else{
        return "Tie, Playing round again";
    }
}

let playerScore = 0;
let computerScore = 0;
let result;
const body = document.querySelector("body");
const roundresult = document.createElement("p");
body.appendChild(roundresult);

const score = document.createElement("p");
body.appendChild(score);
score.innerText = `Player : ${playerScore} Computer : ${computerScore}`;

const gameResult = document.createElement("p");
body.appendChild(gameResult);
roundresult.classList.add("fontsize");
gameResult.classList.add("fontsize");
score.classList.add("fontsize");
body.addEventListener("click",(event)=>{
    console.log(event);
    console.log(event.target.innerText);
    if(event.target.nodeName == "BUTTON"){
        gameResult.innerText = "";
        switch(event.target.innerText){
            case "Rock":
                result = playRound("rock",getComputerChoice());
                break;
            case "Paper":
                result = playRound("paper",getComputerChoice());
                break;
            case "Scissors":
                result = playRound("scissors",getComputerChoice());
                break;    
        }
        roundresult.textContent = result;
        if(result[4] == "L"){
            computerScore++;
        }
        else if(result[4] == "W"){
            playerScore++;
        }
        score.innerText = `Player : ${playerScore} Computer : ${computerScore}`;
        if(computerScore == 5){
            gameResult.innerText = "Computer Won";
            computerScore = 0;
            playerScore = 0;
        }
        else if(playerScore == 5){
            gameResult.innerText = "Player Won";
            computerScore = 0;
            playerScore = 0;
    
        }
    }
})