const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const submitBtn = document.getElementById('criar-tarefa');
const eraseAllBtn = document.getElementById('apaga-tudo');

function selectTask(event) {
    const selected = document.querySelector('.selected');
    if (selected !== null) {
        selected.classList.remove('selected');
    }
    event.target.classList.add('selected');
}

function completeTask(event) {
    const item = event.target;
    if (item.className.includes('completed')) {
        item.classList.remove('completed');
    } else {
        item.classList.add('completed');
    }
}

function addListItem() {
    const listItem = document.createElement('li');
    listItem.innerText = input.value;
    list.appendChild(listItem);
    input.value = '';
    listItem.addEventListener('click', selectTask);
    listItem.addEventListener('dblclick', completeTask);
}

function clearList(){
    let listItens = document.querySelectorAll('li');
    for (let index = 0; index < listItens.length; index += 1) {
        list.removeChild(list.lastChild);
    }
}

submitBtn.addEventListener('click', addListItem);
eraseAllBtn.addEventListener('click', clearList);
