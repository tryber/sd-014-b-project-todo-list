// 5 e 6
const findList = document.querySelector('#lista-tarefas');
const button = document.querySelector('#criar-tarefa');
const inputValue = document.querySelector('#texto-tarefa');
// const finished = document.querySelectorAll('.completed');
const deleteAll = document.querySelector('#apaga-tudo');
// const liList = document.getElementsByClassName('li-list');
const deleteFinished = document.querySelector('#remover-finalizados');
const salvarTarefas = document.querySelector('#salvar-tarefas');
const moverCima = document.querySelector('#mover-cima');
const moverBaixo = document.querySelector('#mover-baixo');
const removerSelecionado = document.querySelector('#remover-selecionado');

// 7 e 8.

function addItemInList() {
  const createLi = document.createElement('li');
  createLi.innerText = inputValue.value;
  createLi.classList.add('li-list');
  findList.appendChild(createLi);
  inputValue.value = '';
}
button.addEventListener('click', addItemInList);

function changeToGray(event) {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    selected.classList.remove('selected');
  }
  const element = event;
  element.target.classList.add('selected');
}

findList.addEventListener('click', changeToGray);

// 9.
function lineCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

findList.addEventListener('dblclick', lineCompleted);

// 10.

function clearList() {
  while (findList.hasChildNodes()) {
    findList.removeChild(findList.firstChild);
  }
}

deleteAll.addEventListener('click', clearList);

// 11.

function clearFinished() {
  const completed = document.querySelectorAll('.completed');
  completed.forEach((element) => element.parentNode.removeChild(element));
}

deleteFinished.addEventListener('click', clearFinished);

// 12.

function saveList() {
  localStorage.setItem('listaDeTarefas', findList.innerHTML);
}

salvarTarefas.addEventListener('click', saveList);

window.onload = () => {
  findList.innerHTML = localStorage.getItem('listaDeTarefas');
};

// 13.

function moveUp() {
  const selected = document.querySelector('.selected');
  if (findList.firstChild !== selected && selected !== null) {
    findList.insertBefore(selected, selected.previousSibling);
  } else {
    alert('Retorno inválido!');
  }
}

moverCima.addEventListener('click', moveUp);

function moveDown() {
  const selected = document.querySelector('.selected');
  if (findList.lastChild !== selected && selected !== null) {
    findList.insertBefore(selected.nextSibling, selected);
  } else {
    alert('Retorno inválido!');
  }
}

moverBaixo.addEventListener('click', moveDown);

// 14.

function removeSelected() {
  const selected = document.querySelector('.selected');
  if (findList.contains(selected)) {
    findList.removeChild(selected);
  }
}

removerSelecionado.addEventListener('click', removeSelected);
