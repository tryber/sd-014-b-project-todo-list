let textoTarefa = document.querySelector('#texto-tarefa');
let btnCriarTarefa = document.querySelector('#criar-tarefa');
let listaTarefas = document.querySelector('#lista-tarefas');
let tarefa = '';

function limparInput() {
  textoTarefa.value = '';
}

function criarTarefa() {
  tarefa = document.createElement('li');
  tarefa.innerText = textoTarefa.value;
  listaTarefas.appendChild(tarefa);
  limparInput();
}

btnCriarTarefa.addEventListener('click', criarTarefa);
