let btnAddTask = document.querySelector('#criar-tarefa');
btnAddTask.addEventListener('click', createTask);

//Cria os elementos li, dentro da lista
function createTask() {
    //Faz a ligação da OL e do Input Text
    let listTask = document.querySelector('#lista-tarefas');
    let txtTask = document.querySelector('#texto-tarefa').value;

    if (txtTask.length === 0) { 
        alert('[ERRO] Campo vazio!');
    } else {
        //Cria o elemento, adiciona o texto inserido no input
        //Adiciona classe, evento de clique e adiciona no html
        let itemTask = document.createElement('li');
        itemTask.innerHTML = txtTask;
        itemTask.className = 'tasks';
        itemTask.addEventListener('click', changeColor);
        itemTask.addEventListener('dblclick', taskCompleted);

        listTask.appendChild(itemTask);

        //Seta o valor do input como vazio
        document.querySelector('#texto-tarefa').value = '';
    }
}

function changeColor(evento) {
    let listItems = document.querySelectorAll('.tasks');
    let itemClicked = evento.target;

    for (let key of listItems) {
        let item = key;

        //Muda a cor de todos para branco
        item.style.backgroundColor = 'rgb(0, 0, 0, 0)';

        //Seta a cor do item clickado para cinza
        itemClicked.style.backgroundColor = 'rgb(128, 128, 128)';
    };  
} 

function taskCompleted(evento) {
    let itemClicked = evento.target;
    let searchClassCompleted = itemClicked.classList.contains('completed');

    if (searchClassCompleted === true) {
        itemClicked.classList.remove('completed')
    } else {
        itemClicked.classList.add('completed');
    }
}
