const allWord1 = ["Developer","Coder","Writer","Gandu"];
const allWord2 = ["Developer","Coder","Writer","Gandu"];
const span1 = document.querySelector("h1 span");
const span2 = document.querySelector("h2 span");



function autotype(allWord,span){
    let index = 0;
    let forward = true;
    let backward = false;
    let allWordIdx = 0;
    let word = allWord[allWordIdx];

    setInterval(()=>{
        word = allWord[allWordIdx];
        if(forward === true && backward === false){
            span.innerHTML += word[index++];
            if(word.length === index) {
                forward = false;
                backward = true;
                index = 0;
            }
        }
        else if(forward === false && backward === true){
            span.innerHTML = word.slice(0,span.innerHTML.length - 1);
            if(span.innerHTML.length === 0) {
                forward = true;
                backward = false;
                allWordIdx++;
                if(allWordIdx === allWord.length) allWordIdx = 0;
            }
        }
        
    },200);
}

autotype(allWord1,span1);
autotype(allWord2,span2);