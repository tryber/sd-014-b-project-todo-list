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
  const cinza = event.target;
  const listItens = document.getElementsByTagName('li');
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].style.backgroundColor = null;
  }
  cinza.style.backgroundColor = 'grey';
}

olGray.addEventListener('click', greyPainter);
