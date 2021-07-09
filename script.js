const createTodoButton = document.getElementById('criar-tarefa');
const todoList = document.getElementById('lista-tarefas');
const inputTodo = document.getElementById('texto-tarefa');

createTodoButton.addEventListener('click', () => {
  const item = document.createElement('li');
  item.innerText = inputTodo.value;
  item.className = 'item';
  todoList.appendChild(item);
  inputTodo.value = '';
});
