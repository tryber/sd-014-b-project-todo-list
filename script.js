const createTodoButton = document.getElementById('criar-tarefa');
const todoList = document.getElementById('lista-tarefas');
const inputTodo = document.getElementById('texto-tarefa');

function selectItem(event) {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function completeTask(event) {
  const classList = event.target.classList;
  if (classList.contains('completed')) {
    classList.remove('completed');
  } else {
    classList.add('completed');
  }
}

createTodoButton.addEventListener('click', () => {
  const item = document.createElement('li');
  item.innerText = inputTodo.value;
  item.className = 'item';
  item.addEventListener('click', selectItem);
  item.addEventListener('dblclick', completeTask);
  todoList.appendChild(item);
  inputTodo.value = '';
});
