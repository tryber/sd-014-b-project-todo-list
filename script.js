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

const list = document.querySelector('#lista-tarefas');
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

createTask();
clearTasks();
