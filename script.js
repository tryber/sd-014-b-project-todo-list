let btnAddTask = document.querySelector('#criar-tarefa');
btnAddTask.addEventListener('click', createTask);

//Ao apertar ENTER, irá executar a função createTask
//Gabriel Gartz - StackOverflow
// 04/02/2014 - às 15:35
let valueTxtTask = document.querySelector('#texto-tarefa');
valueTxtTask.addEventListener('keydown', function (event) {
    if (event.keyCode !== 13) return;
        createTask();
});

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

    //Verifica se possui a classe 'completed', se sim, remove, se não, adiciona
    if (searchClassCompleted === true) {
        itemClicked.classList.remove('completed')
    } else {
        itemClicked.classList.add('completed');
    }
}

let btnClearTasks = document.querySelector('#apaga-tudo');
btnClearTasks.addEventListener('click', clearTasks);

function clearTasks() {
    let listTask = document.querySelectorAll('.tasks');

    for (let key of listTask) {
        let task = key;
    
        task.parentNode.removeChild(task);
    }
}

let btnRemoveCompleted = document.querySelector('#remover-finalizados');
btnRemoveCompleted.addEventListener('click', clearCompleted);

function clearCompleted() {
    let listTask = document.querySelectorAll('.tasks');

    for (let key of listTask) {
        let task = key;

        //Retorna true se o elemento tiver a classe 'completed'
        let searchClassCompleted = task.classList.contains('completed');
        
        //Se tiver, remove o elemento
        if (searchClassCompleted === true) {
            task.parentNode.removeChild(task);
        };
    };
}