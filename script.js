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
  const evento = event;
  for (let index = 0; index < takeOl.children.length; index += 1) {
    if (takeOl.children[index].classList.length === 1) {
      evento.target.parentElement.children[index].classList.remove('selected');
    }
    if (takeOl.children[index].classList.length === 0) {
      evento.target.className = 'selected';
    }
  }
}

takeOl.addEventListener('click', toColoringGray);
