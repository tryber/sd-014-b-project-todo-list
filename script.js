let clickButton = document.querySelector('#criar-tarefa')
clickButton.addEventListener('click', createNewTask);

function createNewTask (){
  let inputTask = document.querySelector('#texto-tarefa');
  let taskList = document.querySelector('#lista-tarefas');
  let createTask = document.createElement('li');
  createTask.innerText = inputTask.value;
  taskList.appendChild(createTask);
  inputTask.value = '';

}
