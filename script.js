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
  const tarefas = document.getElementsByClassName('tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
listaTarefas.addEventListener('click', corDeFundoItemLista);

function completedTasks(event) {
  if (event.target.classList === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
listaTarefas.addEventListener('dblclick', completedTasks);
