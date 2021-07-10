


function addTask(){
    let getOl = document.getElementById("lista-tarefas");
    let getInput = document.getElementById("texto-tarefa");
    let newLi = document.createElement("li");
    newLi.innerHTML = getInput.value;
    getOl.appendChild(newLi);
    getInput.value = "";
};
let getButton = document.getElementById("criar-tarefa");
getButton.addEventListener("click", addTask);

