// adiciona item na lista
const taskList = document.getElementById('lista-tarefas');
const taskText = document.getElementById('texto-tarefa');
const createTask = document.getElementById('criar-tarefa');
const clearTask = document.getElementById('remover-finalizados');
const deleteAllTask = document.getElementById('apaga-tudo');


function choiseTask(event) {
    const selected = document.querySelector('.selected');
    if (selected !== null) {
        selected.classList.remove('selected');
    }
    event.target.classList.add('selected');
}

function finishedTask(event) {
    const item = event.target;
    if (item.className.includes('completed')) {
        item.classList.remove('completed');
    } else {
        item.classList.add('completed');
    }
}


function addTask() {
         listItem = document.createElement('li');
    listItem.innerText = taskText.value;
    taskList.appendChild(listItem);
    taskText.value = '';
    listItem.addEventListener('click', choiseTask);
    listItem.addEventListener('dblclick', finishedTask);
}


//limpa item na lista feito
function deleteTask () {
    const dealTask = document.querySelectorAll('.completed');
    for (let index = 0; index < dealTask.length; index += 1) {
        taskList.removeChild(dealTask[index]);
    }
};


//limpa todos os itens da lista
function deleteAll(){
    let allList = document.querySelectorAll('li');
    for (let index = 0; index < allList.length; index += 1) {
        taskList.removeChild(list.lastChild);
    }
};

deleteAllTask.addEventListener('click', deleteTask);
createTask.addEventListener('click', addTask);
clearTask.addEventListener('click', deleteTask);