const input = document.querySelector('#texto-tarefa');
const olTaskList = document.querySelector('#lista-tarefas');

// criando tarefa (elemento li)
function addTask() {
  const li = document.createElement('li');
  li.innerText = input.value;
  li.className = 'classLi';
  olTaskList.appendChild(li);
  input.value = '';
}

const btnAddTask = document.querySelector('#criar-tarefa');
btnAddTask.addEventListener('click', addTask);

// colorindo a tarefa (li especificada)
function liGetColor(event) {
  const qtdLi = document.querySelectorAll('.classLi');

  // all li become white
  for (let index = 0; index < qtdLi.length; index += 1) {
    qtdLi[index].classList.remove('colorGray');
  }

  // clicked li become gray
  event.target.classList.add('colorGray');
}

olTaskList.addEventListener('click', liGetColor);

// 9.riscar tarefa concluida
function taskDone(event) { // scratch
  event.target.classList.toggle('completed');
}

olTaskList.addEventListener('dblclick', taskDone);

// 10.botao apagar tudo
function allGone() {
  const classLi = document.querySelectorAll('.classLi');

  for (let index = 0; index < classLi.length; index += 1) {
    classLi[index].remove('li');
  }
}

const btnDeleteAll = document.querySelector('#apaga-tudo');
btnDeleteAll.addEventListener('click', allGone);

// 11.remover finalizados
function removeTaskCompleted() {
  const classCompleted = document.querySelectorAll('.completed');

  for (let index = 0; index < classCompleted.length; index += 1) {
    classCompleted[index].remove('li');
  }
}

const btnTaskCompleted = document.querySelector('#remover-finalizados');
btnTaskCompleted.addEventListener('click', removeTaskCompleted);

// 14.remover selecionado (li selecionada)
function removeSelected() {
  const selected = document.querySelector('.colorGray');
  selected.remove('li');
}

const btnRemoveSelected = document.querySelector('#remover-selecionado');
btnRemoveSelected.addEventListener('click', removeSelected);

// 12.webstorage no botão salvar tarefa
// taskList = document.querySelector('#lista-tarefas')
function saveTask() {
  localStorage.setItem('taskList', olTaskList.innerHTML);
}

const btnSaveTask = document.querySelector('#salvar-tarefas');
btnSaveTask.addEventListener('click', saveTask);

window.onload = function restorePage() {
  olTaskList.innerHTML = localStorage.getItem('taskList');
};

// 13. btn mover cima baixo
function moveUp() {
  const selected = document.querySelector('.colorGray');
  const allLi = document.querySelectorAll('.classLi');

  if (selected === undefined || selected === null) {
    alert('não há tarefa selecionada');
  } else if (selected === allLi[0]) {
    alert('tarefa seleciona já é a primeira');
  } else {
    // MDN insertBefore sytanx
    // let insertedNode = parentNode.insertBefore(newNode, referenceNode)
    selected.parentNode.insertBefore(selected, selected.previousElementSibling);
  }
}

const btnMoveUp = document.querySelector('#mover-cima');
btnMoveUp.addEventListener('click', moveUp);

function moveDown() {
  const selected = document.querySelector('.colorGray');
  const allLi = document.querySelectorAll('.classLi');

  if (selected === undefined || selected === null) {
    alert('não há tarefa selecionada');
  } else if (selected === allLi[allLi.length - 1]) {
    alert('tarefa seleciona já é a ultima');
  } else {
    // MDN Note: There is no insertAfter() method.
    // emulated by insertBefore method with Node.nextSibling.
    selected.parentNode.insertBefore(selected, selected.nextElementSibling.nextElementSibling);
  }
}

const btnMoveDown = document.querySelector('#mover-baixo');
btnMoveDown.addEventListener('click', moveDown);
