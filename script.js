const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
let tasks = document.querySelectorAll('.task');

//Referecia: https://www.w3schools.com/howto/howto_html_clear_input.asp

function selectTask(event) {
  console.log('ltc.length');
  const selTaskList = document.getElementsByClassName('selectedTask');
  if (selTaskList.length >= 1) {
    selTaskList[0].classList.remove('selectedTask');
    event.target.classList.add('selectedTask');
  } else {
    event.target.classList.add('selectedTask');
  }
}

function clickTask() {
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].addEventListener('click', selectTask);
    tasks[i].addEventListener('dbclick', markCompleted);
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
function markCompleted(event) {
  event.target.classList.add('completed');
}

button.addEventListener('click', addTask, clickTask);

// function clickTask() {
//   const selTaskList = [];
//   tasks.forEach((item) => {
//     item.addEventListener('click', (event) => {
//       event.target.classList.add('selectedTask');
//       selTaskList.push(event.target);
//       // selTaskList[-2].classList.remove('selectedTask');
//       console.log(selTaskList);
//     });
//   });
// }
// tasks.forEach((item) => {
//   item.addEventListener('click', (event) => {
//     event.target.classList.add('selectedTask');
//     event.target.previousSibling.classList.remove('selectedTask');
//     console.log('event');
//   });
// });
