const botaoAdiciona = document.querySelector('#criar-tarefa');
const userInput = document.querySelector('#texto-tarefa');
const listaDesordenada = document.querySelector('#lista-tarefas');
const botaoApaga = document.querySelector('#apaga-tudo');
const botaoSelecionados = document.querySelector('#remover-finalizados');
const pegarSelecionados = '#lista-tarefas li';

botaoAdiciona.addEventListener('click', function () {
  if (userInput.value !== '') {
    let novaTarefa = document.createElement('li');
    novaTarefa.innerHTML = userInput.value;
    novaTarefa.classList.add('tarefas');
    listaDesordenada.appendChild(novaTarefa);
    userInput.value = '';
  }
});
/*function pintaTarefa() {
  let selecaoDeTarefas = document.querySelectorAll('.tarefas');
  for (let i = 0; i < selecaoDeTarefas.length; i++) {
    if (selecaoDeTarefas[i].classList.contains('selecionado')) {
      selecaoDeTarefas[i].style.backgroundColor = 'rgb(128,128,128)';
    } else {
      selecaoDeTarefas[i].style.backgroundColor = 'white';
    }
  }
}*/

function selecionaItem() {
  listaDesordenada.addEventListener('click', function (evento) {
    let itemSelecionado = document.querySelector('.selecionado');
    if (itemSelecionado !== null) {
      itemSelecionado.classList.remove('selecionado');
      itemSelecionado.removeAttribute('style');
    } else {
      evento.target.classList.add('selecionado');
    }
  });
}
selecionaItem();

listaDesordenada.addEventListener('dblclick', function (evento) {
  if (!evento.target.className.includes('completed')) {
    evento.target.classList.add('completed');
  } else {
    evento.target.removeAttribute('class');
  }
});

botaoApaga.addEventListener('click', function () {
  listaDesordenada.innerHTML = '';
});

botaoSelecionados.addEventListener('click', function () {
  const pegarTodos = document.querySelectorAll(pegarSelecionados);
  for (let i = 0; i < pegarTodos.length; i++) {
    if (pegarTodos[i].className.includes('completed')) {
      listaDesordenada.removeChild(pegarTodos[i]);
    }
  }
});
