const fullDarkMode = document.querySelector("#full-dark-mode");
const containerDarMode = document.querySelector('#container-dark-mode');
const container = document.querySelector(".container");

const isFullDarkMode = JSON.parse(localStorage.getItem("fullDarkModeCheck"));
const isContainerDarkMode = JSON.parse(localStorage.getItem("containedDarkModeCheck"));

if(isFullDarkMode && isContainerDarkMode){
    fullDarkMode.checked = true;
    changeFullMode();
    containerDarMode.checked = true;
    changeContainerMode();
}
else if(!isFullDarkMode && isContainerDarkMode){
    fullDarkMode.checked = false;
    changeFullMode();
    containerDarMode.checked = true;
    changeContainerMode();
}
else if(isFullDarkMode && !isContainerDarkMode){
    fullDarkMode.checked = true;
    changeFullMode();
    containerDarMode.checked = false;
    changeContainerMode();
}
else {
    fullDarkMode.checked = false;
    changeFullMode();
    containerDarMode.checked = false;
    changeContainerMode();
}

fullDarkMode.addEventListener('change',changeFullMode);
containerDarMode.addEventListener('change',changeContainerMode);

function changeFullMode(){
    if(fullDarkMode.checked){
        document.body.classList.add("dark");
        localStorage.setItem("fullDarkModeCheck",true);
    }else{
        document.body.classList.remove("dark");
        localStorage.setItem("fullDarkModeCheck",false);
    }
    containerDarMode.checked = fullDarkMode.checked;
    if(containerDarMode.checked){
        container.classList.add("dark");
        localStorage.setItem("containedDarkModeCheck",true);
    }
    else{
        container.classList.remove("dark");
        localStorage.setItem("containedDarkModeCheck",false);
    }
}

function changeContainerMode(){
    if(containerDarMode.checked){
        container.classList.add("dark");
        localStorage.setItem("containedDarkModeCheck",true);
    }
    else{
        container.classList.remove("dark");
        localStorage.setItem("containedDarkModeCheck",false);
    }
}
