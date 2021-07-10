const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const clearAllButton = document.querySelector('#apaga-tudo');
const allTasks = document.getElementsByClassName('task');
const clearFinished = document.querySelector('#remover-finalizados');

function createTask() {
  const createLi = document.createElement('li');
  createLi.setAttribute('class', 'task');
  taskList.appendChild(createLi);
  createLi.innerText = input.value;
  input.value = '';
}

function selectTask(event) {
  for (let i = 0; i < allTasks.length; i += 1) {
    allTasks[i].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function markCompleted(event) {
  event.target.classList.toggle('completed');
}

function clearAll() {
  taskList.innerHTML = '';
}

function clearDone() {
  const completedLis = document.getElementsByClassName('completed');
  console.log(completedLis);
  for (let i = 0; i < completedLis.length; i += 0) {
    completedLis[i].remove();
  }
}

button.addEventListener('click', createTask);

taskList.addEventListener('click', selectTask);

clearAllButton.addEventListener('click', clearAll);

taskList.addEventListener('dblclick', markCompleted);

clearFinished.addEventListener('click', clearDone);
