const buttonCreate = document.querySelector('#criar-tarefa');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');
const buttonDeleteAll = document.querySelector('#apaga-tudo');
const buttonMoveDown = document.querySelector('#mover-baixo');
const buttonMoveUP = document.querySelector('#mover-cima');
const buttonDelete = document.querySelector('#remover-selecionado');
const buttonSave = document.querySelector('#salvar-tarefas');
const list = document.querySelector('#lista-tarefas');

function addItemList(item) {
  const li = document.createElement('li');

  li.innerText = item;
  list.appendChild(li);
}

buttonCreate.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  addItemList(input.value);
  input.value = '';
});

function removeSelectedItemList() {
  const itemSelected = document.querySelector('.selected');

  if (itemSelected != null) {
    itemSelected.classList.remove('selected');
  }
}

list.addEventListener('click', (item) => {
  const itemList = item.target;
  removeSelectedItemList();
  itemList.classList.add('selected');
});

list.addEventListener('dblclick', (item) => {
  const itemList = item.target;
  if (itemList.classList.contains('completed')) {
    itemList.classList.remove('completed');
  } else {
    itemList.classList.add('completed');
  }
});

function removeAllItemsList() {
  const listItems = list;
  listItems.innerHTML = '';
}

buttonDeleteAll.addEventListener('click', removeAllItemsList);

function removeItemsFinished() {
  const itemsList = list.childNodes;
  for (let i = 0; i < itemsList.length; i += 1) {
    if (itemsList[i].classList.contains('completed')) {
      itemsList[i].remove();
    }
  }
}

buttonRemoveFinished.addEventListener('click', () => {
  removeItemsFinished();
  removeItemsFinished();
});

/**
 * Para cumprir o requesito 12 consultei o Bloco 5
 * JavaScript: Web Storage e me basiei nos trechos
 * de códigos lá existentes para desenvolver a logica
 * que soluciona o que pede o requesito
 * LinK: https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-web-storage/b332393f-7548-4075-83e3-f632735efb95/conteudos/11077350-a28a-47c9-9b1e-2312a4a2c9a1/local-e-session-storage/b78f3c98-e93d-41d9-a9dc-ed8776f776d1?use_case=next_button
 */
function task(li) {
  const nameTask = li.innerHTML;
  const completed = li.classList.contains('completed');
  return {
    name: nameTask,
    isCompleted: completed,
  };
}

function addTasksInLocalStorage() {
  const oldList = [];
  const li = list.childNodes;
  for (let i = 0; i < li.length; i += 1) {
    oldList[i] = task(li[i]);
  }
  localStorage.setItem('tasks', JSON.stringify(oldList));
  alert('Salvo com sucesso!');
}

function insertTasksInDOM() {
  const tasksList = JSON.parse(localStorage.getItem('tasks'));
  for (let i = 0; i < tasksList.length; i += 1) {
    const taskItem = document.createElement('li');
    taskItem.innerText = tasksList[i].name;
    if (tasksList[i].isCompleted) {
      taskItem.classList.add('completed');
    }
    list.appendChild(taskItem);
  }
}

buttonSave.addEventListener('click', addTasksInLocalStorage);

function moveUp() {
  const itemsList = list.childNodes;
  for (let i = 1; i < itemsList.length; i += 1) {
    if (itemsList[i].classList.contains('selected')) {
      const up = itemsList[i].innerText;
      const down = itemsList[i - 1].innerText;

      itemsList[i - 1].innerText = up;
      itemsList[i - 1].classList.add('selected');

      itemsList[i].innerText = down;
      itemsList[i].classList.remove('selected');
      break;
    }
  }
}

buttonMoveUP.addEventListener('click', moveUp);

function moveDown() {
  const itemsList = list.childNodes;
  for (let i = 0; i < itemsList.length - 1; i += 1) {
    if (itemsList[i].classList.contains('selected')) {
      const down = itemsList[i].innerText;
      const up = itemsList[i + 1].innerText;

      itemsList[i + 1].innerText = down;
      itemsList[i + 1].classList.add('selected');

      itemsList[i].innerText = up;
      itemsList[i].classList.remove('selected');
      break;
    }
  }
}

buttonMoveDown.addEventListener('click', moveDown);

function deleteTask() {
  const taskSelected = document.querySelector('.selected');
  taskSelected.remove();
}

buttonDelete.addEventListener('click', deleteTask);

function initialRenderization() {
  if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks', JSON.stringify([]));
  }
}

window.onload = () => {
  initialRenderization();
  insertTasksInDOM();
};
