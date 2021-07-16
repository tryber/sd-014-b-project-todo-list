const createButton = document.getElementById('criar-tarefa');
const itens = document.getElementById('lista-tarefas');
const deleteItens = document.getElementById('apaga-tudo');
const cleanList = document.getElementById('remover-finalizados');
const saveList = document.getElementById('salvar-tarefas');
const moveToDownside = document.getElementById('mover-baixo');
const moveToUpside = document.getElementById('mover-cima');
const removeItem = document.getElementById('remover-selecionado');

function addItemList(item) {
  const li = document.createElement('li');
  li.innerText = item;
  itens.appendChild(li);
}

createButton.addEventListener('click', () => {
  const input = document.getElementById('texto-tarefa');
  addItemList(input.value);
  input.value = '';
});

function removeSelectedItem() {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem != null) {
    selectedItem.classList.remove('selected');
  }
}

itens.addEventListener('click', (item) => {
  const itemList = item.target;
  removeSelectedItem();
  itemList.classList.add('selected');
});

itens.addEventListener('dblclick', (item) => {
  const itemList = item.target;
  if (itemList.classList.contains('completed')) {
    itemList.classList.remove('completed');
  } else {
    itemList.classList.add('completed');
  }
});

function removeAllItens() {
  const list = document.querySelector('#lista-tarefas');
  list.innerHTML = '';
}

deleteItens.addEventListener('click', () => {
  removeAllItens();
});

function removeFinishedItens() {
  const list = itens.childNodes;
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].classList.contains('completed')) {
      list[index].remove();
    }
  }
}

cleanList.addEventListener('click', () => {
  removeFinishedItens();
  removeFinishedItens();
});

function storeList() {
  const lis = document.querySelector('ol').innerHTML;
  localStorage.setItem('save', lis);
}
function load() {
  if (localStorage.save !== undefined) {
    document.querySelector('ol').innerHTML = localStorage.save;
  }
}

window.onload = load;
saveList.addEventListener('click', storeList);

function moveUp() {
  const itensList = itens.childNodes;
  for (let index = 1; index < itensList.length; index += 1) {
    if (itensList[index].classList.contains('selected')) {
      const up = itensList[index].innerText;
      const down = itensList[index - 1].innerText;

      itensList[index - 1].innerText = up;
      itensList[index - 1].classList.add('selected');

      itensList[index].innerText = down;
      itensList[index].classList.remove('selected');
      break;
    }
  }
}

moveToUpside.addEventListener('click', moveUp);

function moveDown() {
  const itensList = itens.childNodes;
  for (let index = 0; index < itensList.length - 1; index += 1) {
    if (itensList[index].classList.contains('selected')) {
      const down = itensList[index].innerText;
      const up = itensList[index + 1].innerText;

      itensList[index + 1].innerText = down;
      itensList[index + 1].classList.add('selected');

      itensList[index].innerText = up;
      itensList[index].classList.remove('selected');
      break;
    }
  }
}

moveToDownside.addEventListener('click', moveDown);

function removeTask() {
  const selectedTask = document.querySelector('.selected');
  selectedTask.remove();
}

removeItem.addEventListener('click', removeTask);
