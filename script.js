let listaTarefas = document.querySelector('#lista-tarefas');
let botao = document.querySelector('#criar-tarefa');
let tarefa = document.querySelector('#texto-tarefa');

function adicionaTarefa () {
  let aux = document.createElement('li');
  aux.innerText = tarefa.value;
  listaTarefas.appendChild(aux);
  tarefa.value = '';
}
