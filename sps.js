var score= JSON.parse(localStorage.getItem("score")) || {tie:0, loss:0, win:0};
document.querySelector("#scoreOutput").innerText=`Win : ${score.win} Loss : ${score.loss} Tie : ${score.tie}`;
function generateResponse(){
    let rno=Math.floor((Math.random()*(3-1+1)))+1;
    let options=["Stone","Paper","Scissor"];
    return options[rno-1];
}
function check(userInput){
    document.querySelector("#userInput").innerText=`You Chose ${userInput}`;
    let compInput=generateResponse();
    document.querySelector("#compInput").innerText=`Computer Chose ${compInput}`;
    if (userInput == compInput){
        score.tie++;
        localStorage.setItem("score",JSON.stringify(score));
        document.querySelector("#resultOutput").style.color="grey";
        document.querySelector("#resultOutput").innerText=`Its a Tie`;
        document.querySelector("#scoreOutput").innerText=`Win : ${score.win} Loss : ${score.loss} Tie : ${score.tie}`;
    }
    else if(userInput === "Stone" && compInput ==="Scissor" ||
        userInput === "Paper" && compInput ==="Stone" ||
        userInput === "Scissor" && compInput ==="Paper"
    )
    {
        score.win++;
        localStorage.setItem("score",JSON.stringify(score));
        document.querySelector("#resultOutput").style.color="green";
        document.querySelector("#resultOutput").innerText=`You won`;
        document.querySelector("#scoreOutput").innerText=`Win : ${score.win} Loss : ${score.loss} Tie : ${score.tie}`;
    }
    else if(userInput === "Stone" && compInput ==="Paper" ||
        userInput === "Paper" && compInput ==="Scissor" ||
        userInput === "Scissor" && compInput ==="Stone")
        {
        score.loss++;
        localStorage.setItem("score",JSON.stringify(score));        
        document.querySelector("#resultOutput").style.color="red";
        document.querySelector("#resultOutput").innerText=`You Lose`;
        document.querySelector("#scoreOutput").innerText=`Win : ${score.win} Loss : ${score.loss} Tie : ${score.tie}`;
    }
    else{
        alert("Some Problem");
    }

}
function resetScore(){
    document.querySelector("#userInput").innerText=``;
    document.querySelector("#compInput").innerText=``;
    document.querySelector("#resultOutput").innerText=``;
    score.loss=0;
    score.win=0;
    score.tie=0;
    localStorage.setItem("score",JSON.stringify(score));
    document.querySelector("#scoreOutput").innerText=`Win : ${score.win} Loss : ${score.loss} Tie : ${score.tie}`;
}