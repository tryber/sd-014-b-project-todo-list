const botaoAdiciona = document.querySelector('#criar-tarefa');
const userInput = document.querySelector('#texto-tarefa');
const listaDesordenada = document.querySelector('#lista-tarefas');

botaoAdiciona.addEventListener('click', function () {
  if (userInput.value !== '') {
    let novaTarefa = document.createElement('li');
    novaTarefa.innerHTML = userInput.value;
    novaTarefa.classList.add('tarefas');
    listaDesordenada.appendChild(novaTarefa);
    userInput.value = '';
  }
});
function pintaTarefa() {
  let selecaoDeTarefas = document.querySelectorAll('.tarefas');
  for (let i = 0; i < selecaoDeTarefas.length; i++) {
    if (selecaoDeTarefas[i].classList.contains('selecionado')) {
      selecaoDeTarefas[i].style.backgroundColor = 'rgb(128,128,128)';
    } else {
      selecaoDeTarefas[i].style.backgroundColor = 'white';
    }
  }
}

listaDesordenada.addEventListener('click', function (evento) {
  let itemSelecionado = document.querySelector('.selecionado');
  if (itemSelecionado !== null) {
    itemSelecionado.classList.remove('selecionado');
  } else {
    evento.target.classList.add('selecionado');
    pintaTarefa();
  }
});
