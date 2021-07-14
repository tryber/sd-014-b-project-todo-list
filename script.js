const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const buttonRemoveAll = document.querySelector('#apaga-tudo');
const buttonCompletedRemove = document.querySelector('#remover-finalizados');

function addInTodoList() {
  if (input.value.length === 0) {
    alert('digite uma tarefa')
  } else {
    const valueInput = input.value;
    const listLi = document.createElement('li');
    listLi.innerText = valueInput;
    listLi.className = 'to-do';
    list.appendChild(listLi);
    input.value = '';
  }
}

function changeColorLi(event) {
  const allLi = document.querySelectorAll('.to-do');
  for (let i = 0; i < allLi.length; i++) {
    allLi[i].classList.remove('to-do-grey');
  }
  event.target.classList.add('to-do-grey');
}

function completedLi() {
  list.addEventListener('dblclick', event => {
    event.target.classList.toggle('completed');
  });
}

function removeALl() {
  buttonRemoveAll.addEventListener('click', () => {
    list.parentNode.removeChild(list);
  });
}

function removeCompleted() {
  buttonCompletedRemove.addEventListener('click', () => {
    const completed = document.querySelectorAll('.completed');
    for (let key = 0; key < completed.length; key += 1) {
      completed[key].remove();
    }
  });
}

window.onload = function() {
  button.addEventListener('click', addInTodoList);
  list.addEventListener('click', changeColorLi);
  completedLi();
  removeALl()
  removeCompleted()
}
