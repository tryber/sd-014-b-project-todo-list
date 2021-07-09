let inputTarefa = document.getElementById('texto-tarefa');
let botaoAdicionarTarefa = document.getElementById('criar-tarefa');
let listaTarefas = document.getElementById('lista-tarefas')

inputTarefa.addEventListener('keyup', tarefaDigitada);
botaoAdicionarTarefa.addEventListener('click', adicionarTarefa);

let tarefaParaInserir = '';

function tarefaDigitada(event) {
  tarefaParaInserir = event.target.value;
}

function apagarTextoInput() {
  inputTarefa.value = '';
}

function adicionarTarefa() {
  if (tarefaParaInserir === '') { 
    return;
  }
  let itemListaTarefas = document.createElement('li');
  itemListaTarefas.innerText = tarefaParaInserir;
  listaTarefas.appendChild(itemListaTarefas);
  apagarTextoInput();
}
