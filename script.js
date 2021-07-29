const ordList = document.getElementById('lista-tarefas');
const textInput = document.getElementById('texto-tarefa');
const upButton = document.getElementById('mover-cima');
const downButton = document.getElementById('mover-baixo');
const removeSelecButton = document.getElementById('remover-selecionado');
const removeCompButton = document.getElementById('remover-finalizados');
const eraseAll = document.getElementById('apaga-tudo');

function createListItem() {
  const text = textInput.value;
  const listItem = document.createElement('li');
  listItem.innerText = text;
  return listItem;
}

function addIdStyle() {
  const listedItem = document.querySelectorAll('li');
  Array.from(listedItem).reduce((acc, cur) => {
    const ind = cur;
    ind.removeAttribute('id', 'selected');
    return undefined;
  }, 0);
  this.setAttribute('id', 'selected');
}

function addClassStyle() {
  if (this.className === 'completed') {
    this.classList.remove('completed');
  } else {
    this.classList.add('completed');
  }
}

function addListItem() {
  const addItem = document.getElementById('criar-tarefa');
  addItem.addEventListener('click', () => {
    const currentItem = createListItem();
    currentItem.addEventListener('click', addIdStyle);
    currentItem.addEventListener('dblclick', addClassStyle);
    ordList.appendChild(currentItem);
    textInput.value = '';
  });
}

function removeCompleted() {
  const completedItens = document.querySelectorAll('.completed');
  Array.from(completedItens).reduce((acc, cur) => {
    const index = cur;
    index.remove();
    return Error;
  }, 0);
}

function removeSelected() {
  const selectedItem = document.getElementById('selected');
  if (selectedItem) {
    selectedItem.remove();
  }
}

// Após pesquisar sobre "mover posição elementos HTML", encontrei uma dica no Stackoverflow sobre o "insertBefore()", analizando sua documentação pude concluir que seu uso seria útil para este requisito.
function moveUp() {
  const selectedItem = document.getElementById('selected');
  const list = document.querySelector('ol');
  const itensList = document.querySelectorAll('li');
  if (selectedItem && selectedItem !== itensList[0]) {
    list.insertBefore(selectedItem, selectedItem.previousSibling);
  }
}

function moveDown() {
  const selectedItem = document.getElementById('selected');
  const list = document.querySelector('ol');
  const itensList = document.querySelectorAll('li');
  if (selectedItem && selectedItem !== itensList[itensList.length - 1]) {
    list.insertBefore(selectedItem.nextSibling, selectedItem);
  }
}

function saveListButton() {
  const saveButton = document.getElementById('salvar-tarefas');
  saveButton.addEventListener('click', () => {
    const listArray = [];
    listArray.push(ordList.innerHTML);
    localStorage.setItem('listItens_toDoList', JSON.stringify(listArray));
  });
}

function loadListOnLocal() {
  if (localStorage.getItem('listItens_toDoList')) {
    const savedItens = JSON.parse(localStorage.getItem('listItens_toDoList'));
    ordList.innerHTML = savedItens;
    const itensList = document.querySelectorAll('li');
    Array.from(itensList).reduce((acc, cur) => {
      const index = cur;
      index.addEventListener('click', addIdStyle);
      index.addEventListener('dblclick', addClassStyle);
      return undefined;
    }, 0);
  }
}

window.onload = () => {
  upButton.addEventListener('click', moveUp);
  downButton.addEventListener('click', moveDown);
  removeSelecButton.addEventListener('click', removeSelected);
  removeCompButton.addEventListener('click', removeCompleted);
  eraseAll.addEventListener('click', () => {
    ordList.innerHTML = '';
  });

  loadListOnLocal();
  addListItem();
  saveListButton();
};
