const createList = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');

createList.addEventListener('click', function () {
  let textoTarefa = input.value;
  let novaTarefa = document.createElement('li');
  novaTarefa.innerText = textoTarefa;
  novaTarefa.classList.add('tarefa');
  lista.appendChild(novaTarefa);
  input.value = '';
});


