const inputTask = document.querySelector('#texto-tarefa');
const taskButton = document.querySelector('#criar-tarefa');
const tasks = document.querySelector('#lista-tarefas');

function createElement() {
  return document.createElement('li');
}

function createTask(input) {
  const newTask = createElement();
  newTask.innerText = input;
  tasks.appendChild(newTask);
}

taskButton.addEventListener('click', () => {
  createTask(inputTask.value);
});
