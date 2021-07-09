const takeButton = document.querySelector('#criar-tarefa');
const takeOl = document.querySelector('#lista-tarefas');
const takeInput = document.querySelector('#texto-tarefa');

function addLi() {
  const createLi = document.createElement('li');
  takeOl.appendChild(createLi).innerText = takeInput.value;
  takeInput.value = '';
}

takeButton.addEventListener('click', addLi);

function toColoringGray(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

takeOl.addEventListener('click', toColoringGray);
