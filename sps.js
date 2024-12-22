var score= JSON.parse(localStorage.getItem("score")) || {tie:0, loss:0, win:0};
let cheaterMode = 0;
function changeCheaterMode(){
    if (cheaterMode == 0){
        cheaterMode = 1;
    }
    else if (cheaterMode == 1){
        cheaterMode = 2;
    }
    else if (cheaterMode == 2){
        cheaterMode = 0;
    }
}
document.querySelector("#scoreOutput").innerText=`Win : ${score.win} Loss : ${score.loss} Tie : ${score.tie}`;
function generateResponse(){
    let rno=Math.floor((Math.random()*(3-1+1)))+1;
    let options=["Stone","Paper","Scissor"];
    return options[rno-1];
}
function checkCheatermode0(userInput){
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
function checkCheatermode1(userInput){
    document.querySelector("#userInput").innerText=`You Chose ${userInput}`;
    if(userInput == "Stone"){
        compInput="Paper";
    }
    else if(userInput == "Paper"){
        compInput="Scissor";
    }
    else if(userInput == "Scissor"){
        compInput="Stone";
    }
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
function checkCheatermode2(userInput){
    document.querySelector("#userInput").innerText=`You Chose ${userInput}`;
    if(userInput == "Stone"){
        compInput="Scissor";
    }
    else if(userInput == "Paper"){
        compInput="Stone";
    }
    else if(userInput == "Scissor"){
        compInput="Paper";
    }
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
function check(userInput){
    if(cheaterMode == 0){
        checkCheatermode0(userInput);
    }
    else if (cheaterMode == 1){
        checkCheatermode1(userInput);
    }
    else if (cheaterMode == 2){
        checkCheatermode2(userInput);
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