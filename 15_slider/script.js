const images = ["banner1","banner2","banner3","banner4"];

let index = 0;

function controlSlider(operation){
    if(operation == "next"){
        index++;
        if(index == images.length){
            index = 0;
        }
        document.querySelector(".img-container").innerHTML = `<img src="images/${images[index]}.jpg" >`
        console.log(`images/${images[index]}.jpg`);
        console.log(document.querySelector(".img-container").innerHTML);
        
    }
    else if(operation == "prev"){
        index--;
        if(index < 0){
            index = images.length-1;
        }    
        document.querySelector(".img-container").innerHTML = `<img src="images/${images[index]}.jpg" >`
    }
}

document.querySelector("#next").addEventListener("click",(e)=>{
    controlSlider("next");
})
document.querySelector("#prev").addEventListener("click",(e)=>{
    controlSlider("prev");
})