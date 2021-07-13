const addButton = document.querySelector('#criar-tarefa');
const eraseButton = document.querySelector('#apaga-tudo');
const eraseCompletedTaskButton = document.querySelector('#remover-finalizados');
const killButton = document.querySelector('#remover-selecionado');
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
  const selectedItem = document.querySelectorAll('.tarefa');
  for (let index = 0; index <= selectedItem.length - 1; index += 1) {
    selectedItem[index].addEventListener('dblclick', markAsCompleted);
    selectedItem[index].addEventListener('click', changeColor);
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
  const selectedItem = document.querySelectorAll('.tarefa');
  for (let index = 0; index <= selectedItem.length - 1; index += 1) {
    list.removeChild(selectedItem[index]);
  }
}

function removeListItem() {
  const selectedItem = document.querySelectorAll('.tarefa');
  for (index = 0; index <= selectedItem.length - 1; index += 1) {
    if (selectedItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      const getlist = document.querySelector('#lista-tarefas');
      getlist.removeChild(selectedItem[index]);
    }
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
killButton.addEventListener('click', removeListItem)
