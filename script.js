const inputTask = document.querySelector('#texto-tarefa');
const taskButton = document.querySelector('#criar-tarefa');
const tasks = document.querySelector('#lista-tarefas');
const btClearAll = document.querySelector('#apaga-tudo');
const btClearCompleted = document.querySelector('#remover-finalizados');
const btClearSelected = document.querySelector('#remover-selecionado');
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

function changeBackground() {
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('task')) {
      for (const child of tasks.children) {
        child.style.backgroundColor = '';
        child.classList.remove('selected');
      }
      e.target.classList.add('selected');
      e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}
changeBackground();

function setToCompleted() {
  document.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    } else {
      e.target.classList.add('completed');
    }
  });
}
setToCompleted();

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
  localStorage.clear();
  const tasksToSave = tasks.querySelectorAll('.task');
  const taskList = [];
  tasksToSave.forEach((e) => {
    taskList.push(e.innerText.trim());
  });
  const tasksJSON = JSON.stringify(taskList);
  localStorage.setItem('tasks', tasksJSON);
}

function returnSavedTasks() {
  const localTasks = localStorage.getItem('tasks');
  const tasksList = JSON.parse(localTasks);
  if (localStorage.getItem('tasksList') !== null) {
    tasksList.forEach((e) => {
      createTask(e);
    });
  }
}
returnSavedTasks();

function saveTasks() {
  btSaveTasks.addEventListener('click', tasksToLocalStorage);
}
saveTasks();
