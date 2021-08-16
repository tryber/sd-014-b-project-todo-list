/* eslint-disable no-shadow */
/* eslint-disable no-constant-condition */
function alterColor() {
  const getTasks = document.querySelectorAll('.task');
  for (let index = 0; index < getTasks.length; index += 1) {
    getTasks[index].classList.remove('selected');
    getTasks[index].style.backgroundColor = 'white';
  }
}

function empityTasks() {
  const getOl = document.getElementById('lista-tarefas');
  while (getOl.firstChild) {
    getOl.removeChild(getOl.firstChild);
  }
  localStorage.removeItem('taskList');
}
function removeCompleted() {
  const getOl = document.getElementById('lista-tarefas');
  const getLi = document.querySelectorAll('.completed');
  for (let index = 0; index < getLi.length; index += 1) {
    getOl.removeChild(getLi[index]);
  }
}

// eslint-disable-next-line max-lines-per-function
function addTask() {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  const getOl = document.querySelector('#lista-tarefas');
  const getButtonTask = document.querySelector('#criar-tarefa');
  const getInput = document.querySelector('#texto-tarefa');
  // eslint-disable-next-line prefer-arrow-callback
  // eslint-disable-next-line func-names
  // eslint-disable-next-line max-lines-per-function
  getButtonTask.addEventListener('click', () => {
    const createLi = document.createElement('li');
    createLi.className = 'task';
    createLi.innerHTML = getInput.value;
    createLi.addEventListener('click', (event) => {
      alterColor();
      event.target.classList.add('selected');
      // eslint-disable-next-line no-param-reassign
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      // eslint-disable-next-line no-param-reassign
    });
    createLi.addEventListener('dblclick', (event) => {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    });
    getOl.appendChild(createLi);
    getInput.value = '';
  });
}
addTask();

function removeTasks() {
  const getButtonRemove = document.querySelector('#apaga-tudo');
  getButtonRemove.addEventListener('click', () => {
    empityTasks();
  });
}
removeTasks();

function btnRemoveCompleted() {
  const getButton = document.getElementById('remover-finalizados');
  getButton.addEventListener('click', () => {
    removeCompleted();
  });
}
btnRemoveCompleted();

function saveTasks() {
  const taskList = document.querySelector('#lista-tarefas');
  const getButtonSaveTasks = document.getElementById('salvar-tarefas');
  getButtonSaveTasks.addEventListener('click', () => {
    localStorage.setItem('taskList', taskList.innerHTML);
  });
}
saveTasks();

// eslint-disable-next-line max-lines-per-function
function setTasksSaved() {
  const taskList = document.querySelector('#lista-tarefas');
  if (localStorage.getItem('taskList') !== '') {
    taskList.innerHTML = localStorage.getItem('taskList');
  }
  const getTasks = document.querySelectorAll('.task');
  for (let index = 0; index < getTasks.length; index += 1) {
    // eslint-disable-next-line sonarjs/no-identical-functions
    getTasks[index].addEventListener('click', (event) => {
      alterColor();
      const getEvent = event.target;
      getEvent.classList.add('selected');
      getEvent.style.backgroundColor = 'rgb(128, 128, 128)';
      // eslint-disable-next-line no-shadow
      // eslint-disable-next-line sonarjs/no-identical-functions
      getTasks.addEventListener('dblclick', (event) => {
        if (event.target.classList.contains('completed')) {
          event.target.classList.remove('completed');
        } else {
          event.target.classList.add('completed');
        }
      });
    });
  }
}
setTasksSaved();

// As duas funções abaixo tiveram uma consulta ao código do amigo ISRAEL-NAZARETH Turma -B da Trybe.

function moveUp() {
  const getButtonUp = document.getElementById('mover-cima');
  getButtonUp.addEventListener('click', () => {
    const getSelected = document.querySelector('.selected');
    const getTasks = document.querySelectorAll('.task');
    if (getSelected === null) {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      alert('Nenhuma tarefa foi selecionada');
    } else if (getSelected !== getTasks[0]) {
      getSelected.parentNode.insertBefore(getSelected, getSelected.previousElementSibling);
    }
  });
}
moveUp();

function moveDown() {
  const getButtonDown = document.getElementById('mover-baixo');
  getButtonDown.addEventListener('click', () => {
    const getSelected = document.querySelector('.selected');
    if (getSelected === null) {
      alert('Nenhuma tarefa foi selecionada');
    } else if (getSelected !== getSelected.parentNode.lastChild) {
      getSelected.parentNode.insertBefore(getSelected.nextElementSibling, getSelected);
    }
  });
}
moveDown();

function removeTaskSelected() {
  const buttonRemove = document.getElementById('remover-selecionado');
  buttonRemove.addEventListener('click', () => {
    const getSelected = document.querySelector('.selected');
    if (getSelected === null) {
      alert('Nenhuma tarefa foi selecionada');
    } else {
      getSelected.parentNode.removeChild(getSelected);
    }
  });
}
removeTaskSelected();
