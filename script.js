let getButton = document.getElementById("criar-tarefa");
let getInput = document.getElementById("texto-tarefa");
let getLista = document.getElementById("lista-tarefas");

getButton.addEventListener('click',function(){
    let itemList = document.createElement("li");
    itemList.innerHTML = getInput.value;
    getLista.appendChild(itemList);
    getInput.value = '';  
})

let getLi = document.querySelectorAll("li");

    getLista.addEventListener('click',function(){
        event.target.style.backgroundColor = "red";
    
    
    })
