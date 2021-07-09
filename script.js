const createList = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');

createList.addEventListener('click', function () {
  const textoTarefa = input.value;
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = textoTarefa;
  novaTarefa.classList.add('tarefa');
  novaTarefa.addEventListener('click', selectItem);
  novaTarefa.addEventListener('dblclick', completeItem);
  lista.appendChild(novaTarefa);
  input.value = '';
});

function selectItem (event) {
  const itensTarefa = document.querySelectorAll('.tarefa');
  for (let item of itensTarefa) {
    item.classList.remove('selected');
  }
event.target.classList.add('selected');
}

function completeItem (event) {
  if (event.target.classList.contains('completed')) { // .contains estudada a partir da documentação https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList
    event.target.classList.remove('completed')
  } else {
    event.target.classList.add('completed');
  }
}

