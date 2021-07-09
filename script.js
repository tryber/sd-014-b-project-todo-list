let listaTarefas = document.querySelector('#lista-tarefas');
let botao = document.querySelector('#criar-tarefa');
let tarefa = document.querySelector('#texto-tarefa');
let selecionada;

function adicionaTarefa () {
  let aux = document.createElement('li');
  aux.innerText = tarefa.value;
  listaTarefas.appendChild(aux);
  tarefa.value = '';
}

function removeSelecao () {
  if(document.querySelectorAll('.selecionada').length >= 1){
    selecionada = document.querySelector('.selecionada');
    selecionada.style.backgroundColor = 'white';
    selecionada.className = '';
  }
}

botao.addEventListener('click', adicionaTarefa);

listaTarefas.addEventListener('click', (event) => {
  removeSelecao();
  event.target.className = 'selecionada';
  event.target.style.backgroundColor = 'rgb(128, 128, 128)'
});
