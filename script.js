// Requisito 5 e 6
let getButton = document.getElementById("criar-tarefa");
let getOl = document.getElementById("lista-tarefas");
let getInput = document.getElementById("texto-tarefa");

// Requisito 12
function storage() {
    getOl.innerHTML = localStorage.getItem("list") 
  }
  storage();

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
    getOl2 = document.querySelector("#lista-tarefas").innerHTML;
    localStorage.setItem('list', getOl2);
    
}
getButton4.addEventListener("click", saveTasks);

// Requisito 13
let getButton5 = document.getElementById("mover-cima");
let getButton6 = document.getElementById("mover-baixo");

function moveUp(){
    let getSelected = document.querySelector(".selected");
    let tasksList = document.querySelectorAll(".itens-lista");
    if(getSelected !== null){
        if(getSelected === tasksList[0]){
            alert("Elemento já esta no topo da lista");
        } else { 
            getSelected.parentElement.insertBefore(getSelected,getSelected.previousElementSibling);
        }
    }
}
getButton5.addEventListener("click", moveUp);

function moveDown(){
    let getSelected = document.querySelector(".selected");
    let tasksList = document.querySelectorAll(".itens-lista");
    if(getSelected !== null){
        if(getSelected.nextElementSibling === null){
            alert("Elemento já esta na base da lista");
        } else {
            getSelected.parentElement.insertBefore(getSelected,getSelected.nextElementSibling);
            console.log(getSelected.parentElement.insertBefore(getSelected,getSelected.nextElementSibling.nextElementSibling));
        }
    }
}
getButton6.addEventListener("click", moveDown);

// Requisito 14
let getButton7 = document.getElementById("remover-selecionado");

function emptySelected (){
    let getSelected = document.querySelector(".selected");
       getOl.removeChild(getSelected);
}
getButton7.addEventListener("click",emptySelected);





 







