const botaoCriarTarefa = document.getElementById('criar-tarefa');
const botaoApagaTudo = document.getElementById('apaga-tudo');
const botaoRemoverFinalizados = document.getElementById('remover-finalizados');
let elementoSelecionado = null;

function selecionarTarefa(event) {
  const elemento = event.target;

  if (elementoSelecionado) {
    elementoSelecionado.style.backgroundColor = '';
  }

  elemento.style.backgroundColor = 'rgb(128, 128, 128)';
  elementoSelecionado = elemento;
}

function completarTarefa(event) {
  const elemento = event.target;

  if (elemento.classList.contains('completed')) {
    elemento.classList.remove('completed');
  } else {
    elemento.setAttribute('class', 'completed');
  }
}

function adicionarTarefa() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  const inputTextoTarefa = document.getElementById('texto-tarefa');
  li.innerHTML = inputTextoTarefa.value;
  li.addEventListener('click', selecionarTarefa);
  li.addEventListener('dblclick', completarTarefa);
  inputTextoTarefa.value = '';
  listaTarefas.appendChild(li);
}

function apagarListaDeTarefas() {
  const listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.innerHTML = '';
}

function removerFinalizados() {
  const listaTarefas = document.getElementById('lista-tarefas');
  const tarefas = listaTarefas.childNodes;

  for (let i = 0; i < tarefas.length; i += 1) {
    const tarefa = tarefas[i];

    if (tarefa.classList.contains('completed')) {
      listaTarefas.removeChild(tarefa);
      i -= 1;
    }
  }
}

botaoCriarTarefa.addEventListener('click', adicionarTarefa);
botaoApagaTudo.addEventListener('click', apagarListaDeTarefas);
botaoRemoverFinalizados.addEventListener('click', removerFinalizados);
