const questions = [
    {
        question:"What is the capital of France?",
        options:["Paris","London","Berlin","Madrid"],
        answer:"Paris",
        checked:false
    },
    {
        question:"What is the capital of india?",
        options:["Paris","Delhi","Berlin","Madrid"],
        answer:"Delhi",
        checked:false
    },
    {
        question:"Rainbow consist of how many colours?",
        options:["6","7","1","8"],
        answer:"7",
        checked:false
    },
    {
        question:"How many days are there in a year?",
        options:["365","456","123","369"],
        answer:"365",
        checked:false
    },
]

let index = 0;
let score = 0;

const questionElement = document.querySelector(".question");
const optionElement = document.querySelector(".options");

function loadQuestion(index){
    questionElement.innerHTML = questions[index].question;
    optionElement.innerHTML = "";
    for(let i=0; i<questions[index].options.length; i++){
        optionElement.innerHTML += `<button id= "${questions[index].options[i]}" onclick="checkAnswer('${questions[index].options[i]}')">${questions[index].options[i]}</button>`;
    }
}
loadQuestion(index);

function checkAnswer(answer){
    if(questions[index].checked){
        return;
    }
    questions[index].checked = true;
    if(answer == questions[index].answer){
        score++;  
        document.getElementById(`${answer}`).style.backgroundColor = "green";
    }
    else{
        document.getElementById(`${questions[index].answer}`).style.backgroundColor = "green";
        document.getElementById(`${answer}`).style.backgroundColor = "red";
    }
}

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

prevBtn.addEventListener("click",()=>{
    if(index == 0){
        return;
    }
    index--;
    loadQuestion(index);
});

nextBtn.addEventListener("click",()=>{
    
    if(index == questions.length){
        alert("Your score is "+score);
        return;
    }
    index++;
    loadQuestion(index);
});
