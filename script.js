const createList = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');

createList.addEventListener('click', function () {
  const textoTarefa = input.value;
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = textoTarefa;
  novaTarefa.classList.add('tarefa');
  novaTarefa.addEventListener('click', selectItem);
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
