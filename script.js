let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreNum=document.querySelector("#user_score");
const compScoreNum=document.querySelector("#comp_score");
const genCompChoice =()=>{
    const options=["rock","paper","scissor"];
    const radInx=Math.floor(Math.random()*3);
    return options[radInx];
}
const draw =()=>{
    msg.innerText="Game Draw!";
    msg.style.backgroundColor="yellow";

}
const showWinner = (userWin)=>{
    if(userWin){
        userScore++;
        userScoreNum.innerText=userScore;
        msg.innerText="You Win!";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScoreNum.innerText=compScore;
        msg.innerText="You Lose!";
        msg.style.backgroundColor="red";
    }
};
const playGame=(userChoice)=>{
    console.log("userChoice=",userChoice);
    const compChoice=genCompChoice();
    console.log("compChoice=",compChoice);
    if(userChoice==compChoice){
        draw();
    }else{
        let userWin=true;
        if (userChoice==="rock"){
            userWin = compChoice ==="paper" ? false : true;
        }else if(userChoice==="paper"){
            userWin = compChoice ==="scissor" ? false : true;

        }else{
            userWin = compChoice ==="rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });
});