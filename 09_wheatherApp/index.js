const apiKey = "cbf0c1fce65b3be12462dc86c2d5d5ab";
const url = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

async function getWeather(city) {
    try {
        const res = await fetch(`${url}&q=${city}&appid=${apiKey}`);
    const data = await res.json();
    // console.log(data);

    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
    } catch (error) {
        console.log("Error: ",error);
    }
}
// getWeather();
let search = "bangalore";

document.querySelector("#submit").addEventListener("click", ()=>{
    try {
        const search = document.querySelector("#input-city").value;
    if(!search){
        alert("Please enter a city name");
        return;
    }
    getWeather(search);
    } catch (error) {
        alert("Please enter a valid city name");
    }
});