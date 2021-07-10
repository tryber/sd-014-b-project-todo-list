function createTask() {
  const input = document.querySelector('#texto-tarefa').value;
  const taskList = document.querySelector('#lista-tarefas');
  const task = document.createElement('li');
  task.innerHTML = input;
  task.style.backgroundColor = '';
  if (task !== '') {
    taskList.appendChild(task);
  }
  document.querySelector('#texto-tarefa').value = '';
}

const list = document.querySelector('#lista-tarefas');

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
  const listItem = document.querySelectorAll('#lista-tarefas li');
  const evento = event;
  // for (let index = 0; index < listItem.length; index += 1) {
    evento.target.classList.toggle('completed');
  // }
}

list.addEventListener('dblclick', finishTask);
list.addEventListener('mousedown', (e) => { e.preventDefault(); }, false);
