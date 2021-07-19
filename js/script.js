const botaoCriarTarefa = document.getElementById('criar-tarefa');
const botaoApagaTudo = document.getElementById('apaga-tudo');
const botaoRemoverFinalizados = document.getElementById('remover-finalizados');
const botaoSalvarTarefas = document.getElementById('salvar-tarefas');
const classeListaDeTarefas = 'lista-tarefas';
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

function criarTarefa(texto, classe = '') {
  const li = document.createElement('li');

  li.setAttribute('class', classe);
  li.addEventListener('click', selecionarTarefa);
  li.addEventListener('dblclick', completarTarefa);
  li.innerHTML = texto;

  return li;
}

function adicionarTarefa() {
  const listaTarefas = document.getElementById(classeListaDeTarefas);
  const inputTextoTarefa = document.getElementById('texto-tarefa');
  const li = criarTarefa(inputTextoTarefa.value);
  inputTextoTarefa.value = '';
  listaTarefas.appendChild(li);
}

function apagarListaDeTarefas() {
  const listaTarefas = document.getElementById(classeListaDeTarefas);
  listaTarefas.innerHTML = '';
}

function removerFinalizados() {
  const listaTarefas = document.getElementById(classeListaDeTarefas);
  const tarefas = listaTarefas.childNodes;

  for (let i = 0; i < tarefas.length; i += 1) {
    const tarefa = tarefas[i];

    if (tarefa.classList.contains('completed')) {
      listaTarefas.removeChild(tarefa);
      i -= 1;
    }
  }
}

function salvarTarefas() {
  const listaTarefas = document.getElementById(classeListaDeTarefas);
  const tarefas = listaTarefas.childNodes;
  const arrayTarefas = [];

  for (let i = 0; i < tarefas.length; i += 1) {
    const tarefa = tarefas[i];
    arrayTarefas
      .push(`${tarefa.innerHTML}:`
        + `${tarefa.classList.contains('completed') ? 'completed' : ''}`);
  }

  if (arrayTarefas.length) {
    localStorage.setItem('tarefas', arrayTarefas);
  } else {
    localStorage.removeItem('tarefas');
  }
}

window.onload = () => {
  if (!localStorage.getItem('tarefas')) {
    return;
  }

  const tarefas = localStorage.getItem('tarefas').split(',');
  const listaTarefas = document.getElementById(classeListaDeTarefas);

  for (let i = 0; i < tarefas.length; i += 1) {
    const tarefa = tarefas[i].split(':');

    const li = criarTarefa(tarefa[0], tarefa[1]);
    listaTarefas.appendChild(li);
  }
};

botaoCriarTarefa.addEventListener('click', adicionarTarefa);
botaoApagaTudo.addEventListener('click', apagarListaDeTarefas);
botaoRemoverFinalizados.addEventListener('click', removerFinalizados);
botaoSalvarTarefas.addEventListener('click', salvarTarefas);
