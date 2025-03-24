const APIURL ="https://api.dictionaryapi.dev/api/v2/entries/en/";

const getData = async(APIURL,word) =>{
    const res = await fetch(APIURL+word);
    const data = await res.json();
    console.log(data);
    return data;
}



const search = document.getElementById("search");
const resultBox = document.getElementsByClassName("result-box");

const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click",async()=>{
    const searchItem = search.value;
    const searchResult = await getData(APIURL,searchItem);
    resultBox[0].innerHTML = `
        <div class="details">
            <h1>${searchResult[0].word}</h1>
            <h2>${searchResult[0].phonetic}</h2>
            ${searchResult[0].meanings[0].definitions.map((def)=>{
                return `
                <div>${def.definition}</div>
                `
                })}
        </div>
    `;
})