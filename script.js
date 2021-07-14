const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const buttonCT = document.getElementById('criar-tarefa');
const buttonRC = document.getElementById('remover-finalizados');
let tasks = document.querySelectorAll('.task');
const delButton = document.getElementById('apaga-tudo');

//Referecia: https://www.w3schools.com/howto/howto_html_clear_input.asp

function selectTask(event) {
  const selTaskList = document.getElementsByClassName('selectedTask');
  console.log(selTaskList);
  if (selTaskList.length >= 1) {
    selTaskList[0].classList.remove('selectedTask');
    event.target.classList.add('selectedTask');
  } else {
    event.target.classList.add('selectedTask');
  }
}

function markCompleted(event) {
  if (event.target.classList.contains('completed') === true) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function clickTask() {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].addEventListener('click', selectTask);
    tasks[i].addEventListener('dblclick', markCompleted);
  }
}

function addTask() {
  const ltc = document.querySelectorAll('.lastTaskCreated');
  const liCreate = document.createElement('li');
  if (ltc.length >= 1) {
    ltc[0].classList.remove('lastTaskCreated');
    liCreate.innerText = taskInput.value;
    liCreate.classList.add('lastTaskCreated', 'task');
    taskList.appendChild(liCreate);
    taskInput.value = '';
  } else if (ltc.length === 0) {
    liCreate.innerText = taskInput.value;
    liCreate.classList.add('lastTaskCreated', 'task');
    taskList.appendChild(liCreate);
    taskInput.value = '';
    console.log(ltc.length);
    console.log();
  }
  tasks = document.querySelectorAll('.task');
  clickTask();
}

function removeCompleted() {
  document.querySelectorAll('.completed').forEach((item) => {
    item.remove();
  });
}

buttonCT.addEventListener('click', addTask, clickTask);
buttonRC.addEventListener('click', removeCompleted);

function delAllTasks() {
  document.querySelectorAll('.task').forEach((item) => {
    item.remove();
  });
}

delButton.addEventListener('click', delAllTasks);
