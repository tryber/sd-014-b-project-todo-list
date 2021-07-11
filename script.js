// cria a tarefa
const addTask = document.querySelector('#criar-tarefa');
const existingList = document.querySelector('#lista-tarefas');

function taskCreator() {
  const itemCreator = document.createElement('li');
  existingList.appendChild(itemCreator);
  itemCreator.innerText = document.querySelector('#texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
}

// coloca a cor cinza na tarefa selecionada
addTask.addEventListener('click', taskCreator);

function greyPainter(event) {
  const cinza = event.target;
  const listItens = document.getElementsByTagName('li');
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].style.backgroundColor = null;
    listItens[index].classList.remove('cinza');
  }
  cinza.style.backgroundColor = 'grey';
  cinza.classList.add('cinza');
}

existingList.addEventListener('click', greyPainter);

// coloca a classe selected ao dbclick
function lineThrough(event) {
  const lineItem = event.target;
  if (lineItem.classList.contains('completed') === true) {
    lineItem.classList.remove('completed');
  } else {
    lineItem.classList.add('completed');
  }
}

existingList.addEventListener('dblclick', lineThrough);

// botão de apagar tudo
const clearbutton = document.querySelector('#apaga-tudo');

function clearList() {
  existingList.innerHTML = '';
}

clearbutton.addEventListener('click', clearList);

// botão apagar finalizados
const finishedItens = document.querySelector('#remover-finalizados');

function finishedRemover() {
  const completedlist = document.getElementsByClassName('completed');
  for (let index = completedlist.length - 1; index >= 0; index -= 1) {
    completedlist[index].remove();
  }
}

finishedItens.addEventListener('click', finishedRemover);

// remover o selecionado
const selectedRemover = document.querySelector('#remover-selecionado');

function cinzaRemover() {
  document.getElementsByClassName('cinza')[0].remove();
}

selectedRemover.addEventListener('click', cinzaRemover);

// salva lista no localStorage
const salvaStorage = document.querySelector('#salvar-tarefas');

function salva() {
  const listSaver = existingList.innerHTML;
  localStorage.setItem('tarefas', listSaver);
}

salvaStorage.addEventListener('click', salva);

function loader() {
  existingList.innerHTML = localStorage.getItem('tarefas');
}

window.onload = loader;

// move up e down
// referência da função insert before adquirida em: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
// e funciona da seguinte maneira: navega-se até o elemento pai do nó que queremos mudar, aplicamos o insertBefore com dois parâmetros sendo o primeiro o elemento novo ou que se quer inserir, coloca-se a vírgula e por último a posição que se quer colocar
const upButton = document.querySelector('#mover-cima');
const downButton = document.querySelector('#mover-baixo');

function up() {
  const li = document.querySelector('.cinza');
  const liAll = document.querySelectorAll('.cinza');
  if (liAll.length > 0 && !document.querySelectorAll('li')[0].classList.contains('cinza')) {
    li.parentNode.insertBefore(li, li.previousSibling);
  }
}

function down() {
  const li = document.querySelector('.cinza');
  const liAll = document.querySelectorAll('.cinza');
  const liLength = document.querySelectorAll('li').length - 1;
  if (liAll.length > 0 && !document.querySelectorAll('li')[liLength].classList.contains('cinza')) {
    li.parentNode.insertBefore(li.nextSibling, li);
  }
}

upButton.addEventListener('click', up);
downButton.addEventListener('click', down);
