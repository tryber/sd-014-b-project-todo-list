let getButton = document.getElementById("criar-tarefa");
let getInput = document.getElementById("texto-tarefa");
let getLista = document.getElementById("lista-tarefas");
let getButton2 = document.getElementById("apaga-tudo");
let getButton3 = document.getElementById("remover-finalizados");
let getButton4 = document.getElementById("remover-selecionado");

getButton.addEventListener('click',function(){
    let itemList = document.createElement("li");
    itemList.innerHTML = getInput.value;
    getLista.appendChild(itemList);
    getInput.value = '';  
})

getLista.addEventListener('click',function(){
    let getLi = document.querySelectorAll("li");
    for(let i = 0; i < getLi.length; i += 1) {
        getLi[i].style.backgroundColor = "white";
    }
    event.target.style.backgroundColor = "rgb(128, 128, 128)";
})

getLista.addEventListener('dblclick',function(){
    event.target.classList.toggle('completed');
})

getButton2.addEventListener('click',function(){
    let getLi = document.querySelectorAll("li");
    for (i = 0; i < getLi.length; i += 1) {
        getLista.removeChild(getLi[i]);
    }
})

getButton3.addEventListener('click',function(){
    let getLi = document.querySelectorAll("li");
    for (i = 0; i < getLi.length; i += 1) {
        if(getLi[i].classList[0] === "completed") {
            getLista.removeChild(getLi[i]);
        }
    }
})

getButton4.addEventListener('click',function(){
    let getLi = document.querySelectorAll("li");
    for (i = 0; i < getLi.length; i += 1) {
        if(getLi[i].style.backgroundColor === "rgb(128, 128, 128)") {
            getLista.removeChild(getLi[i]);
        }
    }
})