let listaTarefas = document.querySelector('#lista-tarefas');
let botao = document.querySelector('#criar-tarefa');
let tarefa = document.querySelector('#texto-tarefa');

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
  if(event.target.className != 'completed'){
    event.target.classList.add('selecionada');
    event.target.backgroundColor = 'rbg(128, 128, 128)';
  }
});

listaTarefas.addEventListener('dblclick', (event) => {
  if(event.target.className === 'completed'){
    event.target.className = '';
    event.target.style.textDecoration = 'none';
  } else {
    event.target.className = ('completed');
    event.target.backgroundColor = 'white';
    event.target.textDecoration = 'line-through solid rgb(0, 0, 0)';
  }
});
