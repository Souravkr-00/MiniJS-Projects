
function addTask(task){
    let ul = document.querySelector("#todos");
    let li = document.createElement("li");

    let deleteBtn = document.createElement("button");
    let span = document.createElement("span");

    span.innerHTML = task;

    li.appendChild(span);

    deleteBtn.innerHTML = "Delete";
    deleteBtn.className = "delete-todo";
    deleteBtn.onclick = function(){
        ul.removeChild(li);
    }

    li.appendChild(deleteBtn);

    li.onclick = function(){
        li.classList.toggle("done");
    }
    ul.appendChild(li);
    console.log(ul);

    saveData();
}
let todos = document.querySelector("#todos");

let inputTask = document.querySelector("#todo-input");

let addTaskBtn = document.querySelector("#add-todo");

addTaskBtn.addEventListener("click", function(){
    let task = inputTask.value;
    if(task === ""){
        alert("Task cannot be empty");
        return;
    }
    addTask(task);
    inputTask.value = "";
});

function saveData(){
    localStorage.setItem("data",todos.innerHTML);
}
function loadData(){
    todos.innerHTML = localStorage.getItem("data");
}

loadData();