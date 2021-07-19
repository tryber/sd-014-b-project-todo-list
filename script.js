const addBtn = document.getElementById("criar-tarefa");
const taskList = document.getElementById("lista-tarefas");
const listItem = document.getElementById("li");
const removeBtn = document.getElementById("apaga-tudo");
const removeOnlyBtn = document.getElementById("remover-finalizados");



function addNewTask(elem) {   

    let inputField = document.getElementById("texto-tarefa");
    if(inputField.value == ""){
        alert("Insira um valor pro campo");
        
    }
    else {
    let newTask = document.createElement("li");
    newTask.innerHTML = inputField.value;
    newTask.className = "li-style";
    newTask.id = "li";
    taskList.appendChild(newTask);
    inputField.value = "";
}
};

console.log("addNewTask()");

function changeLiColor (eve) {

    let rmv = document.querySelector(".selected");
    let divList = document.getElementById("divList");
    let itemList = document.querySelectorAll("#li");

    if (rmv == null && itemList.length == 0) {
      divList.className = "selected";
    }
    if (rmv == null && itemList.length > 0) { 
      eve.target.classList.add("selected");
    }
    rmv.classList.remove("selected");
    eve.target.classList.add("selected");
    taskList.style.backgroundColor = "cornflowerblue";
};

console.log("changeLiColor()");


function completedTask (event) {

    let item = event.target;
    item.classList.add("completed");
 if (item.classList == "li-style completed selected") {
     item.classList.remove("completed");
 }
}

function deleteAll () {  
    
    let liList = document.querySelectorAll("#li");
    
    for ( let i = 0; i < liList.length; i++){
       let li = document.getElementById("li");
       taskList.removeChild(li);
    }  
}

console.log("deleteAll()");

function deleteCompleted () {
    let liList = document.querySelectorAll(".completed");
    console.log(liList);
    for ( let i = 0; i < liList.length; i++){
       let completedLi = document.querySelector(".completed");
       taskList.removeChild(completedLi);
       console.log("removendo completos")
    }  
  
}
console.log("deleteCOmpleted()");


console.log("completedTask()");

addBtn.addEventListener("click", addNewTask);
taskList.addEventListener("click", changeLiColor);
taskList.addEventListener("dblclick", completedTask);
removeBtn.addEventListener('click', deleteAll);
removeOnlyBtn.addEventListener('click', deleteCompleted);