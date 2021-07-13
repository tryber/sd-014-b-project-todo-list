const toDoList = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const taskDone = document.querySelector('.completed');
const buttonContainer = document.querySelector('.button-container');

let button = document.createElement('button');
button.innerText = 'add';
button.id = 'criar-tarefa';
buttonContainer.appendChild(button);

button.addEventListener('click', function () {
  let riseMyGloriousCreation = document.createElement('li');
  riseMyGloriousCreation.innerText = input.value;
  riseMyGloriousCreation.classList.add('li');
  toDoList.appendChild(riseMyGloriousCreation);
  input.value = '';
});

toDoList.addEventListener('click', function (event) {
  for (let value of toDoList.querySelectorAll('.li')) {
    if (value.style.backgroundColor === 'rgb(128, 128, 128)') {
      value.style.backgroundColor = 'white';
    }
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
});

toDoList.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('li')) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
});

function clearList() {
  for (let li of toDoList.querySelectorAll('.li')) {
    li.remove();
  }
}

function addsEraseButton() {
  let eraseAllButton = document.createElement('button');
  eraseAllButton.innerText = 'clear';
  eraseAllButton.id = 'apaga-tudo';
  buttonContainer.appendChild(eraseAllButton);
  eraseAllButton.addEventListener('click', clearList);
}
addsEraseButton();

function clearCompletedTasks() {
  for (let li of toDoList.querySelectorAll('.completed')) {
    li.remove();
  }
}

function addClearCompletedTasksButton() {
  let clearCompletedButton = document.createElement('button');
  clearCompletedButton.innerText = 'done';
  clearCompletedButton.id = 'remover-finalizados';
  buttonContainer.appendChild(clearCompletedButton);
  clearCompletedButton.addEventListener('click', clearCompletedTasks);
}
addClearCompletedTasksButton();

function addsClearHighlightedButton() {
  let clearHighlightedButton = document.createElement('button');
  clearHighlightedButton.innerText = 'clear highlighted';
  clearHighlightedButton.id = 'remover-selecionado';
  clearHighlightedButton.addEventListener('click', clearHighlighted);
  buttonContainer.appendChild(clearHighlightedButton);
}
addsClearHighlightedButton();

function clearHighlighted() {
  for (let value of toDoList.querySelectorAll('.li')) {
    if (value.style.backgroundColor === 'rgb(128, 128, 128)') {
      value.remove();
    }
  }
}

function saveTaskList() {
  localStorage.setItem('userList', toDoList.innerHTML);
}

function generateSaveButton() {
  saveButton = document.createElement('button');
  saveButton.innerText = 'save';
  saveButton.id = 'salvar-tarefas';
  saveButton.addEventListener('click', saveTaskList);
  buttonContainer.appendChild(saveButton);
}
generateSaveButton();

window.onload = function () {
  toDoList.innerHTML = localStorage.getItem('userList');
};
