const textoTarefa = document.querySelector('#texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
let tarefa = '';

// Limpa o input depois que o botão é clicado
function limparInput() {
  textoTarefa.value = '';
}

// Adiciona o elemento 'li' e renderiza a tarefa no DOM
function criarTarefa() {
  tarefa = document.createElement('li');
  tarefa.innerText = textoTarefa.value;
  tarefa.className = 'tarefa';
  listaTarefas.appendChild(tarefa);
  limparInput();
}

// Alterar a cor para cinza quando um item da lista for clicado
function mudarCorSelecionado() {
  const itemClicado = document.querySelector('.selecionado');
  itemClicado.classList.remove('selecionado');
  event.target.classList.add('selecionado');
}

// Riscar o item quando o mesmo for receber um duplo clique
function marcarItemCompleto(itemCompleto) {
  if (itemCompleto.target.classList.contains('completed')) {
    itemCompleto.target.classList.remove('completed');
  }
  else {
    itemCompleto.target.classList.add('completed');
  }
}

// Cria um evento de clique para quando o botão é pressionado
btnCriarTarefa.addEventListener('click', criarTarefa);
listaTarefas.addEventListener('click', mudarCorSelecionado);
// Evento de duplo clique para marcar o elemento como completado
listaTarefas.addEventListener('dblclick', marcarItemCompleto);
