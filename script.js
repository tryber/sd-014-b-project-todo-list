const clickButton = document.querySelector('#criar-tarefa');

function addTask() {
  const enterTask = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const listTask = document.createElement('li');
  list.appendChild(listTask);
  listTask.innerText = enterTask.value;
  enterTask.value = '';
}
clickButton.addEventListener('click', addTask);

function clickItem(event) {
  const listItem = document.querySelector('.listIten.background');
  if (listItem === null) {
    event.target.classList.add('background');
  } else {
    const selectItem = document.querySelector('.background');
    selectItem.classList.remove('background');
    event.target.classList.add('background');
  }
}
document.querySelector('#lista-tarefas').addEventListener('click', clickItem);
