const clickButton = document.querySelector('#criar-tarefa');

function addTask() {
  const enterTask = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const listTask = document.createElement('li');
  list.appendChild(listTask);
  listTask.innerText = enterTask.value;
  enterTask.value = '';
}
clickButton.addEventListener('click', addTask);
