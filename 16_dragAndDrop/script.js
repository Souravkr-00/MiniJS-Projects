var leftArea = document.querySelector('.left');
var rightArea = document.querySelector('.right');
let lists = document.querySelectorAll(".item");
console.log(lists);


lists.forEach((list)=>{
    list.addEventListener("dragstart",(e)=>{
        let selected = e.target;

        rightArea.addEventListener("dragover",(e)=>{
            e.preventDefault();
        })

        rightArea.addEventListener("drop",(e)=>{
            e.preventDefault();
            rightArea.append(selected);
            
        })
    })
})


