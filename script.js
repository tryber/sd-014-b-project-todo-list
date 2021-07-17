const buttonOne = document.querySelector('#criar-tarefa');

function moreTask() {
  const enterTask = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const listTask = document.createElement('li');
  listTask.className = 'itensList';
  list.appendChild(listTask);
  listTask.innerText = enterTask.value;
  enterTask.value = '';
}

buttonOne.addEventListener('click', moreTask);

function bgSelect(event) {
  itensList = document.querySelector('.itensList.background');
  if (itensList === null) {
    event.target.classList.add('background');
  } else {
    const itemSelect = document.querySelector('.background');
    itemSelect.classList.remove('background');
    event.target.classList.add('background');
  }
}
document.querySelector('#lista-tarefas').addEventListener('click', bgSelect);

function taskCompleted(event) {
  const chooseStyle = document.querySelector('.itensList.completed.background');
  if (chooseStyle === null) {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}

document
  .querySelector('#lista-tarefas')
  .addEventListener('dblclick', taskCompleted);

function deleteItens() {}
document.querySelector('#apaga-tudo').addEventListener('click', deleteItens);
