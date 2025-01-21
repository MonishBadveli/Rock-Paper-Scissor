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
console.log(getComputerChoice());
console.log(getUserChoice());