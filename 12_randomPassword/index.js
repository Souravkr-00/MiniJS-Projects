const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialChars = '!@#$%^&*()_+{}:"<>?|[];\',./`~';
const allChars = upperCase + lowerCase + numbers + specialChars;
const length = 12;

function generatePassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += specialChars[Math.floor(Math.random()*specialChars.length)];

    while(password.length < length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }

    document.getElementById("password").innerHTML = password;
    return ;
}

document.getElementById("generate").addEventListener("click", generatePassword);

document.querySelector(".copy-icon").addEventListener("click", function(){
    let password = document.getElementById("password").innerHTML;
    navigator.clipboard.writeText(password); //used to copy text to clipboard
    alert("Password copied to clipboard");
});