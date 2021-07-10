// [Requisito 5]
function addTaskToList() {
  const addTask = document.querySelector('#criar-tarefa');
  addTask.addEventListener('click', () => {
    const task = document.querySelector('#texto-tarefa').value;
    const item = document.createElement('li');
    item.innerHTML = task;
    document.querySelector('#lista-tarefas').appendChild(item);
  });
}

addTaskToList();
