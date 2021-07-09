const addButton = document.getElementById('criar-tarefa');
const clearListButton = document.getElementById('apaga-tudo');
const removeCompletedTaskButton = document.getElementById('remover-finalizados');
const saveListButton = document.getElementById('salvar-tarefas');
let savedListItems = document.getElementById('lista-tarefas');
savedListItems.innerHTML = localStorage.getItem('ol');



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
   newInput.id ="texto-tarefa";
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