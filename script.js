let btnAddTask = document.querySelector('#criar-tarefa');
btnAddTask.addEventListener('click', createTask);

//Cria os elementos li, dentro da lista
function createTask() {
    let listTask = document.querySelector('#lista-tarefas');
    let txtTask = document.querySelector('#texto-tarefa').value;

    let itemTask = document.createElement('li');
    itemTask.innerHTML = txtTask;

    listTask.appendChild(itemTask);

    document.querySelector('#texto-tarefa').value = '';
}