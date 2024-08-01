let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice")
const msg =document.querySelector("#msg")
const userPoints = document.querySelector("#userscore")
const compPoints = document.querySelector("#compscore")
const genComputer = ()=>{
    const options = ["rock", "paper", "scissors"]
    const randomIdx =Math.floor(Math.random()*3);
    return options[randomIdx];
}
const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userPoints.innerText = userScore;
        console.log("you wIN")
        msg.innerText = `you win ${userChoice} beats ${compChoice}`;
          msg.style.backgroundColor = "green"
    }else{
        console.log()
     comScore++
        msg.innerText = `You loose ${compChoice} beats ${userChoice}`;
          msg.style.backgroundColor = "red"
          compPoints.innerText = comScore;
    }

}
const drawGame=()=>{
    console.log("game was draw")
    msg.innerText= "draw"
    msg.style.backgroundColor = "gray"
}
const playGame = (userChoice)=>{
    console.log(userChoice)
    const compChoice = genComputer();
    console.log("computer choice was",compChoice);
    if(userChoice===compChoice){
        drawGame();

    }else{
        let userWin = true
        if(userChoice==="rock"){
          userWin=  compChoice==="paper"? false: true

        }else if(userChoice==="paper"){
            userWin = compChoice === "scissors"? false:true;
        }else{
            userWin = compChoice==="rock"?false:true;
            
        }
        showWinner(userWin,userChoice,compChoice);
    }
   

}

choices.forEach(choice => {
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("Id")
        console.log("choice was clicked",userChoice)
playGame(userChoice)

    })
 
    
});

