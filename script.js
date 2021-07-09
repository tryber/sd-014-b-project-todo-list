function addTask() {
  const addButton = document.getElementById('criar-tarefa');
  addButton.addEventListener('click', () => {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    const list = document.querySelector('#lista-tarefas');
    const input = document.getElementById('texto-tarefa');
    const listItem = document.createElement('li');
    if (input.value !== '') {
      listItem.innerText = input.value;
      list.appendChild(listItem);
      input.value = '';
    }
  });
}

function clearList() {
  const clearButton = document.getElementById('apaga-tudo');
  clearButton.addEventListener('click', () => {
    const listItem = document.querySelectorAll('li');
    for (let i = 0; i < listItem.length; i += 1) {
      listItem[i].remove();
    }
  });
}

function selectListItem() {
  const list = document.querySelector('#lista-tarefas');
  // eslint-disable-next-line sonarjs/cognitive-complexity
  list.addEventListener('click', (event) => {
    const listItem = document.querySelectorAll('li');
    for (let i = 0; i < listItem.length; i += 1) {
      if (listItem[i] === event.target) {
        if (listItem[i].classList.contains('selected')) {
          listItem[i].classList.remove('selected');
        } else {
          listItem[i].classList.add('selected');
        }
      } else {
        listItem[i].classList.remove('selected');
      }
    }
  });
}

function riskListItem() {
  const list = document.querySelector('#lista-tarefas');
  list.addEventListener('dblclick', (event) => {
    if (!event.target.classList.contains('completed')) {
      event.target.classList.add('completed');
    } else {
      event.target.classList.remove('completed');
    }
  });
}

function removeCompleted() {
  const removeButton = document.getElementById('remover-finalizados');
  removeButton.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('.completed');
    for (let i = 0; i < completedTasks.length; i += 1) {
      completedTasks[i].remove();
    }
  });
}

function removeSelected() {
  const removeSelectedButton = document.getElementById('remover-selecionado');
  removeSelectedButton.addEventListener('click', () => {
    const selectedItem = document.querySelector('.selected');
    selectedItem.remove();
  });
}

function savingList() {
  const saveButton = document.getElementById('salvar-tarefas');
  saveButton.addEventListener('click', () => {
    const list = document.getElementById('lista-tarefas');
    localStorage.setItem('List-Item', list.innerHTML);
  });
}

// eslint-disable-next-line func-names
window.onload = function () {
  addTask();
  clearList();
  selectListItem();
  riskListItem();
  removeCompleted();
  removeSelected();
  savingList();
  const savedList = localStorage.getItem('List-Item');
  document.getElementById('lista-tarefas').innerHTML = savedList;
};
