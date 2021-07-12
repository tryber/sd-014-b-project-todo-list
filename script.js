const buttonAddTask = document.querySelector('#criar-tarefa');
const listParent = document.querySelector('#lista-tarefas');
const eraseButton = document.querySelector('#apaga-tudo');
const removeFinishedButton = document.querySelector('#remover-finalizados');
const saveButton = document.querySelector('#salvar-tarefas');
const upButton = document.querySelector('#mover-cima');
const downButton = document.querySelector('#mover-baixo');
const deleteButton = document.querySelector('#remover-selecionado');

buttonAddTask.addEventListener('click', criarTarefa);

function criarTarefa() {
  let novaTarefa = document.createElement('li');
  let input = document.querySelector('#texto-tarefa');
  let inputValue = input.value;
  novaTarefa.innerText = inputValue;
  novaTarefa.classList.add('list-item');
  novaTarefa.addEventListener('dblclick', mudarStatusDaTarefa);
  novaTarefa.addEventListener('click', mudarCorDaTarefa);
  listParent.appendChild(novaTarefa);
  document.querySelector('#texto-tarefa').value = '';
}

function mudarCorDaTarefa(mouse) {
  let listItem = document.querySelectorAll('.list-item');
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index] === mouse.target) {
      if (mouse.target.style.backgroundColor !== 'rgb(128, 128, 128)') {
        mouse.target.style.backgroundColor = 'rgb(128, 128, 128)';
      } else {
        mouse.target.style.backgroundColor = '#15151a';

      }
    } else {
      listItem[index].style.backgroundColor = '#15151a';
    }
  }
}

function mudarStatusDaTarefa(event) {
  event.target.classList.toggle('completed');
}

eraseButton.addEventListener('click', apagaTodasTarefas);

function apagaTodasTarefas() {
  let tarefas = document.querySelectorAll('.list-item');
  let tarefasParent = document.querySelector('#lista-tarefas');
  for (index = 0; index < tarefas.length; index += 1) {
    tarefasParent.removeChild(tarefas[index]);
  }
}

removeFinishedButton.addEventListener('click', removerTarefasFinalizadas);

function removerTarefasFinalizadas() {
  let tarefas = document.querySelectorAll('.list-item');
  let tarefasParent = document.querySelector('#lista-tarefas');
  for (index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index].className === 'list-item completed') {
      tarefasParent.removeChild(tarefas[index]);
    }
  }
}



saveButton.addEventListener('click', salvarLocal)

// Retirado de uma thread do slack, onde o Bernardo deu a dica
function salvarLocal() {
  const listaDeTarefas = listParent.innerHTML;
  localStorage.setItem('tarefas', JSON.stringify(listaDeTarefas))
}



function renderizacaoInicial() {
  if (localStorage.getItem('tarefas') === null) {
    localStorage.setItem('tarefas', JSON.stringify());
  } else {
    inserirTarefasSalvasNaLista();
  }
}


function inserirTarefasSalvasNaLista() {
  const listaDeTarefas = JSON.parse(localStorage.getItem('tarefas'));
  listParent.innerHTML = listaDeTarefas;
  let tarefas = document.querySelectorAll('.list-item');
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].addEventListener('dblclick', mudarStatusDaTarefa);
    tarefas[index].addEventListener('click', mudarCorDaTarefa);
  }
}


window.onload = function () {
  renderizacaoInicial();
}

upButton.addEventListener('click', moverTarefaPraCima);

downButton.addEventListener('click', moverTarefaPraBaixo);

// Funções comentadas que funcionam sem ter que clicar toda vez ao mover a tarefa
/* function moverTarefaPraCima() {
  let tarefas = document.querySelectorAll('.list-item');
  for (let index = 1; index < tarefas.length; index += 1) {
    if (tarefas[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      let tarefaAtual = tarefas[index].outerHTML;
      tarefas[index].outerHTML = tarefas[index - 1].outerHTML;
      tarefas[index - 1].outerHTML = tarefaAtual;
    }
  }
  adicionarEvents()
}

function moverTarefaPraBaixo() {
  let tarefas = document.querySelectorAll('.list-item');
  for (let index = (tarefas.length - 2); index >= 0; index -= 1) {
    if (tarefas[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      let tarefaAtual = tarefas[index].outerHTML;
      tarefas[index].outerHTML = tarefas[index + 1].outerHTML;
      tarefas[index + 1].outerHTML = tarefaAtual;
    }

    adicionarEvents()
  }
} */

function moverTarefaPraCima() {
  let tarefas = document.querySelectorAll('.list-item');
  for (let index = 1; index < tarefas.length; index += 1) {
    if (tarefas[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      tarefas[index].style.backgroundColor = 'rgb(21, 21, 26)';
      let tarefaAtual = tarefas[index].outerHTML;
      tarefas[index].outerHTML = tarefas[index - 1].outerHTML;
      tarefas[index - 1].outerHTML = tarefaAtual;
    }
  }
  adicionarEvents()
}

function moverTarefaPraBaixo() {
  let tarefas = document.querySelectorAll('.list-item');
  for (let index = (tarefas.length - 2); index >= 0; index -= 1) {
    if (tarefas[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      tarefas[index].style.backgroundColor = 'rgb(21, 21, 26)';
      let tarefaAtual = tarefas[index].outerHTML;
      tarefas[index].outerHTML = tarefas[index + 1].outerHTML;
      tarefas[index + 1].outerHTML = tarefaAtual;
    }

    adicionarEvents()
  }
}

function adicionarEvents() {
  let tarefas = document.querySelectorAll('.list-item');
  for (let index = 0; index < tarefas.length; index += 1) {
    tarefas[index].addEventListener('dblclick', mudarStatusDaTarefa);
    tarefas[index].addEventListener('click', mudarCorDaTarefa);
  }
}

deleteButton.addEventListener('click', removerSelecionado);

function removerSelecionado() {
  let tarefas = document.querySelectorAll('.list-item');
  for (let index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      listParent.removeChild(tarefas[index])
    }
  }
}