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


function addListItem() {
    const listItem = document.createElement('li');
    listItem.innerText = input.value;
    list.appendChild(listItem);
    input.value = '';
    listItem.addEventListener('click', selectTask);
}

submitBtn.addEventListener('click', addListItem);