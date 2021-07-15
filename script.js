const createTask = document.querySelector('#criar-tarefa');
const listItem = document.querySelectorAll('li');
const listTask = document.querySelector('#lista-tarefas');

createTask.addEventListener('click', () => {

    const input = document.querySelector('#texto-tarefa'); // <input>
    const createListItem = document.createElement('li');

  if (input.value === '') alert('Item vazio, adicione uma tarefa');
  createListItem.innerText = input.value;
  listTask.appendChild(createListItem);

  input.value = '';
});

listTask.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  });