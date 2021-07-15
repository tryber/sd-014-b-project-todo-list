const createList = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const apagaTudo = document.querySelector('#apaga-tudo');
const apagaFinalizados = document.querySelector('#remover-finalizados');
const apagaSelecionado = document.querySelector('#remover-selecionado');
const salvarTarefas = document.querySelector('#salvar-tarefas');
const moverCima = document.querySelector('#mover-cima');
const moverBaixo = document.querySelector('#mover-baixo');

function loadTasks() {
  lista.innerHTML = localStorage.getItem('lista');
  const itensTarefa = document.querySelectorAll('.tarefa');
  for (const tarefa of itensTarefa) {
  tarefa.addEventListener('click', selectItem);
  tarefa.addEventListener('dblclick', completeItem);
  }
}

window.addEventListener('load', loadTasks);

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
  if (itemSelecionado.previousSibling === null) {
    return
  }
  lista.insertBefore(itemSelecionado, itemSelecionado.previousSibling);
}
// Gastei um pouco de tempo, mas descobri a função insertBefore() e previousSibling que funcionam muito bem um com o outro, Source: https://www.w3schools.com/jsref/met_node_insertbefore.asp e https://www.w3schools.com/jsref/prop_node_previoussibling.asp

function moveDown() {
  const itemSelecionado = document.querySelector('.selected');
  const proxElemento = itemSelecionado.nextElementSibling;
  const espaco = document.createDocumentFragment();
      espaco.appendChild(proxElemento);
      lista.insertBefore(espaco, itemSelecionado);
}

// Aqui eu gastei mais tempo ainda, como inserir diretamente estava dando muito erro ou não funcionava direito, tive que criar um pedaço html blankg Source: https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment

createList.addEventListener('click', createItem);

apagaTudo.addEventListener('click', eraseAll);

apagaFinalizados.addEventListener('click', eraseCompleted);

apagaSelecionado.addEventListener('click', eraseSelected);

salvarTarefas.addEventListener('click', saveTasks);

moverCima.addEventListener('click', moveUp);

moverBaixo.addEventListener('click', moveDown);
