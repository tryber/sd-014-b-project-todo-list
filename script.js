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
  newTask.className = 'task';
  newTask.innerText = input;
  tasks.appendChild(newTask);
  clearInput();
}

taskButton.addEventListener('click', () => {
  createTask(inputTask.value);
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('task')) {
    for (const child of tasks.children) {
      child.style.backgroundColor = '';
    }
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
});

document.addEventListener('dblclick', (e) => {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
});
