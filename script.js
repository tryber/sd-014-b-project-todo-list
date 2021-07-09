const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

function createTask() {
  const createLi = document.createElement('li');
  createLi.setAttribute('class', 'task');
  taskList.appendChild(createLi);
  createLi.innerText = input.value;
  input.value = '';
}

function selectTask() {
  const allTasks = document.querySelectorAll('.task');
  for (let i = 0; i < allTasks.length; i += 1) {
    allTasks[i].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

button.addEventListener('click', createTask);

taskList.addEventListener('click', selectTask);
