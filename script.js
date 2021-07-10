const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const clearAllButton = document.querySelector('#apaga-tudo');

function createTask() {
  const createLi = document.createElement('li');
  createLi.setAttribute('class', 'task');
  taskList.appendChild(createLi);
  createLi.innerText = input.value;
  input.value = '';
}

function selectTask(event) {
  const allTasks = document.querySelectorAll('.task');
  for (let i = 0; i < allTasks.length; i += 1) {
    allTasks[i].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

// function markCompleted(event) {
//   if (event.target.classList.contains('completed')) {
//     event.target.classList.remove('completed');
//   } else {
//     event.target.classList.add('completed');
//   }
// }

function clearAll() {
  taskList.innerHTML = '';
}

taskList.addEventListener('click', selectTask);

button.addEventListener('click', createTask);

clearAllButton.addEventListener('click', clearAll);

// taskList.addEventListener('dbclick', markCompleted);
