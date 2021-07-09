const clickButton = document.querySelector('#criar-tarefa')
clickButton.addEventListener('click', createNewTask);

function createNewTask() {
  const inputTask = document.querySelector('#texto-tarefa');
  const taskList = document.querySelector('#lista-tarefas');
  const createTask = document.createElement('li');
  createTask.innerText = inputTask.value;
  taskList.appendChild(createTask);
  inputTask.value = '';
}
