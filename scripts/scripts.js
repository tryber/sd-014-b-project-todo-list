// [Requisito 5]
function addTaskToList() {
  const addTask = document.querySelector('#criar-tarefa');
  addTask.addEventListener('click', () => {
    const task = document.querySelector('#texto-tarefa');
    const item = document.createElement('li');
    item.innerHTML = task.value;
    task.value = '';
    document.querySelector('#lista-tarefas').appendChild(item);
  });
}

// [Requisito 6]

addTaskToList();
