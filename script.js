const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const taskListItem = document.querySelector('.item')
const clearAllTasks = document.querySelector('#apaga-tudo');
const clearCompleted = document.querySelector('#remover-finalizados');
const saveTasks = document.querySelector('#salvar-tarefas');
const clearSelected = document.querySelector('#remover-selecionado');

button.addEventListener('click', () => {
  const inputValue = document.querySelector('input');
  const listItem = document.createElement('li');
  const list = document.querySelector('#lista-tarefas');
  
  listItem.classList.add('item');
  if (inputValue.value == false) {
    alert('Insira uma tarefa, por favor.');
  } else {
    listItem.innerText = inputValue.value;
    list.appendChild(listItem);
  }
  inputValue.value = '';

  // Requisito 07 e 08
  listItem.addEventListener('click', (event) => {
    for (const value of taskList.children) {
      if (value.classList.contains('selected')) {
        value.classList.remove('selected');
      }
      event.target.classList.add('selected');
    }
  });
  // Requisito 09
  listItem.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
  // Requisito 11
  clearCompleted.addEventListener('click', () => {
    for (let tasks of taskList.children) {
      if (tasks.classList.contains('completed')) {
        tasks.remove();
      }
    }
});
});

// Requisito 10
clearAllTasks.addEventListener('click', () => {
  taskList.innerHTML = '';
});


// Requisito 14
clearSelected.addEventListener('click', () => {
  for (const task of taskList.children) {
    if (task.classList.contains('selected')) {
      task.remove();
    }
  }
});
