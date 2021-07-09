const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const submitBtn = document.getElementById('criar-tarefa');

function addListItem() {
    const listItem = document.createElement('li');
    listItem.innerText = input.value;
    list.appendChild(listItem);
    input.value = '';
}

submitBtn.addEventListener('click', addListItem);
