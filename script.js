let botaoCriarTarefa = document.getElementById('criar-tarefa');
let inputTextoTarefa = document.getElementById('texto-tarefa');
let listaTarefas = document.getElementById('lista-tarefas');
function addTarefaLista() {
  let tarefa = document.createElement('li');
  listaTarefas.appendChild(tarefa);
  tarefa.innerText = inputTextoTarefa.value;
  inputTextoTarefa.value = '';
}
botaoCriarTarefa.addEventListener('click', addTarefaLista);
