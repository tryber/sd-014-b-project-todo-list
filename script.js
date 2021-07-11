function createListItem(text) {
  const listItem = document.createElement('li');
  // listItem.className = '';
  listItem.innerText = text;
  return listItem;
}

function textListItem() {
  const currentInput = document.getElementById('texto-tarefa').value;
  return currentInput;
}

function addIdStyle() {
  const listedItem = document.querySelectorAll('li');
  for (const indexIn of listedItem) { indexIn.id = ''; }
  this.id = 'selected';
}

function addClassStyle() {
  if (this.className === 'completed') {
    this.classList.remove('completed');
  } else {
    this.classList.add('completed');
  }
}

function addListItem() {
  const addItem = document.getElementById('criar-tarefa');
  addItem.addEventListener('click', () => {
    const ordList = document.getElementById('lista-tarefas');
    const currentInput = document.getElementById('texto-tarefa');
    const currentItem = createListItem(textListItem());
    currentItem.addEventListener('click', addIdStyle);
    currentItem.addEventListener('dblclick', addClassStyle);
    ordList.appendChild(currentItem);
    currentInput.value = '';
  });
}

window.onload = () => {
  addListItem();
};
