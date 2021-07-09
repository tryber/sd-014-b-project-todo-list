const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function createTask() {
  const task = document.createElement('li');
  taskList.appendChild(task);
  task.innerText = input.value;
  input.value = '';
}

button.addEventListener('click', createTask);
