const createTask = document.querySelector('#criar-tarefa');
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
    const listItem = document.querySelectorAll('li');
  for (let key = 0; key < listItem.length; key += 1) {
    listItem[key].style.backgroundColor = 'white';
  }
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  });

  listTask.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });

  const clear = document.querySelector('#apaga-tudo');
clear.addEventListener('click', () => {
  listTask.parentNode.removeChild(listTask);
});

const clearCompleted = document.querySelector('#remover-finalizados');
clearCompleted.addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  for (let key = 0; key < completed.length; key += 1) {
    completed[key].remove();
  }
});