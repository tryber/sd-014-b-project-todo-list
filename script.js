// Usei o repositório de Natália Martins como consulta para resolver alguns requisitos, segue o link do repositório => https://github.com/tryber/sd-014-b-project-todo-list/pull/86/files

const textoTarefa = document.querySelector('#texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const btnApagarTudo = document.querySelector('#apaga-tudo');
const btnRemoverFinalizados = document.querySelector('#remover-finalizados');
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
function mudarCorSelecionado(cor) {
  const itemClicado = document.querySelector('.selecionado');
  itemClicado.classList.remove('selecionado');
  cor.target.classList.add('selecionado');
}

// Riscar o item quando o mesmo for receber um duplo clique
function marcarItemCompleto(itemCompleto) {
  if (itemCompleto.target.classList.contains('completed')) {
    itemCompleto.target.classList.remove('completed');
  } else {
    itemCompleto.target.classList.add('completed');
  }
}

// Evento de clique para apagar todas as tarefas da lista
btnApagarTudo.addEventListener('click', () => {
  listaTarefas.innerHTML = '';
})

// Evento que apaga os itens marcados como concluído
btnRemoverFinalizados.addEventListener('click', () => {
  for (let index = 0; index < listaTarefas.children.length; index += 1) {
    const itemAtual = listaTarefas.children[index];
    if (itemAtual.classList.contains('completed')) {
      listaTarefas.removeChild(itemAtual);
      index -= 1;
    }
  }
})

// Cria um evento de clique para quando o botão é pressionado
btnCriarTarefa.addEventListener('click', criarTarefa);
listaTarefas.addEventListener('click', mudarCorSelecionado);
// Evento de duplo clique para marcar o elemento como completado
listaTarefas.addEventListener('dblclick', marcarItemCompleto);
