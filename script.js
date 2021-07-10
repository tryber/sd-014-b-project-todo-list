function createListItem(text) {
  const listItem = document.createElement('li');
  listItem.className = 'listItem';
  listItem.innerText = text;
  return listItem;
}

function textListItem() {
  const currentInput = document.getElementById('texto-tarefa').value;
  return currentInput;
}

function addIdStyle() {
  const listedItem = document.querySelectorAll('.listItem');
  for (const index of listedItem) {
    index.addEventListener('click', () => {
      for (const indexIn of listedItem) { indexIn.id = ''; }
      index.id = 'selected';
    });
  }
}

function addListItem() {
  const addItem = document.getElementById('criar-tarefa');
  addItem.addEventListener('click', () => {
    const ordList = document.getElementById('lista-tarefas');
    const currentInput = document.getElementById('texto-tarefa');
    const currentItem = createListItem(textListItem());
    ordList.appendChild(currentItem);
    currentInput.value = '';
    addIdStyle();
  });
}

window.onload = () => {
  addListItem();
};
