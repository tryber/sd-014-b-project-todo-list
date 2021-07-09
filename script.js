const createTodoButton = document.getElementById('criar-tarefa');
const todoList = document.getElementById('lista-tarefas');
const inputTodo = document.getElementById('texto-tarefa');

function selectItem(event) {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }

  event.target.classList.add('selected');
}

createTodoButton.addEventListener('click', () => {
  const item = document.createElement('li');
  item.innerText = inputTodo.value;
  item.className = 'item';
  item.addEventListener('click', selectItem);
  todoList.appendChild(item);
  inputTodo.value = '';
});
