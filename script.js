const createTask = document.querySelector('#criar-tarefa');

createTask.addEventListener('click', () => {

  const listTask = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const listItem = document.createElement('li');

  if (input.value === '') alert('Item vazio, adicione uma tarefa');
  listItem.innerText = input.value;
  listTask.appendChild(listItem);

  input.value = '';
});