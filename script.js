const clickButton = document.querySelector('#criar-tarefa')
clickButton.addEventListener('click', createNewTask);

function createNewTask() {
  const inputTask = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  const createTask = document.createElement('li');
  createTask.innerText = inputTask.value;
  createTask.addEventListener('click', changeBackgroundColor);
  taskList.appendChild(createTask);
  inputTask.value = '';
}

function changeBackgroundColor(Event) {
  Event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}