const input = document.querySelector('#texto-tarefa').value;
const list = document.querySelector('#lista-tarefas');

function createTask() {
  const input = document.querySelector('#texto-tarefa').value;
  const taskList = document.querySelector('#lista-tarefas');
  const task = document.createElement('li');
  task.innerHTML = input;
  task.style.backgroundColor = '';
  if (input !== '') {
    taskList.appendChild(task);
  }
  document.querySelector('#texto-tarefa').value = '';
}

function changeColor(event) {
  const evento = event;
  const listItem = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      listItem[index].style.backgroundColor = '';
    }
    evento.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

list.addEventListener('click', changeColor);

function finishTask(event) {
  const evento = event;
  evento.target.classList.toggle('completed');
}

list.addEventListener('dblclick', finishTask);
list.addEventListener('mousedown', (e) => { e.preventDefault(); }, false);

function clearTasks() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

const completedTasks = list.childNodes;

function removeCompletedTasks() {
  const finalIndex = completedTasks.length;
  for (let index = finalIndex - 1; index >= 0; index -= 1) {
    if (completedTasks[index].classList.contains('completed')) {
      list.removeChild(completedTasks[index]);
    }
  }
}

const removeCompleted = document.getElementById('remover-finalizados');
removeCompleted.addEventListener('click', removeCompletedTasks);

function saveTasks() {
  const oldList = document.querySelectorAll('#lista-tarefas li');
  const key = 'name';
  let index = 0;
  while (index < oldList.length) {
    localStorage.setItem(key + index, oldList[index].outerHTML);
    index += 1;
  }
}

function initialRenderization() {
  const newList = document.querySelectorAll('ol');
  if (localStorage.length !== 0) {
    for (let index = 0; index < localStorage.length; index += 1) {
      console.log(localStorage.getItem(`name${index}`));
      newList.innerHTML += localStorage.getItem(`name${index}`);
    }
  }
}

clearTasks();
createTask();

window.onload = initialRenderization;

// const saveButton = document.getElementById('salvar-tarefas');
// saveButton.addEventListener('click', addTaskToLocalStorage);

const saveButton = document.getElementById('salvar-tarefas');
saveButton.addEventListener('click', saveTasks);
