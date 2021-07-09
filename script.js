const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const submitBtn = document.getElementById('criar-tarefa');

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

submitBtn.addEventListener('click', addListItem);