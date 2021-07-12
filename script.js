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
        list[i].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)';

}
taskList.addEventListener('click', changeColor);

function checkItem(event) {
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    } else {
        event.target.classList.add('completed');
    }

}
taskList.addEventListener('dblclick', checkItem);

let clear = document.querySelector('#apaga-tudo')
function removeItens() {
    taskList.innerHTML = '';
}
clear.addEventListener('click', removeItens);

let checked = document.querySelector('#remover-finalizados');
function removeCheckedItem() {
    let completed = document.querySelectorAll('.completed');
    for (let i = 0; i < completed.length; i+=1 ) {
    taskList.removeChild(completed[i])
    }
}
checked.addEventListener('click', removeCheckedItem);















