// Document Selection
var inputText = document.querySelector('#input-text');
var upperCase = document.querySelector('#uppercase');
var lowerCase = document.querySelector('#lowercase');
var camelCase = document.querySelector('#camelcase');
var kababCase = document.querySelector("#kababcase");
var pascalCase = document.querySelector('#pascalcase');
var trim = document.querySelector('#trim');
var snakeCase = document.querySelector("#snakecase");

// Initializations
upperCase.innerHTML = inputText.value.toUpperCase();
lowerCase.innerHTML = inputText.value.toLowerCase();
camelCase.innerHTML = toCamelCase(inputText.value);
kababCase.innerHTML = toKababCase(inputText.value);
pascalCase.innerHTML = toPascalCase(inputText.value);
snakeCase.innerHTML = toSnakeCase(inputText.value);
trim.innerHTML = toTrim(inputText.value);


// Functions to transform Strings
function capitalizeWord(string){
    const firstletter = string[0].toUpperCase();
    string = firstletter + string.slice(1,string.length);
    return string;
}

function toCamelCase(string){
    const lowerCaseString = string.toLowerCase();
    const splitString = lowerCaseString.split(" ");
    const camelArr = splitString.map((word,index)=>{
        if(index === 0)
       { 
        return word;
       }
       return capitalizeWord(word);
    })
    console.log(camelArr.join(''));
    return camelArr.join('');
}

function toKababCase(string){
    const splitString = string.split(" ");
    return splitString.join('-');
}
function toSnakeCase(string){
    const splitString = string.split(" ");
    return splitString.join('_');
}

function toKababCase(string){
    const splitString = string.split(" ");
    return splitString.join('-');
}

function toPascalCase(string){
    const lowerCaseString = string.toLowerCase();
    const splitString = lowerCaseString.split(" ");
    const camelArr = splitString.map((word)=>{
       return capitalizeWord(word);
    })
    return camelArr.join('');
}

function toTrim(string){
    const splitString = string.split(" ");
    return splitString.join('');
}

// Manipulation of html Elements
inputText.addEventListener('input',(e)=>{
    upperCase.innerHTML = e.target.value.toUpperCase();
    lowerCase.innerHTML = e.target.value.toLowerCase();
    camelCase.innerHTML = toCamelCase(e.target.value);
    kababCase.innerHTML = toKababCase(e.target.value);
    pascalCase.innerHTML = toPascalCase(e.target.value);
    trim.innerHTML = toTrim(e.target.value);
    snakeCase.innerHTML = toSnakeCase(e.target.value);
})

