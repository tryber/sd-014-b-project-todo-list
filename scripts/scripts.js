// [Requisito 7]
function markText(text) {
  const item = text;
  item.addEventListener('click', () => {
    if (item.style.backgroundColor === 'rgb(255, 255, 255)') {
      item.style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      item.style.backgroundColor = 'rgb(255, 255, 255)';
    }
  });
}

// [Requisito 5]
function addTaskToList() {
  const addTask = document.querySelector('#criar-tarefa');
  addTask.addEventListener('click', () => {
    const task = document.querySelector('#texto-tarefa');
    const item = document.createElement('li');
    markText(item);
    item.innerHTML = task.value;
    task.value = '';
    document.querySelector('#lista-tarefas').appendChild(item);
  });
}

addTaskToList();
