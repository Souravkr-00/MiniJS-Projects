let count = 0;
let inc_dec_by = 1;

const incrementBtn = document.getElementById("incrementbtn");
const decrementBtn = document.getElementById("decrementbtn");
var incAndDecBy = document.querySelector("#incAndDecBy");
var counter = document.getElementById("counter");
const resetBtn = document.getElementById("reset");

incrementBtn.addEventListener('click',()=>{
    count+=parseInt(inc_dec_by);
    counter.innerHTML = count;
})
decrementBtn.addEventListener('click',()=>{
    count-=inc_dec_by;
    counter.innerHTML = count;
})

incAndDecBy.addEventListener('change',(e)=>{
    inc_dec_by = incAndDecBy.value;
})

resetBtn.addEventListener('click',()=>{
    count = 0;
    inc_dec_by = 1;
    incAndDecBy.value = 1;
    counter.innerHTML = 0;
})

