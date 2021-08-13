const ol = document.getElementById('lista-tarefas');

function changeColorToGray(event) {
  event.target.classList.add('selected');
  const selected = document.querySelectorAll('.selected');
  for (let index = 0; index < selected.length; index += 1) {
    if (selected.length > 1) {
      selected[index].classList.remove('selected');
      event.target.classList.add('selected');
    }
  }
}

function completedListItem(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function createListItem() {
  const button = document.getElementById('criar-tarefa');
  const input = document.getElementById('texto-tarefa');
  const ol = document.getElementById('lista-tarefas');
  button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.className = 'listItem';
    li.innerHTML = input.value;
    li.addEventListener('click', changeColorToGray);
    li.addEventListener('dblclick', completedListItem);
    ol.appendChild(li);
    input.value = '';
  });
}
createListItem();

function deleteListItems() {
  const deleteButton = document.getElementById('apaga-tudo');
  const ol = document.getElementById('lista-tarefas');
  deleteButton.addEventListener('click', () => {
    const listItems = document.querySelectorAll('.listItem');
    for (let index = 0; index < listItems.length; index += 1) {
      ol.removeChild(listItems[index]);
    }
  });
}
deleteListItems();

function removeCompleted() {
  const removeCompletedButton = document.getElementById('remover-finalizados');
  const ol = document.getElementById('lista-tarefas');
  removeCompletedButton.addEventListener('click', () => {
    const completedItems = document.querySelectorAll('.completed');
    for (let index = 0; index < completedItems.length; index += 1) {
      ol.removeChild(completedItems[index]);
    }
  });
}
removeCompleted();

function saveLocalStorage() {
  const saveButton = document.getElementById('salvar-tarefas');
  saveButton.addEventListener('click', () => {
    const ol = document.getElementById('lista-tarefas');
    const contentsListItem = ol.innerHTML;
    localStorage.setItem('lista', JSON.stringify(contentsListItem));
  });
}
saveLocalStorage();

function recoverSave() {
  if (window.localStorage.getItem('lista')) {
    const save = JSON.parse(window.localStorage.getItem('lista'));
    ol.innerHTML = save;
    const listItems = document.querySelectorAll('.listItem');
    for (let index = 0; index < listItems.length; index += 1) {
      listItems[index].addEventListener('click', changeColorToGray);
      listItems[index].addEventListener('dblclick', completedListItem);
    }
  }
}
recoverSave();

function moveUp() {
  const selected = document.querySelector('.selected');
  const listItems = document.querySelectorAll('.listItem');
  const completed = document.querySelectorAll('.completed');
  for (let index = 1; index < listItems.length; index += 1) {
    if (selected === listItems[0]) {
      alert('Num vai dar não');
      break;
    } else if (selected === listItems[index]) {
      const saveSelected = listItems[index - 1].innerHTML;
      listItems[index - 1].innerHTML = listItems[index].innerHTML;
      listItems[index].innerHTML = saveSelected;
      selected.classList.remove('selected');
      listItems[index - 1].classList.add('selected');
    }
  }
}

function moveUpButton() {
  const button = document.getElementById('mover-cima');
  button.addEventListener('click', moveUp);
}
moveUpButton();

function moveDown() {
  const selected = document.querySelector('.selected');
  const listItems = document.querySelectorAll('.listItem');

  for (let index = 0; index < listItems.length; index += 1) {
    if (selected === listItems[listItems.length - 1]) {
      alert('Num vai dar não');
      break;
    } else if (selected === listItems[index]) {
      const target = listItems[index + 1].innerHTML;
      listItems[index + 1].innerHTML = listItems[index].innerHTML;
      listItems[index].innerHTML = target;
      selected.classList.remove('selected');
      listItems[index + 1].classList.add('selected');
    }
  }
}

function moveDownButton() {
  const button = document.getElementById('mover-baixo');
  button.addEventListener('click', moveDown);
}
moveDownButton();

function removeSelected() {
  const button = document.getElementById('remover-selecionado');
  const ol = document.getElementById('lista-tarefas');
  button.addEventListener('click', () => {
    const selected = document.querySelector('.selected');
    ol.removeChild(selected);
  });
}
removeSelected();
