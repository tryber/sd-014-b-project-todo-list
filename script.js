const listaOrdenada = document.querySelector('#lista-tarefas');
const botaoTarefas = document.querySelector('#criar-tarefa');
const inputTarefas = document.querySelector('#texto-tarefa');

// Requisitos #5 e #6
// Source: https://www.w3schools.com/jsref/prop_text_value.asp
function criarItemTarefa() {
  const criarItem = document.createElement('li');
  const textoItem = inputTarefas.value;

  criarItem.innerHTML = textoItem;
  criarItem.className = 'li-tarefas';
  listaOrdenada.appendChild(criarItem);
  inputTarefas.value = '';
}
botaoTarefas.addEventListener('click', criarItemTarefa);

// Requisito #7
function selecionaItem() {
  listaOrdenada.addEventListener('click', function (event) {
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  });
}
selecionaItem();

// Requisito #8
const arrayLi = document.getElementsByClassName('li-tarefas');

function removeSelecao(event) {
  for (let index = 0; index < arrayLi.length; index += 1) {
    arrayLi[index].style.backgroundColor = '';
  } event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
listaOrdenada.addEventListener('click', removeSelecao);

// Requisito #9
function tachaItem(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
listaOrdenada.addEventListener('dblclick', tachaItem);

// Requisito #10
// Source: https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
const apagaTudo = document.getElementById('apaga-tudo');

function apagaTarefas() {
  listaOrdenada.textContent = '';
}
apagaTudo.addEventListener('click', apagaTarefas);

// Requisito #11
const removeTarefa = document.getElementById('remover-finalizados');

function removerTarefas() {
  const arrayLi = document.querySelectorAll('.li-tarefas');

  for (let index = 0; index < arrayLi.length; index += 1) {
    if (arrayLi[index].classList.contains('completed')) {
      arrayLi[index].remove();
    }
  }
}
removeTarefa.addEventListener('click', removerTarefas);
