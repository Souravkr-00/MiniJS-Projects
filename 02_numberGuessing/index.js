let randomNumber = Math.round(Math.random()*100);
let guessedNumber = -1;
let userNumber = document.querySelector("#guessNumber");
let submitBtn = document.querySelector("#submitBtn");
let resetBtn = document.querySelector("#resetBtn");

let output = document.querySelector("#output");
let prevTurns = document.querySelector("#prevTurns");
let GuessArr = [];

userNumber.addEventListener('change',(e)=>{
    guessedNumber = parseInt(userNumber.value);
})


submitBtn.addEventListener('click',()=>{
    let prev = document.createElement('span');
    let num = parseInt(guessedNumber);
    if(num != -1 && num != null && num != "" && !isNaN(parseInt(num))){
        if(randomNumber == num){
            output.innerHTML = "Congratulation You win The Game";
        }
        if(randomNumber > num){
            output.innerHTML = "Guess is Too low";
        }
        if(randomNumber < num){
            output.innerHTML = "Guess is Too High";
        }
        prev.innerHTML = guessedNumber;
        prev.style.margin = "0px 1rem"
        GuessArr.push(num);
        // prevTurns.appendChild(prev);
        prevTurns.innerHTML = `Previous Turns: ` + GuessArr.join(", ");
        
        userNumber.value = "";
        guessedNumber = -1;
    }
});

resetBtn.addEventListener('click',()=>{
    randomNumber = Math.round(Math.random()*100);
    prevTurns.innerHTML = "Previous Turns: ";
    output.innerHTML = "";
    userNumber.value = "";
    GuessArr = [];
})