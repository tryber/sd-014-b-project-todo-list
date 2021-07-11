const buttonCreate = document.querySelector('#criar-tarefa');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');
const buttonDeleteAll = document.querySelector('#apaga-tudo');
const Itenslist = document.querySelector('#lista-tarefas');

function addItemList(item) {
  const list = Itenslist;
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

Itenslist.addEventListener('click', (item) => {
  const itemList = item.target;
  removeSelectedItemList();
  itemList.classList.add('selected');
});

Itenslist.addEventListener('dblclick', (item) => {
  const itemList = item.target;
  if (itemList.classList.contains('completed')) {
    itemList.classList.remove('completed');
  } else {
    itemList.classList.add('completed');
  }
});

function removeAllItemsList() {
  const listItems = Itenslist;
  listItems.innerHTML = '';
}

buttonDeleteAll.addEventListener('click', () => {
  removeAllItemsList();
});

function removeItemsFinished() {
  const itemsList = Itenslist.childNodes;
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
