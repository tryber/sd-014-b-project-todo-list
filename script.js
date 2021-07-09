const takeButton = document.querySelector('#criar-tarefa');
const takeOl = document.querySelector('#lista-tarefas');
const takeInput = document.querySelector('#texto-tarefa');

function addLi() {
  const createLi = document.createElement('li');
  const liBackgroundColor = takeOl.appendChild(createLi);
  liBackgroundColor.innerText = takeInput.value;
  liBackgroundColor.style.backgroundColor = 'transparent';
  takeInput.value = '';
}

takeButton.addEventListener('click', addLi);

function toColoringGray(event) {
  const evnt = event;
  for (let index = 0; index < takeOl.children.length; index += 1) {
    if (evnt.target.parentElement.children[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      evnt.target.parentElement.children[index].style.backgroundColor = 'transparent';
    }
    if (evnt.target.style.backgroundColor === 'transparent') {
      evnt.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
}

takeOl.addEventListener('click', toColoringGray);

function toTachedText(event) {
  const evento = event;
  if (evento.target.classList.length === 1) {
    evento.target.classList.remove('completed');
  } else if (evento.target.classList.length === 0) {
    evento.target.className = 'completed';
  }
}

takeOl.addEventListener('dblclick', toTachedText);
