const getButton = document.querySelector('#criar-tarefa');
const getInput = document.querySelector('#texto-tarefa');
const getOrdenedList = document.querySelector('#lista-tarefas');
const buttonApagaTudo = document.querySelector('#apaga-tudo');
const buttonRemoveFinalizados = document.querySelector('#remover-finalizados');
const buttonUp = document.querySelector('#mover-cima');
const buttonDown = document.querySelector('#mover-baixo');
const buttonSave = document.querySelector('#salvar-tarefas');
const buttonremove = document.querySelector('#remover-selecionado');


function adicionarTarefa() {
  const criaLi = document.createElement('li');
  if (getInput.value !== '') {
    getOrdenedList.appendChild(criaLi).innerText = getInput.value;
  } else {
    alert('Adicione uma tarefa!');
  }
  getInput.value = '';
}

getButton.addEventListener('click', adicionarTarefa);

function alteraCor(event) {
  const getGray = document.querySelector('.gray');
  if (getGray !== null) {
    getGray.classList.remove('gray');
  }
  event.target.classList.add('gray');
}

getOrdenedList.addEventListener('click', alteraCor);

function riscaCompleto(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

getOrdenedList.addEventListener('dblclick', riscaCompleto);

function apagaTudo() {
  getOrdenedList.innerHTML = '';
}

buttonApagaTudo.addEventListener('click', apagaTudo);

function removeFinalizados() {
  const ols = document.querySelectorAll('.completed');
  for (let index = 0; index < ols.length; index +=1) {
    ols[index].remove();
  }
}

buttonRemoveFinalizados.addEventListener('click', removeFinalizados);

function salvarLocal() {
  localStorage.setItem('listaDeTarefas', getOrdenedList.innerHTML);
}


buttonSave.addEventListener('click', salvarLocal);

window.onload = function() {
  getOrdenedList.innerHTML = localStorage.getItem('listaDeTarefas');
}

function moveCima() {
  const getSelected = document.querySelector('.gray');

  if (getOrdenedList.firstChild !== getSelected && getSelected !== null) {
    getOrdenedList.insertBefore(getSelected, getSelected.previousSibling);
  } else {
    alert('Opção Invalida!');
  }
}

buttonUp.addEventListener('click', moveCima);

function moveBaixo() {
  const getSelected = document.querySelector('.gray');
  if (getOrdenedList.lastChild !== getSelected && getSelected !== null) {
    getOrdenedList.insertBefore(getSelected.nextSibling, getSelected);
  } else {
    alert('Opção Invalida!');
  }
}

buttonDown.addEventListener('click', moveBaixo);

function removeSelecionado() {
  const gray = document.querySelector('.gray');
  if (gray) {
    gray.remove();
  } else {
    alert('Selecione uma tarefa para apagar!')
  }
}

buttonremove.addEventListener('click', removeSelecionado);
