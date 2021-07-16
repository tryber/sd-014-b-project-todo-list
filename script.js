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
  )
  classSelector.classList.remove('background-task');
}
colorTask.addEventListener('click', changeColor);
