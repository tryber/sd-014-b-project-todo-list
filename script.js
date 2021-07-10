// Declarações iniciais baseado no exercício de Web Storage, dia 4
const inputText = document.getElementById('texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
const listToDo = document.getElementById('lista-tarefas');
const eraseBtn = document.getElementById('apaga-tudo');
const eraseTaskBtn = document.getElementById('remover-selecionado');
const eraseFinishTask = document.getElementById('remover-finalizados');

// função para adicionar na lista um novo item, capturado pelo input
// aqui preciso do localStorage, pois ao final da inserção de dados, eles estejam lá para quando o usuário abrir novamente, ele ver a lista dele novamente.

function addTask() {
  const inputValue = inputText.value;
  if (inputValue === '') {
    alert('Você precisa inserir uma tarefa');
  } else {
    const task = document.createElement('li');
    task.addEventListener('click', selectItem); // Monitoria da Fernanda
    task.addEventListener('dblclick', completeTask);
    task.innerText = inputValue;
    task.className = 'list-item';
    listToDo.appendChild(task);
    inputText.value = '';
  }
}

function selectItem(event) {
  const taskItem = document.querySelector('.selected');
  if (taskItem) {
    taskItem.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

// evento para adicionar quando clicar no botão de criar tarefa
addBtn.addEventListener('click', addTask);

// função já feita no exercício de web storage, que adiciona um item ao teclar enter. Na documentação da Mozilla fala sobre eventos e métodos wich, key, location. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key.
inputText.addEventListener('keyup', (enter) => {
  const key = enter.wich || enter.location;
  if (key === 'Enter' || key === 3) {
    addTask();
    inputText.value = '';
  }
});

// evento para deletar todas as tarefas
eraseBtn.addEventListener('click', deleteAll);

// evento para deletar apenas selecionado
eraseTaskBtn.addEventListener('click', deleteSelected);

// evento que deleta APENAS os finalizados
eraseFinishTask.addEventListener('click', deleteCompleted);

// Deleta todas as tarefas
function deleteAll() {
  let listItem = document.querySelectorAll('.list-item');
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].remove();
  }
}

// deleta uma tarefa selecionada
function deleteSelected() {
  let listItem = document.querySelector('.selected');
  listItem.remove('list-item');
}

// função de clique duplo, para tarefa ser cumprida
function completeTask(event) {
  const taskItem = document.querySelector('.completed');
  // if (taskItem) {
  //   taskItem.classList.remove('completed');
  // }
  event.target.classList.add('completed');
}

function selectItem(event) {
  const taskItem = document.querySelector('.selected');
  if (taskItem) {
    taskItem.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function deleteCompleted() {
  let listItem = document.querySelectorAll('.completed');
  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].remove();
  }
}