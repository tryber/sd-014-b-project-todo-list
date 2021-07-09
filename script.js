const root = document.querySelector('.root');
const toDoList = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');

let button = document.createElement('button');
button.id = 'criar-tarefa';
toDoList.appendChild(button);

button.addEventListener('click', function () {
    let freshLi = document.createElement('li');
    freshLi.innerText = input.value
    toDoList.appendChild(freshLi);
    input.value = '';
});
