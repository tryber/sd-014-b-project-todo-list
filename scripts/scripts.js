// [Requisito 7]
function markText(event) {
  const task = event.target;
  document.querySelectorAll('li').forEach((element) => {
    const li = element;
    li.style.backgroundColor = 'white';
  });
  task.style.backgroundColor = 'rgb(128, 128, 128)';
}

// [Requisito 8]
function taskDone(event) {
  const task = event.target;
  if (task.classList.contains('completed')) {
    task.classList.remove('completed');
  } else {
    task.classList.add('completed');
  }
}

// [Requisito 5]
function addTaskToList() {
  const addTask = document.querySelector('#criar-tarefa');
  addTask.addEventListener('click', () => {
    const task = document.querySelector('#texto-tarefa');
    const item = document.createElement('li');
    item.addEventListener('dblclick', taskDone);
    item.addEventListener('click', markText);
    item.innerHTML = task.value;
    task.value = '';
    document.querySelector('#lista-tarefas').appendChild(item);
  });
}

addTaskToList();
