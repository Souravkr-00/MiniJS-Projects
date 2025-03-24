const rollBtn = document.querySelector('.roll-btn');
const dice = document.querySelector('.dice');
const results = document.querySelector('.results');

rollBtn.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    dice.innerHTML = `<img id = "dice-img" src="./images/dice-${randomNumber}.png" alt="dice" />`;

    results.innerHTML += `<li>Rolled: ${randomNumber}<span><img src="./images/dice-${randomNumber}.png" alt="dice" /></span></li>`

    localStorage.setItem('dice-results', results.innerHTML);
});

if(localStorage.getItem('dice-results')){
    results.innerHTML = localStorage.getItem('dice-results');
}