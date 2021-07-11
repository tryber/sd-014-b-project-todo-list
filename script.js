const novaTarefa = document.getElementById('texto-tarefa');
const botaoAdicionar = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const tarefasConcluidas = document.getElementsByClassName('riscado');

botaoAdicionar.addEventListener('click', () => {
  const novoItem = document.createElement('li');
  novoItem.innerText = novaTarefa.value;
  novoItem.className = 'tarefa';
  listaTarefas.appendChild(novoItem);
  novaTarefa.value = '';
});

function pintarSelecionado(paint) {
  const itemClicado = document.querySelector('.selected');
  itemClicado.classList.remove('selected');
  paint.target.classList.add('selected');
}

listaTarefas.addEventListener('click', pintarSelecionado);

function riscarSelecionado(riscar) {  
  if (riscar.target.classList.contains('completed')) {
    riscar.target.classList.remove('completed');
  } else {
    riscar.target.classList.add('completed');
  }
}

listaTarefas.addEventListener('dblclick', riscarSelecionado);
