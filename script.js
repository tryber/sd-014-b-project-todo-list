const botaoCriarTarefa = document.getElementById('criar-tarefa');
const inputTextoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
function addTarefaLista() {
  const tarefa = document.createElement('li');
  listaTarefas.appendChild(tarefa);
  tarefa.innerText = inputTextoTarefa.value;
  tarefa.className = 'tarefa';
  inputTextoTarefa.value = '';
}
botaoCriarTarefa.addEventListener('click', addTarefaLista);

function corDeFundoItemLista(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
listaTarefas.addEventListener('click', corDeFundoItemLista);
