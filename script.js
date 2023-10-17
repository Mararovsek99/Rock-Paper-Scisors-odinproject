
let computerWin = 0;
let userWin = 0;

const rockUser = document.getElementById("rockBtn");
rockUser.addEventListener("click", () => startGame("rock"));

const paperUser = document.getElementById("paperBtn");
paperUser.addEventListener("click", () =>  startGame("paper"));

const scissorsUser = document.getElementById("scissorsBtn");
scissorsUser.addEventListener("click", () =>  startGame("scissors"));

function startGame(x){
    playerChoice = x;
    game();
    addScore();
}

    function game(){
    function getComputerChoice(){
        const randomString = ["rock","paper","scissors"];
        const randomMath = Math.floor(Math.random() * randomString.length);
        return randomString[randomMath];
    }


    function compareSelection(){
        let computerSelection = getComputerChoice();
        let playerSelection = playerChoice.toLowerCase();

        if(playerSelection === "rock" & computerSelection === "scissors"){
            userWin = userWin + 1 ;
        }
        else if(playerSelection === "paper" & computerSelection === "rock"){
            userWin = userWin + 1 ;
        }
        else if(playerSelection === "scissors" & computerSelection === "paper"){
            userWin = userWin + 1 ;
        }
        else if(playerSelection === computerSelection){
            
        }
        else if(playerSelection === " "){
            
        }
        else{
            computerWin = computerWin + 1;
        }
        
        
    }
    compareSelection();
    }
    function addScore(){
        const gamescore = document.querySelector("#score");
        const newScore = document.createElement("div");
        const newContent = document.createTextNode("You: " + userWin +"  Computer: " + computerWin);
        newScore.appendChild(newContent);
        gamescore.appendChild(newScore);
        console.log("You: ",userWin,"  Computer: ", computerWin);
        if(computerWin === 5){
            const compWin = document.createTextNode("   Computer is Winner!");
            newScore.appendChild(compWin);
        gamescore.appendChild(newScore);
        computerWin = 0;
        userWin = 0;
        }
        else if(userWin === 5){
            const usWin = document.createTextNode("   You are Winner!");
            newScore.appendChild(usWin);
        gamescore.appendChild(newScore);
        computerWin = 0;
        userWin = 0;
        }
    }
