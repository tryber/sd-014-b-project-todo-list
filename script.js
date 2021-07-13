const addButton = document.querySelector('#criar-tarefa');
const eraseButton = document.querySelector('#apaga-tudo');
const eraseCompletedTaskButton = document.querySelector('#remover-finalizados');
const list = document.querySelector('#lista-tarefas');

function changeColor(item) {
  const selectedItem = document.querySelectorAll('.tarefa');
  for (let index = 0; index <= selectedItem.length - 1; index += 1) {
    selectedItem[index].style.backgroundColor = '';
  }
  item.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function markAsCompleted(item) {
  if (item.target.className === 'tarefa completed') {
    item.target.classList.remove('completed');
  } else {
    item.target.classList.add('completed');
  }
}

function selectItem() {
  const getItem = document.querySelectorAll('.tarefa');
  for (let index = 0; index <= getItem.length - 1; index += 1) {
    getItem[index].addEventListener('dblclick', markAsCompleted);
    getItem[index].addEventListener('click', changeColor);
  }
}

function addListItem() {
  const input = document.querySelector('#texto-tarefa');
  const listItem = document.createElement('li');
  listItem.innerText = input.value;
  listItem.className = 'tarefa';
  list.appendChild(listItem);
  input.value = '';
  selectItem();
}

function eraseList() {
  const getListItem = document.querySelectorAll('.tarefa');
  for (let index = 0; index <= getListItem.length - 1; index += 1) {
    list.removeChild(getListItem[index]);
  }
}

function removeCompleted() {
  const getCompletedItem = document.querySelectorAll('.completed');
  for (let index = 0; index <= getCompletedItem.length - 1; index += 1) {
    list.removeChild(getCompletedItem[index]);
  }
}

addButton.addEventListener('click', addListItem);
eraseButton.addEventListener('click', eraseList);
eraseCompletedTaskButton.addEventListener('click', removeCompleted);
