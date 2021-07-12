const addButton = document.getElementById('criar-tarefa');
const clearListButton = document.getElementById('apaga-tudo');
const removeCompletedTaskButton = document.getElementById('remover-finalizados');
const saveListButton = document.getElementById('salvar-tarefas');
const removeSelectedTaskButton = document.getElementById('remover-selecionado');
let savedListItems = document.getElementById('lista-tarefas');
savedListItems.innerHTML = localStorage.getItem('ol');
const upButton = document.getElementById('mover-cima');
const downButton = document.getElementById('mover-baixo');



function generateTask(){
    const li = document.createElement('li');
    const list = document.getElementById('lista-tarefas');
    const inputValue = document.getElementById('texto-tarefa').value;
    const deletedInput = document.getElementById('texto-tarefa');
    li.innerText = inputValue;
    li.addEventListener('click', selectLi);
    li.addEventListener("dblclick", checkingTask);
    list.appendChild(li);
    const inputSection = document.getElementById('inputSection');
   inputSection.removeChild(deletedInput);
   const newInput = document.createElement('input');
   newInput.id = "texto-tarefa";
   newInput.placeholder="Digite uma tarefa";
   inputSection.appendChild(newInput);

}

addButton.addEventListener('click', generateTask);


function selectLi(event){
    const allLis = document.querySelectorAll('li');
    for(let index = 0; index < allLis.length; index += 1){
        allLis[index].style.backgroundColor = 'rgb(255, 255, 255)';
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
}

function checkingTask(event){
    if(event.target.className === "completed"){
        event.target.classList.remove('completed');
        }else{
            event.target.classList.add('completed');
        }
}

function clearList(){
    const allLis = document.querySelectorAll('li');
    for(index = 0; index < allLis.length; index += 1){
        allLis[index].parentNode.removeChild(allLis[index]);
    }
}

clearListButton.addEventListener('click', clearList);



function removeCompletedTasks(event){
    const allLis = document.querySelectorAll('li');
    for(index = 0; index < allLis.length; index += 1){
        if(allLis[index].className === 'completed'){
        allLis[index].parentNode.removeChild(allLis[index]);
        }
    }
}    

removeCompletedTaskButton.addEventListener('click', removeCompletedTasks);


function saveList(event){
    localStorage.setItem('ol', document.getElementById('lista-tarefas').innerHTML);
}

saveListButton.addEventListener('click', saveList);


function removeSelectedTask(){
    const allLis = document.querySelectorAll('li');
    for(let index = 0; index < allLis.length; index += 1){
        if(allLis[index].style.backgroundColor === 'rgb(128, 128, 128)'){
        allLis[index].parentNode.removeChild(allLis[index]);
        }

    }
}


removeSelectedTaskButton.addEventListener('click', removeSelectedTask);




function upTask(){
    let seletedTask = document.getElementsByTagName('li');
    let tempValue = "";
    for(let index = 0; index < seletedTask.length; index += 1){
        if(seletedTask[index].style.backgroundColor === 'rgb(128, 128, 128)'){
            if(seletedTask[index].previousSibling === null){
                seletedTask[index].innerText = seletedTask[index].innerText;
            }else{
                tempValue = seletedTask[index].innerText;
                seletedTask[index].innerText = seletedTask[index].previousSibling.innerText;
                seletedTask[index].style.backgroundColor = 'rgb(255, 255, 255)';
                seletedTask[index].previousSibling.innerText = tempValue;
                seletedTask[index].previousSibling.style.backgroundColor = 'rgb(128, 128, 128)';
                }
        }
    }

}

upButton.addEventListener('click', upTask);



function downTask(){
    let seletedTask = document.getElementsByTagName('li');
    let tempValue = "";
    for(let index = seletedTask.length -1; index >=0; index -= 1){
        if(seletedTask[index].style.backgroundColor === 'rgb(128, 128, 128)'){
            if(seletedTask[index].nextSibling === null){
                seletedTask[index].innerText = seletedTask[index].innerText;
            }else{
                tempValue = seletedTask[index].innerText;
                seletedTask[index].innerText = seletedTask[index].nextSibling.innerText;
                seletedTask[index].style.backgroundColor = 'rgb(255, 255, 255)';
                seletedTask[index].nextSibling.innerText = tempValue;
                seletedTask[index].nextSibling.style.backgroundColor = 'rgb(128, 128, 128)';
            }
        }
    }

}


downButton.addEventListener('click', downTask);
