const moveUpButton = document.querySelector('#mover-cima');
const moveDownButton = document.querySelector('#mover-baixo');
const addButton = document.querySelector('#criar-tarefa');
const saveButton = document.querySelector('#salvar-tarefas');
const eraseButton = document.querySelector('#apaga-tudo');
const eraseCompletedTaskButton = document.querySelector('#remover-finalizados');
const killButton = document.querySelector('#remover-selecionado');
const list = document.querySelector('#lista-tarefas');

// Verificar o funcionamento da saveList e eraseList. Havia feito de uma forma muito mais complexa, mas o code review do Esdras mostrou que seria muito mais simples!

window.onload = function load() {
  list.innerHTML = localStorage.getItem('list');
  selectItem();
};

// Verificar o funcionamento do outerHTML na monitoria. Por que a saveList funciona com innerHTML e os Moves não?

function goMoveUp() {
  let getSelected = document.querySelector('#selected');
  let beforeGetSelected = getSelected.previousElementSibling;
  if (beforeGetSelected === null) {
  } else {
    let keepHTML = getSelected.outerHTML;
    getSelected.outerHTML = beforeGetSelected.outerHTML;
    beforeGetSelected.outerHTML = keepHTML;
    selectItem();
  }
}

function moveUp() {
  const selectedItem = document.querySelectorAll('.tarefa');
  if (selectedItem.length === 0) {
    alert ('Sem item na lista...');
  } else {
    const getSelected = document.querySelector('#selected');
    if (getSelected !== null) {
      goMoveUp();
    } else {
      alert ('Selecione o item a ser movido!');
    }
  }
}

function goMoveDown() {
  console.log('goMoveDown funcionando!')
  let getSelected = document.querySelector('#selected');
  let afterGetSelected = getSelected.nextElementSibling;
  if (afterGetSelected === null) {
  } else {
    let keepHTML = getSelected.outerHTML;
    getSelected.outerHTML = afterGetSelected.outerHTML;
    afterGetSelected.outerHTML = keepHTML;
    selectItem();
  }
} 


function moveDown() {
  const selectedItem = document.querySelectorAll('.tarefa');
  if (selectedItem.length === 0) {
    alert ('Sem item na lista...');
  } else {
    const getSelected = document.querySelector('#selected');
    if (getSelected !== null) {
      goMoveDown();
    } else {
      alert ('Selecione o item a ser movido!');
    }
  }
}

function changeColor(item) {
  const selectedItem = document.querySelectorAll('.tarefa');
  for (let index = 0; index <= selectedItem.length - 1; index += 1) {
    selectedItem[index].style.backgroundColor = '';
    selectedItem[index].id = '';
  }
  item.target.style.backgroundColor = 'rgb(128, 128, 128)';
  item.target.id = 'selected';
}

function markAsCompleted(item) {
  if (item.target.className === 'tarefa completed') {
    item.target.classList.remove('completed');
  } else {
    item.target.classList.add('completed');
  }
}

function selectItem() {
  const selectedItem = document.querySelectorAll('.tarefa');
  for (let index = 0; index <= selectedItem.length - 1; index += 1) {
    selectedItem[index].addEventListener('dblclick', markAsCompleted);
    selectedItem[index].addEventListener('click', changeColor);
  }
}

function addListItem() {
  const input = document.querySelector('#texto-tarefa');  
  if (input.value === '') {
    alert('Inserir um valor!');
  } else {
    const listItem = document.createElement('li');
    listItem.innerText = input.value;
    listItem.className = 'tarefa';
    list.appendChild(listItem);
    input.value = '';
    selectItem();
  }
}

function eraseList() {
  list.innerHTML = '';
}

function removeListItem() {
  const selectedItem = document.querySelectorAll('.tarefa');
  for (let index = 0; index <= selectedItem.length - 1; index += 1) {
    if (selectedItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      const getlist = document.querySelector('#lista-tarefas');
      getlist.removeChild(selectedItem[index]);
    }
  }
}

function removeCompleted() {
  const getCompletedItem = document.querySelectorAll('.completed');
  for (let index = 0; index <= getCompletedItem.length - 1; index += 1) {
    list.removeChild(getCompletedItem[index]);
  }
}

function saveList() {
  localStorage.setItem('list', list.innerHTML);
}

moveUpButton.addEventListener('click', moveUp);
moveDownButton.addEventListener('click', moveDown);
addButton.addEventListener('click', addListItem);
saveButton.addEventListener('click', saveList);
eraseButton.addEventListener('click', eraseList);
eraseCompletedTaskButton.addEventListener('click', removeCompleted);
killButton.addEventListener('click', removeListItem);
