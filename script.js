let listaTarefas = document.querySelector('#lista-tarefas');
let botao = document.querySelector('#criar-tarefa');
let tarefa = document.querySelector('#texto-tarefa');

function adicionaTarefa () {
  let aux = document.createElement('li');
  aux.innerText = tarefa.value;
  listaTarefas.appendChild(aux);
  tarefa.value = '';
}

botao.addEventListener('click', adicionaTarefa);
listaTarefas.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)'
});
