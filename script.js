const takeCreateButton = document.querySelector('#criar-tarefa');
const takeOl = document.querySelector('#lista-tarefas');
const takeInput = document.querySelector('#texto-tarefa');

function addLi() {
  const createLi = document.createElement('li');
  const liBackgroundColor = takeOl.appendChild(createLi);
  liBackgroundColor.innerText = takeInput.value;
  liBackgroundColor.style.backgroundColor = 'transparent';
  takeInput.value = '';
}

takeCreateButton.addEventListener('click', addLi);

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

// a iteração dentro do for a seguir foi consultada na seguinte página do StackOverflow, numa resposta para uma dificuldade semelhante a que eu estava tendo com a iteração da remoção dos meus li's. O usuário se chama 'jfriend00' e o link para a página é: https://stackoverflow.com/questions/28316289/javascript-remove-not-removing-all-elements

const takeClearButton = document.querySelector('#apaga-tudo');
function toClearList() {
  for (let index = takeOl.children.length - 1; index >= 0; index -= 1) {
    takeOl.children[index].remove();
  }
}

takeClearButton.addEventListener('click', toClearList);
