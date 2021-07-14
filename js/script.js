function adicionarTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  const inputTextoTarefa = document.getElementById('texto-tarefa');
  li.innerHTML = inputTextoTarefa.value;
  inputTextoTarefa.value = '';
  listaTarefas.appendChild(li);
}

const botaoCriarTarefa = document.getElementById('criar-tarefa');
botaoCriarTarefa.addEventListener('click', adicionarTarefa);
