const createList = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const apagaTudo = document.querySelector('#apaga-tudo');
const apagaFinalizados = document.querySelector('#remover-finalizados');

function selectItem (event) {
  const itensTarefa = document.querySelectorAll('.tarefa');
  for (const item of itensTarefa) {
    item.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function completeItem (event) {
  if (event.target.classList.contains('completed')) { // .contains estudada a partir da documentação https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function createItem() {
  const textoTarefa = input.value;
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = textoTarefa;
  novaTarefa.classList.add('tarefa');
  novaTarefa.addEventListener('click', selectItem);
  novaTarefa.addEventListener('dblclick', completeItem);
  lista.appendChild(novaTarefa);
  input.value = '';
}

function eraseAll() {
  const itensTarefa = document.querySelectorAll('.tarefa');
  for (const item of itensTarefa) {
    lista.removeChild(item);
  }
}

function eraseCompleted() {
  const itensFinalizados = document.querySelectorAll('.completed');
  for (const item of itensFinalizados) {
    lista.removeChild(item);
  }
}


createList.addEventListener('click', createItem);

apagaTudo.addEventListener('click', eraseAll);

apagaFinalizados.addEventListener('click', eraseCompleted);
