var input = document.querySelector("input");
let prevVal = "";
input.addEventListener('input', (e)=>{
    const currVal = e.target.value;

    if(/\d+$/g.test(currVal)){
        input.value = currVal;
    }else{
        input.value = currVal.substring(0,currVal.length - 1);
    }

    if(currVal.length == 4 && (prevVal.length <= currVal.length)){
        input.value = `+(${currVal.substr(0,3)}) - ${currVal[currVal.length - 1]}`;
    }
    prevVal = currVal;
})