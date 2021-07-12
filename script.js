const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');
let tasks = document.querySelectorAll('.task');

//Referecia: https://www.w3schools.com/howto/howto_html_clear_input.asp

function addTask() {
  if (taskInput.value === '') {
    console.log('empty');
  } else {
    const liCreate = document.createElement('li');
    liCreate.innerText = taskInput.value;
    liCreate.classList.add('lastTaskCreated');
    liCreate.classList.add('task');
    taskList.appendChild(liCreate);
    taskInput.value = '';
    taskList.lastChild.previousSibling.classList.remove('lastTaskCreated');
    tasks = document.querySelectorAll('.task');
    clickTask();
  }
}

button.addEventListener('click', addTask);

function selectTask(event) {
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
  }
}

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
