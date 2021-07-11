let textoTarefa = document.querySelector('#texto-tarefa');
let btnCriarTarefa = document.querySelector('#criar-tarefa');
let listaTarefas = document.querySelector('#lista-tarefas');
let tarefa = '';

// Limpa o input depois que o botão é clicado
function limparInput() {
  textoTarefa.value = '';
}

// Adiciona o elemento 'li' e renderiza a tarefa no DOM
function criarTarefa() {
  tarefa = document.createElement('li');
  tarefa.innerText = textoTarefa.value;
  listaTarefas.appendChild(tarefa);
  limparInput();
}

// Cria um evento de clique para quando o botão é pressionado
btnCriarTarefa.addEventListener('click', criarTarefa);
