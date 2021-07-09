const takeButton = document.querySelector('#criar-tarefa');
const takeLi = document.querySelector('#lista-tarefas');
const takeInput = document.querySelector('#texto-tarefa');

function addLi() {
  const createLi = document.createElement('li');
  takeLi.appendChild(createLi).innerText = takeInput.value;
  takeInput.value = '';
}

takeButton.addEventListener('click', addLi);
