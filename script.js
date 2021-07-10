// Cria o campo de input
const inputContainer = document.querySelector('#input-container');
const inputTask = document.createElement('input');
inputTask.id = 'texto-tarefa';
inputTask.type = 'text';
inputContainer.appendChild(inputTask);

// Cria a lista ordenada
const listContainer = document.querySelector('#list-container');
const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
listContainer.appendChild(taskList);

// Cria o botão de criar tarefas
const btnCreateTask = document.createElement('button');
btnCreateTask.id = 'criar-tarefa';
btnCreateTask.innerText = 'Adicionar';
inputContainer.appendChild(btnCreateTask);

// Marca tarefa como completa
function markAsCompleted(event) {
  const getTaskClassList = event.target.classList;
  let count = 0;
  for (let index = 0; index < getTaskClassList.length; index += 1) {
    if (getTaskClassList[index] === 'completed') {
      event.target.classList.remove('completed');
      count += 1;
    }
  }
  if (count === 0) {
    event.target.classList.add('completed');
  }
}

// Função para criar e adicionar novas tarefas à lista ordenada
function createNewTask() {
  const inputText = inputTask.value;
  const newTask = document.createElement('li');
  newTask.className = 'task';
  newTask.innerHTML = inputText;
  taskList.appendChild(newTask);
  inputTask.value = '';

  // Adiciona evento de clique que seleciona uma tarefa
  newTask.addEventListener('click', (event) => {
    const selectedTask = document.querySelectorAll('.selected');
    if (selectedTask.length !== 0) {
      selectedTask[0].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });

  // Adiciona evento de duplo clique que marca uma tarefa como completa
  newTask.addEventListener('dblclick', markAsCompleted);
}

// Adiciona o evento de click ao botão de criar tarefas
btnCreateTask.addEventListener('click', createNewTask);

// Cria o botão que apaga todas as tarefas
const buttonsContainer = document.querySelector('#buttons-container');
const btnDeleteTasks = document.createElement('button');
btnDeleteTasks.id = 'apaga-tudo';
btnDeleteTasks.innerText = 'Limpar Lista';
buttonsContainer.appendChild(btnDeleteTasks);

// Função que apaga todas as tarefas
function deleteAllTasks() {
  const getAllTasks = document.querySelectorAll('.task');
  for (let index = 0; index < getAllTasks.length; index += 1) {
    getAllTasks[index].remove();
  }
}

// Adiciona evento de clique ao botão que apaga todas as tarefas da lista
btnDeleteTasks.addEventListener('click', deleteAllTasks);

// Cria botão que apaga as tarefas marcadas como completa
const btnDeleteCompletedTasks = document.createElement('button');
btnDeleteCompletedTasks.id = 'remover-finalizados';
btnDeleteCompletedTasks.innerText = 'Limpar Completos';
buttonsContainer.appendChild(btnDeleteCompletedTasks);

// Função que apaga as tarefas marcadas como completa
function deleteCompletedTasks() {
  const getCompletedTasks = document.querySelectorAll('.completed');
  for (let index = 0; index < getCompletedTasks.length; index += 1) {
    getCompletedTasks[index].remove();
  }
}

// Adiciona evento de clique ao botão que apaga as tarefas completadas
btnDeleteCompletedTasks.addEventListener('click', deleteCompletedTasks);

// Cria o botão que salva a lista de tarefas
const btnSaveList = document.createElement('button');
btnSaveList.id = 'salvar-tarefas';
btnSaveList.innerText = 'Salvar Lista';
buttonsContainer.appendChild(btnSaveList);

// Função que salva a lista de tarefas no Local Storage
function saveList() {
  const getCurrentTaskList = document.querySelector('#lista-tarefas').innerHTML;
  localStorage.setItem('taskList', getCurrentTaskList);
}

// Adiciona evento de clique ao botão que salva a lista de tarefas
btnSaveList.addEventListener('click', saveList);

// Função que carrega a lista de tarefas salva ao recarregar a página
function loadSavedList() {
  const savedList = localStorage.getItem('taskList');
  if (savedList !== null || undefined) {
    taskList.innerHTML = savedList;
  }
}

loadSavedList();

// Cria o botão que move a tarefa selecionada para baixo
const btnMoveTaskDown = document.createElement('button');
btnMoveTaskDown.id = 'mover-baixo';
btnMoveTaskDown.innerHTML = '&#8681';
buttonsContainer.insertBefore(btnMoveTaskDown, buttonsContainer.firstElementChild);

// Função que move a tarefa selecionada para baixo
function moveSelectedTaskDown() {
  const getSelectedTask = document.querySelector('.selected');
  if (getSelectedTask !== null) {
    const getNextTask = getSelectedTask.nextElementSibling;
    if (getNextTask !== null) {
      const fragment = document.createDocumentFragment();
      fragment.appendChild(getNextTask);
      getSelectedTask.parentElement.insertBefore(fragment, getSelectedTask);
    }
  }
}

// Adiciona evento de clique ao botão que move a tarefa selecionada para baixo
btnMoveTaskDown.addEventListener('click', moveSelectedTaskDown);

// Cria o botão que move a tarefa selecionada para cima
const btnMoveTaskUp = document.createElement('button');
btnMoveTaskUp.id = 'mover-cima';
btnMoveTaskUp.innerHTML = '&#8679';
buttonsContainer.insertBefore(btnMoveTaskUp, buttonsContainer.firstElementChild);

// Função que move a tarefa selecionada para cima
function moveSelectedTaskUp() {
  const getSelectedTask = document.querySelector('.selected');
  if (getSelectedTask !== null) {
    const getPreviousTask = getSelectedTask.previousElementSibling;
    if (getPreviousTask !== null) {
      const fragment = document.createDocumentFragment();
      fragment.appendChild(getPreviousTask);
      getSelectedTask.parentElement.insertBefore(fragment, getSelectedTask.nextSibling);
    }
  }
}

// Adiciona evento de clique ao botão que move a tarefa selecionada para cima
btnMoveTaskUp.addEventListener('click', moveSelectedTaskUp);

// Cria o botão que apaga a tarefa selecionada
const btnDeleteSelectedTask = document.createElement('button');
btnDeleteSelectedTask.id = 'remover-selecionado';
btnDeleteSelectedTask.innerText = 'Excluir';
buttonsContainer.insertBefore(btnDeleteSelectedTask, buttonsContainer.firstChild);

// Função que apaga a tarefa selecionada
function deleteSelectedTask() {
  const getSelectedTask = document.querySelector('.selected');
  getSelectedTask.remove();
}

// Adiciona evento de clique ao botão que apaga a tarefa selecionada
btnDeleteSelectedTask.addEventListener('click', deleteSelectedTask);

/*
Referências consultadas:
DocumentFragment => https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment
insertBefore => https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
localStorage => https://tableless.com.br/guia-f%C3%A1cil-sobre-usar-localstorage-com-javascript/
*/
