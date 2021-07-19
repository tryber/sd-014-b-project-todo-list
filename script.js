function createListItem(text) {
  const listItem = document.createElement('li');
  listItem.innerText = text;
  return listItem;
}
function textListItem() {
  const currentInput = document.getElementById('texto-tarefa').value;
  return currentInput;
}

function addIdStyle() {
  const listedItem = document.querySelectorAll('li');
  // if (this.id === 'selected') {
  //   this.removeAttribute('id');
  // } else {
    for (const indexIn of listedItem) { indexIn.id = ''; }
    this.setAttribute('id', 'selected');
  // }
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
    const ordList = document.getElementById('lista-tarefas');
    const currentInput = document.getElementById('texto-tarefa');
    const currentItem = createListItem(textListItem());
    currentItem.addEventListener('click', addIdStyle);
    currentItem.addEventListener('dblclick', addClassStyle);
    ordList.appendChild(currentItem);
    currentInput.value = '';
  });
}

function eraseList() {
  const ordList = document.getElementById('lista-tarefas');
  ordList.innerHTML = '';
}
function eraseButton() {
  const eraseAll = document.getElementById('apaga-tudo');
  eraseAll.addEventListener('click', eraseList);
}

function removeCompleted(){
  const completedItens = document.querySelectorAll('.completed');
  for (let index of completedItens) {
    index.remove();
  }
}
function completedButton() {
  const removeCompButton = document.getElementById('remover-finalizados');
  removeCompButton.addEventListener('click', removeCompleted);
}

function removeSelected(){
  const selectedItem = document.getElementById('selected');
  if (selectedItem) {
    selectedItem.remove();
  }
}
function selectedButton() {
  const removeSelecButton = document.getElementById('remover-selecionado');
  removeSelecButton.addEventListener('click', removeSelected);
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
function buttonUp() {
  const upButton = document.getElementById('mover-cima');
  upButton.addEventListener('click', moveUp);
}

function moveDown() {
  const selectedItem = document.getElementById('selected');
  const list = document.querySelector('ol');
  const itensList = document.querySelectorAll('li');
  if (selectedItem && selectedItem !== itensList[itensList.length - 1]) {
    list.insertBefore(selectedItem.nextSibling, selectedItem);
  }
}
function buttonDown() {
  const upButton = document.getElementById('mover-baixo');
  upButton.addEventListener('click', moveDown);
}

function saveListButton() {
  const saveButton = document.getElementById('salvar-tarefas');
  saveButton.addEventListener('click', ()=> {
    let listArray = [];
    const ordList = document.getElementById('lista-tarefas');
      listArray.push(ordList.innerHTML);
    localStorage.setItem('listItens_toDoList', JSON.stringify(listArray));
  })
}

function loadListOnLocal() {
  if (localStorage.getItem('listItens_toDoList')) {
    const savedItens = JSON.parse(localStorage.getItem('listItens_toDoList'));
    const ordList = document.getElementById('lista-tarefas');
    ordList.innerHTML = savedItens;
    const itensList = document.querySelectorAll('li');
    for (let index of itensList) {
      index.addEventListener('click', addIdStyle);
      index.addEventListener('dblclick', addClassStyle);
    }
  }
}

window.onload = () => {
  loadListOnLocal();
  addListItem();
  eraseButton();
  completedButton();
  selectedButton();
  buttonUp();
  buttonDown();
  saveListButton();
};
