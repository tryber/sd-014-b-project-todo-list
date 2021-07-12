function createListItem(text) {
  const listItem = document.createElement('li');
  // listItem.className = '';
  listItem.innerText = text;
  return listItem;
}
function textListItem() {
  const currentInput = document.getElementById('texto-tarefa').value;
  return currentInput;
}

function addIdStyle() {
  const listedItem = document.querySelectorAll('li');
  if (this.id === 'selected') {
    this.removeAttribute('id');
  } else {
    for (const indexIn of listedItem) { indexIn.id = ''; }
    this.setAttribute('id', 'selected');
  }
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

function removeSeleted(){
  const selectedItem = document.getElementById('selected');
  selectedItem.remove();
}
function seletedButton() {
  const removeSelecButton = document.getElementById('remover-selecionado');
  removeSelecButton.addEventListener('click', removeSeleted);
}

window.onload = () => {
  addListItem();
  eraseButton();
  completedButton();
  seletedButton();
};
