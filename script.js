const button = document.querySelector('#criar-tarefa')

function addTask() {

    let lista = document.querySelector('#lista-tarefas');
    let input = document.querySelector('#texto-tarefa')
    let newItem = document.createElement('li');
    let itemClass = 'lista-item';
    newItem.className = itemClass;
    newItem.classList.add('color');
    newItem.classList.remove('color');
    newItem.innerText = input.value;
    lista.appendChild(newItem)
    input.value = '';

}
button.addEventListener('click', addTask);
let taskList = document.querySelector('#lista-tarefas');
function changeColor(event) {
    const list = document.querySelectorAll('li');
    for (let i = 0; i < list.length; i += 1) {
        list[i].classList.remove('color');
    }
    event.target.classList.add('color');

}
taskList.addEventListener('click', changeColor);

function checkItem(event) {
    const list = document.querySelectorAll('li');
    for (let i = 0; i < list.length; i += 1) {
        if (event.target.classList.contains('completed')) {
            event.target.classList.remove('completed');
        } else {
            event.target.classList.add('completed');
        }
    }
}  
taskList.addEventListener('dblclick', checkItem);














