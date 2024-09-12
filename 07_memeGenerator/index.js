const title = document.querySelector(".title");
const meme = document.querySelector("img");
const author = document.querySelector(".author-name");
const generateBtn = document.querySelector("button");

async function GenerateMeme(){
    try {
        const res = await fetch("https://meme-api.com/gimme/wholesomememes");
        const data = await res.json();
        title.innerHTML = data.title;
        meme.src = data.url;
        author.innerHTML = data.author;
    } catch (error) {
        
    }
}
GenerateMeme();

generateBtn.addEventListener("click",()=>{
    GenerateMeme();
})