const list = document.querySelector('#lista-tarefas');
const addList = document.querySelector('#criar-tarefa');
const addInput = document.querySelector('#texto-tarefa');

const createTask = () => {
  const itemList = document.createElement('li');
  itemList.innerText = addInput.value;
  itemList.style.fontSize = '30px';
  itemList.classList.add('tasksToDo');
  if (addInput.value !== '') list.appendChild(itemList);
  addInput.value = '';
};

const addTask = () => {
  addList.addEventListener('click', createTask);
};

const bcgrdColor = (event) => {
  const tasks = document.getElementsByClassName('tasksToDo');
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
};
list.addEventListener('click', bcgrdColor);

const lineThrough = (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
};
list.addEventListener('dblclick', lineThrough);

list.addEventListener('mousedown', (e) => { e.preventDefault(); }, false);

createTask();
addTask();
