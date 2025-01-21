function getComputerChoice()
{
    let choice=Math.floor(Math.random() *3);
    if(choice===0){
        return "rock";
    }
    else if(choice===1){
        return "paper";
    }
    else if(choice==2){
        return "scissors";
    }
    else{
        return "No choice Chosen by Computer";
    }
}
function getUserChoice()
{
    let userChoice=prompt("Enter rock or paper or scissors:").toLowerCase();
    if(userChoice==='rock'){
        return "rock";
    }
    else if(userChoice==='paper'){
        return "paper";
    }
    else if(userChoice==="scissors"){
        return "scissors";
    }
    else{
        return "Choose from the given Options";
    }

}
//console.log(getComputerChoice());
//console.log(getUserChoice());

let computerScore=0;
let humanScore=0;

function playRound()
{
    let humanChoice=getUserChoice();
    let computerChoice=getComputerChoice();
    let winMessage = () => alert("You picked " + humanChoice + " and the computer picked " + computerChoice + ". You win this round!");
    let loseMessage = () => alert("You picked " + humanChoice + " and the computer picked " + computerChoice + ". You lose this round!");
    let tieMessage = () => alert("You picked " + humanChoice + " and the computer picked " + computerChoice + ". It's a tie!");
    if(humanChoice==='rock' && computerChoice==='scissors'){
        winMessage();
        humanScore++;
    }
    else if(humanChoice==='paper' && computerChoice==='rock'){
        winMessage();
        humanScore++;
    }
    else if(humanChoice==='scissors' && computerChoice==="paper"){
        winMessage();
        humanScore++;
    }
    else if(humanChoice === computerChoice){
        tieMessage();
    }
    else{
        loseMessage();
        computerScore++;
    }

}
function playGame()
{

    for (let i = 0; i < 5; i++) {
        playRound();

    }

    let isWinner = humanScore > computerScore;
    let isTie = humanScore === computerScore;

    if (isWinner) {
        alert("You win the game!");
    }
    else if (isTie) {
        alert("The game is a tie!");
    } 
    else {
        alert("You lost the game!");
    }


}
playGame();