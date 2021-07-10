const addTask = document.querySelector('#criar-tarefa');

function taskCreator() {
  const itemCreator = document.createElement('li');
  const existingList = document.querySelector('#lista-tarefas');
  existingList.appendChild(itemCreator);
  itemCreator.innerText = document.querySelector('#texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
}

addTask.addEventListener('click', taskCreator);
