// Adicionando tarefa pelo botão
const botaoAdd = document.querySelector('#criar-tarefa');

function addTarefa() {
  const inputTask = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const listTask = document.createElement('li');

  list.appendChild(listTask);
  listTask.innerText = inputTask.value;
  listTask.classList.add('task');
  inputTask.value = '';
}

botaoAdd.addEventListener('click', addTarefa);

// troca cor do funda da tarefa
const colorTask = document.querySelector('#lista-tarefas');

function changeColor(event) {
  const classSelector = document.querySelector('.background-task');
  event.target.classList.add('background-task');
  if (
    classSelector !== null && classSelector !== event.target
  ) {
    classSelector.classList.remove('background-task');
  }
}
colorTask.addEventListener('click', changeColor);

// dbclick para riscar tarefa
function addComplete(event) {
  const chooseTask = document.querySelector('.task.completed.background-task');
  if (chooseTask === null) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}
colorTask.addEventListener('dblclick', addComplete);

// ao clicar no botão limpar tarefas, exclui a lista
const botaoRemove = document.querySelector('#apaga-tudo');

function removeTask() {
  const list = document.querySelector('#lista-tarefas');
  list.innerText = '';
}

botaoRemove.addEventListener('click', removeTask);

// remove elementos com risco
const botaoDone = document.querySelector('#remover-finalizados');

function removeDone() {
  const removeFinalizado = document.querySelectorAll('li');
  const removeList = document.querySelector('ol');
  for (let i of removeFinalizado) {
    if (i.classList.contains('completed')) {
      removeList.removeChild(i);
    }
  }
}
botaoDone.addEventListener('click', removeDone);
