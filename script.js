const inputTask = document.querySelector('#texto-tarefa');
const taskButton = document.querySelector('#criar-tarefa');
const tasks = document.querySelector('#lista-tarefas');

function createElement() {
  return document.createElement('li');
}

function clearInput() {
  inputTask.value = '';
  inputTask.focus();
}

function createTask(input) {
  const newTask = createElement();
  newTask.innerText = input;
  tasks.appendChild(newTask);
  clearInput();
}

taskButton.addEventListener('click', () => {
  createTask(inputTask.value);
});
