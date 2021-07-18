let getButton = document.getElementById("criar-tarefa");
let getInput = document.getElementById("texto-tarefa");
let getLista = document.getElementById("lista-tarefas");

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


