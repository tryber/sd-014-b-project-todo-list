// cria a tarefa
const addTask = document.querySelector('#criar-tarefa');

function taskCreator() {
  const itemCreator = document.createElement('li');
  const existingList = document.querySelector('#lista-tarefas');
  existingList.appendChild(itemCreator);
  itemCreator.innerText = document.querySelector('#texto-tarefa').value;
  document.getElementById('texto-tarefa').value = '';
}

// coloca a cor cinza na tarefa selecionada
addTask.addEventListener('click', taskCreator);

const olGray = document.getElementById('lista-tarefas');

function greyPainter(event) {
  const cinza = event.target;
  const listItens = document.getElementsByTagName('li');
  for (let index = 0; index < listItens.length; index += 1) {
    listItens[index].style.backgroundColor = null;
  }
  cinza.style.backgroundColor = 'grey';
}

olGray.addEventListener('click', greyPainter);

// coloca a classe selected ao dbclick
function lineThrough(event) {
  const lineItem = event.target;
  if (lineItem.classList.contains('completed') === true) {
    lineItem.classList.remove('completed');
  } else {
    lineItem.classList.add('completed');
  }
}

olGray.addEventListener('dblclick', lineThrough);

// botão de apagar tudo
const clearbutton = document.querySelector('#apaga-tudo');

function clearList() {
  document.getElementById('lista-tarefas').innerHTML = '';
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
