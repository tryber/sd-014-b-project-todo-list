let elementoSelecionado = null;

function adicionarCor(event) {
  const elemento = event.target;

  if (elementoSelecionado) {
    elementoSelecionado.style.backgroundColor = '';
  }

  elemento.style.backgroundColor = 'rgb(128, 128, 128)';
  elementoSelecionado = elemento;
}

function adicionarTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  const inputTextoTarefa = document.getElementById('texto-tarefa');
  li.innerHTML = inputTextoTarefa.value;
  li.addEventListener('click', adicionarCor);
  inputTextoTarefa.value = '';
  listaTarefas.appendChild(li);
}

const botaoCriarTarefa = document.getElementById('criar-tarefa');
botaoCriarTarefa.addEventListener('click', adicionarTarefa);
