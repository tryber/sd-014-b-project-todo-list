const addBtn = document.getElementById("criar-tarefa");
const taskList = document.getElementById("lista-tarefas");
const listItem = document.getElementById("li");
const removeBtn = document.getElementById("apaga-tudo");

function addNewTask() {   

    let inputField = document.getElementById("texto-tarefa");
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


function completedTask (event) {

    let item = event.target;
 
 item.classList.add("completed");
 console.log("Marking as completed");

 if (item.classList == "li-style completed selected") {
     item.classList.remove("completed");
     console.log("marking as uncompleted");
 }
}

function deleteAll () {  
    
    let liList = document.querySelectorAll("#li");
    
    for ( let i = 0; i < liList.length; i++){

       let li = document.getElementById("li");
       taskList.removeChild(li);
       console.log("removendo itens");

    }


    

    console.log(liList);
    

}



console.log("completedTask()");

addBtn.addEventListener("click", addNewTask);
taskList.addEventListener("click", changeLiColor);
taskList.addEventListener("dblclick", completedTask);
removeBtn.addEventListener('click', deleteAll);