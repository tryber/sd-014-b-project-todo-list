function createTask() {
  const input = document.querySelector('#texto-tarefa').value;
  const taskList = document.querySelector('#lista-tarefas');
  const task = document.createElement('li');
  task.innerHTML = input;
  task.classList.add('selected');
  task.style.backgroundColor = 'white';
  if (task !== '') {
    taskList.appendChild(task);
  }
  document.querySelector('#texto-tarefa').value = '';
}

const list = document.querySelector('#lista-tarefas');

function changeColor(event) {
  const evento = event;
  const taskItem = document.querySelectorAll('.selected');
  for (let index = 0; index < taskItem.length; index += 1) {
    evento.target.style.backgroundColor = 'grey';
  }
}
list.addEventListener('click', changeColor);
