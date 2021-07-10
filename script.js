let getButton = document.getElementById("criar-tarefa");
let getOl = document.getElementById("lista-tarefas")
let getInput = document.getElementById("texto-tarefa")

function addTask(){
    let newLi = document.createElement("li");
    newLi.innerHTML = getInput.value;
    getOl.appendChild(newLi);
    getInput.value = "";
};
getButton.addEventListener("click", addTask);

