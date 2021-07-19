const botaoCriarTarefa = document.getElementById('criar-tarefa');
const botaoApagaTudo = document.getElementById('apaga-tudo');
const botaoRemoverFinalizados = document.getElementById('remover-finalizados');
const botaoSalvarTarefas = document.getElementById('salvar-tarefas');
const botaoMoverParaCima = document.getElementById('mover-cima');
const botaoMoverParaBaixo = document.getElementById('mover-baixo');
const idListaDeTarefas = 'lista-tarefas';
let elementoSelecionado = null;

function selecionarTarefa(event) {
  const elemento = event.target;

  if (elementoSelecionado) {
    elementoSelecionado.classList.remove('selected');
  }

  elemento.classList.add('selected');
  elementoSelecionado = elemento;
}

function completarTarefa(event) {
  const elemento = event.target;

  if (elemento.classList.contains('completed')) {
    elemento.classList.remove('completed');
  } else {
    elemento.classList.add('completed');
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
  const listaTarefas = document.getElementById(idListaDeTarefas);
  const inputTextoTarefa = document.getElementById('texto-tarefa');
  const li = criarTarefa(inputTextoTarefa.value);
  inputTextoTarefa.value = '';
  listaTarefas.appendChild(li);
}

function apagarListaDeTarefas() {
  const listaTarefas = document.getElementById(idListaDeTarefas);
  listaTarefas.innerHTML = '';
}

function removerFinalizados() {
  const listaTarefas = document.getElementById(idListaDeTarefas);
  const tarefas = listaTarefas.children;

  for (let i = 0; i < tarefas.length; i += 1) {
    const tarefa = tarefas[i];

    if (tarefa.classList.contains('completed')) {
      listaTarefas.removeChild(tarefa);
      i -= 1;
    }
  }
}

function salvarTarefas() {
  const listaTarefas = document.getElementById(idListaDeTarefas);
  const tarefas = listaTarefas.children;
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
  const listaTarefas = document.getElementById(idListaDeTarefas);

  for (let i = 0; i < tarefas.length; i += 1) {
    const tarefa = tarefas[i].split(':');

    const li = criarTarefa(tarefa[0], tarefa[1]);
    listaTarefas.appendChild(li);
  }
};

function renderizarListaDeTarefas(tarefas) {
  const listaTarefas = document.getElementById(idListaDeTarefas);
  listaTarefas.innerHTML = '';

  for (let i = 0; i < tarefas.length; i += 1) {
    const tarefa = tarefas[i];
    listaTarefas.appendChild(tarefa);
  }
}

function moverTarefaParaCima() {
  const listaTarefas = document.getElementById(idListaDeTarefas);
  const tarefas = listaTarefas.children;
  const tarefasReordenadas = [];

  for (let i = 0; i < tarefas.length; i += 1) {
    const tarefa = tarefas[i];

    if (i !== 0 && tarefa === elementoSelecionado) {
      const tarefaAnterior = tarefasReordenadas[tarefasReordenadas.length - 1];
      tarefasReordenadas[tarefasReordenadas.length - 1] = tarefa;
      tarefasReordenadas.push(tarefaAnterior);
    } else {
      tarefasReordenadas.push(tarefa);
    }
  }

  renderizarListaDeTarefas(tarefasReordenadas);
}

function moverTarefaParaBaixo() {
  const listaTarefas = document.getElementById(idListaDeTarefas);
  const tarefas = listaTarefas.children;
  const tarefasReordenadas = [];

  for (let i = 0; i < tarefas.length; i += 1) {
    const tarefa = tarefas[i];

    if (i < tarefas.length - 1 && tarefa === elementoSelecionado) {
      const proximaTarefa = tarefas[i + 1];
      tarefasReordenadas.push(proximaTarefa);
      tarefasReordenadas.push(tarefa);
      i += 1;
    } else {
      tarefasReordenadas.push(tarefa);
    }
  }

  renderizarListaDeTarefas(tarefasReordenadas);
}

botaoCriarTarefa.addEventListener('click', adicionarTarefa);
botaoApagaTudo.addEventListener('click', apagarListaDeTarefas);
botaoRemoverFinalizados.addEventListener('click', removerFinalizados);
botaoSalvarTarefas.addEventListener('click', salvarTarefas);
botaoMoverParaCima.addEventListener('click', moverTarefaParaCima);
botaoMoverParaBaixo.addEventListener('click', moverTarefaParaBaixo);
