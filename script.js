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
console.log(getButton2);

function emptyList(){
   let getLis = document.querySelectorAll(".itens-lista");
   for (index = 0; index < getLis.length; index +=1){
       getOl.removeChild(getLis[index]);
   
   }

}
getButton2.addEventListener("click",emptyList);


 







