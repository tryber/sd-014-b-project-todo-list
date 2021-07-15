const createList = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const apagaTudo = document.querySelector('#apaga-tudo');
const apagaFinalizados = document.querySelector('#remover-finalizados');
const apagaSelecionado = document.querySelector('#remover-selecionado');
const salvarTarefas = document.querySelector('#salvar-tarefas');
const moverCima = document.querySelector('#mover-cima');
const moverBaixo = document.querySelector('#mover-baixo');

lista.innerHTML = localStorage.getItem('lista');

function selectItem (event) {
  const itensTarefa = document.querySelectorAll('.tarefa');
  if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected');
  } else {
    for (const item of itensTarefa) {
      item.classList.remove('selected');
    }
    event.target.classList.add('selected');
  }
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

function eraseSelected() {
  const itemSelecionado = document.querySelector('.selected');
  lista.removeChild(itemSelecionado);
}

function saveTasks() {
  localStorage.setItem('lista', lista.innerHTML);
}

function moveUp() {
  const itemSelecionado = document.querySelector('.selected');
  lista.insertBefore(itemSelecionado, itemSelecionado.previousSibling);
}
// Gastei um pouco de tempo, mas descobri a função insertBefore() e previousSibling que funcionam muito bem um com o outro, Source: https://www.w3schools.com/jsref/met_node_insertbefore.asp e https://www.w3schools.com/jsref/prop_node_previoussibling.asp

function moveDown() {
  const itemSelecionado = document.querySelector('.selected');
  const newItem = document.createElement('li');
  newItem.innerText = itemSelecionado.innerText;
  newItem.classList.add('tarefa');
  newItem.classList.add('selected')
  newItem.addEventListener('click', selectItem);
  newItem.addEventListener('dblclick', completeItem);
  itemSelecionado.nextSibling.insertAdjacentElement('afterend', newItem);
  lista.removeChild(itemSelecionado);
}

// Aqui eu gastei mais tempo ainda, acredito que tem uma forma mais simples de fazer, mas depois de quebrar a cabeça foi a forma que encontrei ;c,  Source: https://www.w3docs.com/snippets/javascript/how-to-insert-an-element-after-another-element-in-javascript.html

createList.addEventListener('click', createItem);

apagaTudo.addEventListener('click', eraseAll);

apagaFinalizados.addEventListener('click', eraseCompleted);

apagaSelecionado.addEventListener('click', eraseSelected);

salvarTarefas.addEventListener('click', saveTasks);

moverCima.addEventListener('click', moveUp);

moverBaixo.addEventListener('click', moveDown);
