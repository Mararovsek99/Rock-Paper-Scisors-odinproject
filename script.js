
let computerWin = 0;
let userWin = 0;

for(let i = 0; i < 5; i++){

    function game(){
    function getComputerChoice(){
        const randomString = ["rock","paper","scissors"];
        const randomMath = Math.floor(Math.random() * randomString.length);
        return randomString[randomMath];
    }

    let playerChoice = prompt("Rock,Paper or Scissors?"," ");

    function compareSelection(){
        let computerSelection = getComputerChoice();
        let playerSelection = playerChoice.toLowerCase();

        if(playerSelection === "rock" & computerSelection === "scissors"){
            userWin = userWin + 1 ;
            return alert("You win! Rock beats Scissors");
        }
        else if(playerSelection === "paper" & computerSelection === "rock"){
            userWin = userWin + 1 ;
            return alert("You win! Paper beats Rock");
        }
        else if(playerSelection === "scissors" & computerSelection === "paper"){
            userWin = userWin + 1 ;
            return alert("You win! Scissors beats Paper");
        }
        else if(playerSelection === computerSelection){
            i = i - 1;
            return alert("It's a Tie !")
        }
        else if(playerSelection === " "){
            i = i - 1;
            return alert("Invalid word, please try again !")
        }
        else{
            computerWin = computerWin + 1;
            return alert("You lose! " + computerSelection + " beats " + playerSelection);

        }
        
        
    }
    compareSelection();
    }
game();
}

alert("Computer score is: " + computerWin + " and your score is: " + userWin);