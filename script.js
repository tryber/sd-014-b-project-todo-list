const list = document.querySelector('#lista-tarefas');
const addList = document.querySelector('#criar-tarefa');
const addInput = document.querySelector('#texto-tarefa');
const clearButton = document.querySelector('#apaga-tudo');

// Cria os elementos da lista de tarefas!
const createTask = () => {
  const itemList = document.createElement('li');
  itemList.innerText = addInput.value;
  itemList.style.fontSize = '30px';
  itemList.classList.add('tasksToDo');
  if (addInput.value !== '') list.appendChild(itemList);
  addInput.value = '';
};
addList.addEventListener('click', createTask);

// Adiciona o background cinza ao clicar no elemento!
const bcgrdColor = (event) => {
  const tasks = document.getElementsByClassName('tasksToDo');
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
};
list.addEventListener('click', bcgrdColor);

// Risca o elemento quando ele é clicado duas vezes!
const lineThrough = (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
};
list.addEventListener('dblclick', lineThrough);

// Apaga todas as tarefas!
const clear = () => {
  const itemList = document.querySelectorAll('.tasksToDo');
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};
clearButton.addEventListener('click', clear);

// Impede seleção dentro da área da lista - por motivos estéticos
list.addEventListener('mousedown', (e) => { e.preventDefault(); }, false);
