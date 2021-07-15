// Declarações iniciais baseado no exercício de Web Storage, dia 4
const inputText = document.getElementById('texto-tarefa');
const addBtn = document.getElementById('criar-tarefa');
const listToDo = document.getElementById('lista-tarefas');
const eraseBtn = document.getElementById('apaga-tudo');
const eraseTaskBtn = document.getElementById('remover-selecionado');
const eraseFinishTask = document.getElementById('remover-finalizados');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');
const saveTasks = document.getElementById('salvar-tarefas');

// aqui preciso do localStorage, pois ao final da inserção de dados, eles estejam lá para quando o usuário abrir novamente, ele ver a lista dele novamente.

function selectItem(event) {
  if (moveUp.hasAttribute('disabled')) {
    moveUp.removeAttribute('disabled');
  }
  if (moveDown.hasAttribute('disabled')) {
    moveDown.removeAttribute('disabled');
  }
  const taskItem = document.querySelector('.selected');
  if (taskItem) {
    taskItem.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

// função para adicionar na lista um novo item, capturado pelo input
function addTask() {
  const inputValue = inputText.value;
  if (inputValue === '') {
    alert('Você precisa inserir uma tarefa');
  } else {
    const task = document.createElement('li');
    task.addEventListener('click', selectItem); // Monitoria da Fernanda
    task.addEventListener('dblclick', completeTask);
    task.addEventListener('onfocus', deleteSelected); // na teoria, isto vai deletar o que estiver selecionado
    task.innerText = inputValue;
    task.className = 'list-item';
    listToDo.appendChild(task);
    inputText.value = '';
  }
}

// Deleta todas as tarefas
function deleteAll() {
  const listItemDel = document.querySelectorAll('.list-item');
  for (let i = 0; i < listItemDel.length; i += 1) {
    listItemDel[i].remove();
  }
}

// deleta uma tarefa selecionada
function deleteSelected() {
  const listItemSelect = document.querySelector('.selected');
  listItemSelect.remove();
}

// função de clique duplo, para tarefa ser cumprida
function completeTask(event) {
  event.target.classList.toggle('completed'); // evento toggle disponível na documentação. https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
}

function deleteCompleted() {
  const listItemDelCompleted = document.querySelectorAll('.completed');
  for (let i = 0; i < listItemDelCompleted.length; i += 1) {
    listItemDelCompleted[i].remove();
  }
}

function moveItem() { // refatorado junto com o Victor Martins - 14B
  const listItemSelect = document.querySelector('.selected');
  if (listItemSelect === listToDo.firstElementChild) {
    moveUp.setAttribute('disabled', 'true');
  } else {
    listToDo.insertBefore(listItemSelect, listItemSelect.previousElementSibling);
  }
}

function moveItemBx() {
  const listItemSelect2 = document.querySelector('.selected');
  if (listItemSelect2 === listToDo.lastElementChild) {
    moveDown.setAttribute('disabled', 'true');
  } else {
    moveDown.removeAttribute('disabled');
    listToDo.insertBefore(listItemSelect2.nextElementSibling, listItemSelect2);
  }
}

// função que salva a lista no localstorage
function saveList() {
  const SaveHtmlList = listToDo.innerHTML;
  localStorage.setItem('taskList', JSON.stringify(SaveHtmlList));
  if (SaveHtmlList !== null) {
    alert('Lista salva com sucesso!');
  }
}

// evento para deletar todas as tarefas
eraseBtn.addEventListener('click', deleteAll);

// evento para deletar apenas selecionado
eraseTaskBtn.addEventListener('click', deleteSelected);

// evento que deleta APENAS os finalizados
eraseFinishTask.addEventListener('click', deleteCompleted);

// evento para salvar as tarefas
saveTasks.addEventListener('click', saveList);

// evento para mover para cima um item
moveUp.addEventListener('click', moveItem);

// evento para mover para cima um item
moveDown.addEventListener('click', moveItemBx);

// evento para adicionar quando clicar no botão de criar tarefa
addBtn.addEventListener('click', addTask);

// função já feita no exercício de web storage, que adiciona um item ao teclar enter. Na documentação da Mozilla fala sobre eventos e métodos wich, key, location. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key.
inputText.addEventListener('keyup', (enter) => {
  const key = enter.wich || enter.key;
  if (key === 'Enter' || key === 3 || key === 13) {
    addTask();
    inputText.value = '';
  }
});

window.onload = () => {
  // método window.confirm. https://developer.mozilla.org/pt-BR/docs/Web/API/Window/confirm. Surgiu da idéia de carregar a lista se o usuário quiser, visando usabilidade e dinamismo para a aplicação.
  if (localStorage) {
    const confirms = window.confirm('Você deseja carregar a última lista salva?');
    if (confirms) { // variável sozinha dentro do if verifica se ela é true. Dica de monitoria.
      listToDo.innerHTML = JSON.parse(localStorage.getItem('taskList'));
      localStorage.clear();
    }
  }
};
