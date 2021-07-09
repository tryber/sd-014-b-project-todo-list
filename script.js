const inputTarefa = document.getElementById('texto-tarefa');
const botaoAdicionarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const botaoLimparLista = document.getElementById('apaga-tudo');
const botaoRemoverFinalizadas = document.getElementById('remover-finalizados');
let tarefaParaInserir = '';
const botaoSalvarTarefas = document.getElementById('salvar-tarefas');
const botaoMoverCima = document.getElementById('mover-cima');
const botaoMoverBaixo = document.getElementById('mover-baixo');

function tarefaDigitada(event) {
  tarefaParaInserir = event.target.value;
}

function apagarTextoInput() {
  inputTarefa.value = '';
}

function changeColor(event) {
  const itensListaTarefas = listaTarefas.children;
  for (let index = 0; index < itensListaTarefas.length; index += 1) {
    const corFundoItem = window.getComputedStyle(itensListaTarefas[index])
      .getPropertyValue('background-color');
    if (corFundoItem === 'rgb(128, 128, 128)') {
      itensListaTarefas[index].style.setProperty('background-color', '');
    }
  }
  event.target.style.setProperty('background-color', 'rgb(128, 128, 128)');
}

function tarefaCumprida(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function itemSelecionado(event) {
  const itensListaTarefas = listaTarefas.children;
  for (let index = 0; index < itensListaTarefas.length; index += 1) {
    if (itensListaTarefas[index].classList.contains('selected')) {
      itensListaTarefas[index].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

function aplicarCSSLista() {
  const itensListaTarefas = listaTarefas.children;
  for (let index = 0; index < itensListaTarefas.length; index += 1) {
    itensListaTarefas[index].addEventListener('click', changeColor);
    itensListaTarefas[index].addEventListener('dblclick', tarefaCumprida);
    itensListaTarefas[index].addEventListener('click', itemSelecionado);
  }
}

function adicionarTarefa() {
  if (tarefaParaInserir === '') {
    return;
  }
  let itemListaTarefas = document.createElement('li');
  itemListaTarefas.innerText = tarefaParaInserir;
  listaTarefas.appendChild(itemListaTarefas);
  apagarTextoInput();
  aplicarCSSLista();
}

function limparLista() {
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
}

function removerTarefasFinalizadas() {
  const itensListaTarefas = listaTarefas.children;
  for (let index = 0; index < itensListaTarefas.length; index += 1) {
    if (itensListaTarefas[index].classList.contains('completed')) {
      itensListaTarefas[index].parentNode.removeChild(itensListaTarefas[index]);
      index -= 1;
    }
  }
}

function salvarLista() {
  localStorage.setItem('ol', document.getElementById('lista-tarefas').innerHTML);
}

function recuperarLista() {
  if (typeof (Storage) != "undefined") {
    if (localStorage.count !== undefined) {
      listaTarefas.innerHTML = localStorage.getItem('ol');
      aplicarCSSLista();
    } else {
      localStorage.count = 1;
    }
  } else {
  document.write("Sem suporte para Web Storage");
  }
}

function moverTarefaCima() {
  let posicaoSelecionado;
  let posicaoAnteriorSelecionado;
  for (let index = 0; index < listaTarefas.children.length; index += 1) {
    if (listaTarefas.children[index].classList.contains('selected')) {
      posicaoSelecionado = index;
      posicaoAnteriorSelecionado = index - 1;
    }
  }
  if (posicaoSelecionado != 0) {
    listaTarefas.insertBefore(listaTarefas.children[posicaoSelecionado], listaTarefas.children[posicaoAnteriorSelecionado]);
  }
}

inputTarefa.addEventListener('keyup', tarefaDigitada);
botaoAdicionarTarefa.addEventListener('click', adicionarTarefa);
botaoLimparLista.addEventListener('click', limparLista);
botaoRemoverFinalizadas.addEventListener('click', removerTarefasFinalizadas);
botaoSalvarTarefas.addEventListener('click', salvarLista);
recuperarLista();
botaoMoverCima.addEventListener('click', moverTarefaCima);
botaoMoverBaixo.addEventListener('click', moverTarefaBaixo);
