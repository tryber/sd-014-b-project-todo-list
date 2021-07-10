const buttonCreate = document.querySelector('#criar-tarefa');
const Itenslist = document.querySelector('#lista-tarefas');

function addItemList(item) {
  const list = document.querySelector('#lista-tarefas');
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
