let taskList = document.getElementById('lista-tarefas');
let inputTask = document.getElementById('texto-tarefa');
const btnCreateTask = document.getElementById('criar-tarefa');
const btnDeleteAll = document.getElementById('apaga-tudo');
const btnRemoveCompleted = document.getElementById('remover-finalizados');
const btnSaveTasks = document.getElementById('salvar-tarefas');
let listItens = taskList.children;

btnCreateTask.addEventListener('click', addTask);

function addTask(parameter) {
  let listItem = document.createElement('li');
  if (inputTask.value !== '') {
    listItem.innerText = inputTask.value;
    taskList.appendChild(listItem);
    inputTask.value = null;
    addListItemListeners(listItem)
  }
}

function addListItemListeners(listItem) {
    listItem.addEventListener('click', function (event) {
      if (event.target.style.backgroundColor === 'rgb(128, 128, 128)') {
        event.target.style.backgroundColor = 'white';
      } else {
        for (let item of taskList.children) {
          if ((item.style.backgroundColor = 'rgb(128, 128, 128)')) {
            item.style.backgroundColor = 'white';
          }
        }
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      }
    });

    listItem.addEventListener('dblclick', function (event) {
      let isCompleted = event.target.classList.contains('completed');
      if (isCompleted) {
        event.target.classList.remove('completed');
        event.target.style.textDecoration = 'none';
      } else {
        event.target.classList.add('completed');
        event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
      }
    });
}

btnDeleteAll.addEventListener('click', function () {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.lastChild);
  }
  localStorage.clear();
});

btnRemoveCompleted.addEventListener('click', function () {
  let completedTasks = document.querySelectorAll('.completed');
  for (let task of completedTasks) {
    task.parentNode.removeChild(task);
  }
});

btnSaveTasks.addEventListener('click', saveInLocalStorage);

function saveInLocalStorage() {
  let arrayOfTasks = [];
  localStorage.clear();
  if (listItens.length > 0) {
    for (item of listItens) {
      let isCompleted;
      if (item.classList.contains('completed')) {
        isCompleted = true;
      } else {
        isCompleted = false;
      }
      arrayOfTasks.push({ task: item.innerText, completed: isCompleted });
    }
    localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
  }
}

function getLocalStorage() {
  let tasksStorage = JSON.parse(localStorage.getItem('tasks'));
  if (tasksStorage !== null) {
    for (let task of tasksStorage) {
      let listItem = document.createElement('li');
      listItem.innerText = task.task;
      taskList.appendChild(listItem);
      if (task.completed == true) {
        console.log(listItem);
        taskList.lastChild.classList.add('completed');
        taskList.lastChild.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
      }
      addListItemListeners(listItem)
    }
  }
}

window.onload = function () {
  getLocalStorage();
};
