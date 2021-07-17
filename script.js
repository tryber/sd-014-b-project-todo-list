const btn = document.getElementById("criar-tarefa")
const taskList = document.getElementById("lista-tarefas")
const listItem = document.getElementById("li");

function addNewTask() {   

    let inputField = document.getElementById("texto-tarefa")
    let newTask = document.createElement("li");
    newTask.innerHTML = inputField.value;
    newTask.className = "li-style";
    newTask.id = "li";
    taskList.appendChild(newTask);
    inputField.value = "";
};

console.log("addNewTask()");

function changeLiColor (eve) {

    let rmv = document.querySelector(".selected");
    rmv.classList.remove("selected");
    eve.target.classList.add("selected");
    taskList.style.backgroundColor = "cornflowerblue";
};

console.log("changeLiColor");


btn.addEventListener("click", addNewTask);
taskList.addEventListener("click", changeLiColor);