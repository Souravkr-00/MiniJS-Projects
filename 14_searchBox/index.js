const searchItems = [
    "HTML",
    "JAVA",
    "CSS",
    "javascript",
    "react",
    "angular",
    "vue",
    "node",
    "express",
    "mongodb",
    "mysql",
    "python",
    "django",
    "flask"
];

const resultBox = document.querySelector(".result-list");

const inputBox = document.querySelector(".search-input");

function displayResult(result){
    result.map((item)=>{
        const li = document.createElement("li");
        li.textContent = item;
        resultBox.appendChild(li);
    })
}

const debounce = _.debounce(()=>{
    
    let res = [];
    let input = inputBox.value;
    if(input) {
        res = searchItems.filter((item) => {
            return item.toLowerCase().includes(input);
        });
    }
    if(res.length === 0){
        resultBox.style = "display:none";
        return;
    }
    resultBox.style = "display:block";
    resultBox.innerHTML = "";
    console.log(res);
    displayResult(res);
},800)

inputBox.addEventListener("input", (e) => {
    if(inputBox.value === ""){
        resultBox.style = "display:none";
    }
    
    debounce();
});