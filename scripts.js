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
    else if(playerSelection == "scissor" && computerSelection =="rock"){
        return "You Lose! Rock beats Scissor";
    }
    else if(playerSelection == "scissor" && computerSelection =="paper"){
        return "You Won! Scissors beats Paper";
    }
    else if(playerSelection == "rock" && computerSelection =="paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection == "rock" && computerSelection =="scissor"){
        return "You Won! Rock beats Scissors";
    }
    else{
        return "Tie, Playing round again";
    }
}
const game =()=>{
    let playerScore = 0;
    let computerScore = 0;
    for(let i =0; i<5; i++){
        let playerSelection = prompt("Enter rock/paper/scissor");
        let result = playRound(playerSelection, getComputerChoice());
        console.log("Round "+(i+1)+ ": " +result);
        
        if(result[4] == "L"){
            computerScore++;
        }
        else if(result[4] == "W"){
            playerScore++;
        }
        else{
            i--;
        }
        console.log("Computer Score : " + computerScore);
        console.log("Player Score : " + playerScore);
        
    }
    if(computerScore > playerScore){
        console.log("Computer Won");
    }
    else{
        console.log("Player Won");
    }
}
game();