const inputTask = document.querySelector('#texto-tarefa');
const taskButton = document.querySelector('#criar-tarefa');
const tasks = document.querySelector('#lista-tarefas');
const btClearAll = document.querySelector('#apaga-tudo');
const btClearCompleted = document.querySelector('#remover-finalizados');
const btSaveTasks = document.querySelector('#salvar-tarefas');

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

function clearAll() {
  btClearAll.addEventListener('click', () => {
    while (tasks.firstChild) {
      tasks.removeChild(tasks.lastChild);
    }
  });
}
clearAll();

function deleteTasksDone() {
  btClearCompleted.addEventListener('click', () => {
    const tasksDone = document.querySelectorAll('.completed');
    tasksDone.forEach((task) => {
      tasks.removeChild(task);
    });
  });
}
deleteTasksDone();

function tasksToLocalStorage() {
  const tasksToSave = tasks.querySelectorAll('.task');
  const taskList = [];
  for (const task of tasksToSave) {
    let taskText = task.innerText;
    taskText = taskText.trim();
    taskList.push(taskText);
  }
  const tasksJSON = JSON.stringify(taskList);
  localStorage.setItem('tasks', tasksJSON);
}

function returnSavedTasks() {
  const localTasks = localStorage.getItem('tasks');
  const tasksList = JSON.parse(localTasks);
  console.log(tasksList);
  for (const task of tasksList) {
    createTask(task);
  }
}
returnSavedTasks();

function saveTasks() {
  btSaveTasks.addEventListener('click', tasksToLocalStorage);
}
saveTasks();
