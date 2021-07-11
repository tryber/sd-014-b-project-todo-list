const addTask = document.querySelector('#criar-tarefa');

function taskCreator() {
  const itemCreator = document.createElement('li');
  const existingList = document.querySelector('#lista-tarefas');
  existingList.appendChild(itemCreator);
  itemCreator.innerText = document.querySelector('#texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
}

addTask.addEventListener('click', taskCreator);

const olGray = document.getElementById('lista-tarefas');

function greyPainter(event) {
  event.target.style.backgroundColor = 'grey';
}

olGray.addEventListener('click', greyPainter);
