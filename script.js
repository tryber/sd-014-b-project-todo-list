const list = document.querySelector('#lista-tarefas');
const addList = document.querySelector('#criar-tarefa');
const addInput = document.querySelector('#texto-tarefa');

const createTask = () => {
  const itemList = document.createElement('li');
  itemList.innerText = addInput.value;
  itemList.style.fontSize = '17px';
  if (addInput.value !== '') list.appendChild(itemList);
  addInput.value = '';
};

const addTask = () => {
  addList.addEventListener('click', createTask);
};

createTask();
addTask();
