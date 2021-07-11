const input = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const clearButton = document.querySelector('#apaga-tudo');
const saveButton = document.querySelector('#salvar-tarefas');
const completedButton = document.querySelector('#remover-finalizados');

/* -----Requisito 5 e 6----- */
function createTask() {
  if (input.value !== '') {
    const listItem = document.createElement('li');
    listItem.innerHTML = input.value;
    taskList.appendChild(listItem);
    input.value = '';
  }
}

addButton.addEventListener('click', createTask);

/* -----Requisito 7 e 8----- */
function colorTask(clickedItem) {
  const currentTask = document.querySelector('.selected');
  const selectedTask = clickedItem.target;
  const task = document.querySelectorAll('li');
  if (selectedTask !== currentTask) {
    for (let index = 0; index < task.length; index += 1) {
      task[index].classList.remove('selected');
    }
    selectedTask.classList.add('selected');
  }
  taskList.removeAttribute('class');
}

taskList.addEventListener('click', colorTask);

/* -----Requisito 9----- */
function completeTask(clickedItem) {
  const completedTask = clickedItem.target;
  if (completedTask.classList.contains('completed')) {
    completedTask.classList.remove('completed');
  } else {
    completedTask.classList.add('completed');
  }
  taskList.removeAttribute('class');
}
taskList.addEventListener('dblclick', completeTask);

/* -----Requisito 10----- */
function clear() {
  const task = document.querySelectorAll('li');
  for (let index = 0; index < task.length; index += 1) {
    taskList.removeChild(task[index]);
  }
}
clearButton.addEventListener('click', clear);

/* -----Requisito 11----- */
function clearCompleted() {
  const task = document.querySelectorAll('li');
  for (let index = 0; index < task.length; index += 1) {
    if (task[index].classList.contains('completed')) {
      taskList.removeChild(task[index]);
    }
  }
}
completedButton.addEventListener('click', clearCompleted);

/* -----Requisito 12----- */
function saveTasks() {
  localStorage.setItem('tasks', taskList.innerHTML);
}

saveButton.addEventListener('click', saveTasks);

function recoverSavedTasks() {
  taskList.innerHTML = localStorage.getItem('tasks');
}

window.onload = function () {
  recoverSavedTasks();
};
