const buttonAddList = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const inputText = document.querySelector('#texto-tarefa');
const clearButton = document.querySelector('#apaga-tudo');
const clearSelected = document.querySelector('#remover-finalizados');
// const saveButton = document.querySelector('#salvar-tarefas');

function addList() {
  const li = document.createElement('li');
  li.innerHTML = inputText.value;
  taskList.appendChild(li);
  li.classList.add('toDoList');
  inputText.value = '';
}

buttonAddList.addEventListener('click', addList);

function changeBGColor(li) {
  const lis = document.getElementsByClassName('toDoList');
  for (let index = 0; index < lis.length; index += 1) {
    lis[index].style.backgroundColor = '';
  }
  // eslint-disable-next-line no-param-reassign
  li.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

taskList.addEventListener('click', changeBGColor);

function lineThrough(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

taskList.addEventListener('dblclick', lineThrough);

taskList.addEventListener('mousedown', (e) => { e.preventDefault(); }, false);

function clearList() {
  taskList.innerHTML = '';
}

clearButton.addEventListener('click', clearList);

function clearCompleted() {
  const lis = document.getElementsByClassName('toDoList');
  const lisLength = lis.length;
  for (let index = lisLength - 1; index >= 0; index -= 1) {
    if (lis[index].classList.contains('completed')) {
      taskList.removeChild(lis[index]);
    }
  }
}

clearSelected.addEventListener('click', clearCompleted);
