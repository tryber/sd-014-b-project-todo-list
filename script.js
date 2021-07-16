/*const buttonOne = document.querySelector('#criar-tarefa');

function moreTask() {
  const enterTask = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const listTask = document.createElement('li');

  list.appendChild(listTask);
  listTask.innerText = enterTask.value;
  enterTask.value = '';
}*/

buttonOne.addEventListener('click', moreTask);

const botaoAdd = document.querySelector('#criar-tarefa');

function addTarefa() {
  const inputTask = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const listTask = document.createElement('li');

  list.appendChild(listTask);
  listTask.innerText = inputTask.value;
  inputTask.value = '';
}

botaoAdd.addEventListener('click', addTarefa);
