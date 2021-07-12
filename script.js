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

const takeClear = document.querySelector('#remover-finalizados');
function toClearCompleted() {
  const takeClassCompleted = document.querySelectorAll('.completed');
  for (let index = 0; index < takeClassCompleted.length; index += 1) {
    takeClassCompleted[index].remove();
  }
}

takeClear.addEventListener('click', toClearCompleted);

const saveButton = document.querySelector('#salvar-tarefas');
function saveList() {
  const valueOfSaveList = takeOl.innerHTML;
  localStorage.setItem('list', valueOfSaveList);
}

window.onload = () => {
  takeOl.innerHTML = localStorage.getItem('list');
};

saveButton.addEventListener('click', saveList);

const takeToUpListButton = document.querySelector('#mover-cima');
function toUpListButton() {
  const takeLi = document.querySelectorAll('li');
  for (let index = 0; index < takeLi.length; index += 1) {
    if (takeLi[index].previousElementSibling && takeLi[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      takeLi[index].parentElement.insertBefore(takeLi[index], takeLi[index].previousElementSibling);
    }
  }
}

takeToUpListButton.addEventListener('click', toUpListButton);

const takeToDownListButton = document.querySelector('#mover-baixo');
function toDownListButton() {
  const takeLi = document.querySelectorAll('li');
  for (let index = 0; index < takeLi.length; index += 1) {
    if (takeLi[index].nextElementSibling && takeLi[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      takeLi[index].parentElement.insertBefore(takeLi[index], takeLi[index + 1].nextElementSibling);
    }
  }
}

takeToDownListButton.addEventListener('click', toDownListButton);

const takeRemoveSelectedButton = document.querySelector('#remover-selecionado');
function removeSelected() {
  const takeLi = document.querySelectorAll('li');
  for (let index = 0; index < takeLi.length; index += 1) {
    if (takeLi[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      takeLi[index].remove();
    }
  }
}

takeRemoveSelectedButton.addEventListener('click', removeSelected);
