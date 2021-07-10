// Requisito 5 e 6
let getButton = document.getElementById("criar-tarefa");
let getOl = document.getElementById("lista-tarefas");
let getInput = document.getElementById("texto-tarefa");

function addTask() {
    let newLi = document.createElement("li");
    newLi.innerHTML = getInput.value;
    newLi.classList.add("itens-lista");
    getOl.appendChild(newLi);
    newLi.addEventListener("click", changeBkg);
    newLi.addEventListener("dblclick", riskTask);
    getInput.value = "";
    
}
getButton.addEventListener("click", addTask);

// Requisitos 7 e 8
function changeBkg(event){
    let getSelected = document.querySelector(".selected");
    if(getSelected === null){
        event.target.style.backgroundColor = "rgb(128, 128, 128)";
        event.target.classList.add("selected"); 
    } else  {
        getSelected.style.backgroundColor = "";
        getSelected.classList.remove("selected");
        event.target.style.backgroundColor = "rgb(128, 128, 128)";
        event.target.classList.add("selected");
    }
}

// Requisito 9
function riskTask(event){
    if(event.target.classList.contains("completed")){
        event.target.classList.remove("completed")  
    } else {
        event.target.classList.add("completed");
    }
    
}

// Requisito 10
let getButton2 = document.getElementById("apaga-tudo");

function emptyList(){
   let getLis = document.querySelectorAll(".itens-lista");
   for (index = 0; index < getLis.length; index +=1){
       getOl.removeChild(getLis[index]);
   
   }

}
getButton2.addEventListener("click",emptyList);

// Requisito 11
let getButton3 = document.getElementById("remover-finalizados");

function emptyDone(){
    let getLis = document.querySelectorAll(".itens-lista");
    for (index = 0; index < getLis.length; index +=1){
        if(getLis[index].classList.contains("completed")){
            getOl.removeChild(getLis[index]);
        }
    }
     
} 
getButton3.addEventListener("click", emptyDone);

// Requisito 12
let getButton4 = document.getElementById("salvar-tarefas");

function saveTasks(){
    let getLis = document.querySelectorAll(".itens-lista");
    for (index = 0; index < getLis.length; index +=1){
        localStorage.setItem("intem[index]","getLis[index]");
    }
}
getButton4.addEventListener("click", saveTasks);

// Requisito 14let getButton4 = document.getElementById("salvar-tarefas");
let getButton5 = document.getElementById("remover-selecionado");

function emptySelected (){
    let getSelected = document.querySelector(".selected");
       getOl.removeChild(getSelected);
}
getButton5.addEventListener("click",emptySelected);





 







