let getButton = document.getElementById("criar-tarefa");
let getOl = document.getElementById("lista-tarefas");
let getInput = document.getElementById("texto-tarefa");



function addTask() {
    let newLi = document.createElement("li");
    newLi.innerHTML = getInput.value;
    newLi.classList.add("itens-lista");
    getOl.appendChild(newLi);
    newLi.addEventListener("click", changeBkg);
    getInput.value = "";
    
}
getButton.addEventListener("click", addTask);

function changeBkg(event){
    event.target.style.backgroundColor = "green";
}


 







