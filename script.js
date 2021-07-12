// Script JS.
const classSelected = '.li-selected';

function changeBackground(li) {
  const oldSelectedLi = document.querySelector(classSelected);
  if (oldSelectedLi !== null) {
    oldSelectedLi.classList.remove('li-selected');
  }
  const liSelect = li;
  liSelect.classList.add('li-selected');
}

function finishTarefa(li) {
  const liThrough = li;
  const through = 'completed';
  if (liThrough.classList.contains(through)) {
    liThrough.classList.remove(through);
  } else {
    liThrough.classList.add(through);
  }
}

function selectedTarefa() {
  const conteudo = document.querySelector('#texto-tarefa').value;
  if (conteudo !== '') {
    const olPai = document.querySelector('ol');
    const li = document.createElement('li');
    li.innerText = conteudo;
    olPai.appendChild(li);
    li.className = 'li-tarefa';
    document.querySelector('#texto-tarefa').value = '';
    li.addEventListener('click', () => changeBackground(li));
    li.addEventListener('dblclick', () => finishTarefa(li));
  } else {
    alert('Não foi digitada nenhuma tarefa!');
  }
}

function cleaTarefas() {
  const listLi = document.querySelectorAll('li');
  listLi.forEach((li) => {
    li.parentElement.removeChild(li);
  });
}

function delAllFinishLi() {
  const finishLi = document.querySelectorAll('.completed');
  finishLi.forEach((li) => {
    li.parentElement.removeChild(li);
  });
}

function saveLis() {
  const lis = document.querySelector('ol').innerHTML;
  localStorage.setItem('save', lis);
}

function moveUp() {
  const liSelected = document.querySelector(classSelected);
  const lis = document.querySelectorAll('li');

  lis.forEach((li, id) => {
    if (lis[id] === liSelected) {
      const liPrevious = lis[id - 1];
      if (liPrevious !== undefined) {
        const elementPai = document.querySelector('ol');
        liPrevious.parentElement.removeChild(liPrevious);
        console.log(liPrevious);
        elementPai.insertBefore(liPrevious, liSelected.nextSibling);
      }
    }
  });
}

function moveDown() {
  const liSelected = document.querySelector(classSelected);
  const lis = document.querySelectorAll('li');

  lis.forEach((li, id) => {
    if (lis[id] === liSelected) {
      const liPrevious = lis[id + 1];
      if (liPrevious !== undefined) {
        const elementPai = document.querySelector('ol');
        liPrevious.parentElement.removeChild(liPrevious);
        elementPai.insertBefore(liPrevious, liSelected);
      }
    }
  });
}

function delSelected() {
  const selectedLi = document.querySelector(classSelected);
  selectedLi.parentElement.removeChild(selectedLi);
}

function load() {
  if (localStorage.save !== undefined) {
    document.querySelector('ol').innerHTML = localStorage.save;
  }
}

window.onload = load;

const button = document.querySelector('#criar-tarefa');
const buttonClear = document.querySelector('#apaga-tudo');
const buttonDelFinishLis = document.querySelector('#remover-finalizados');
const buttonSavelis = document.querySelector('#salvar-tarefas');
const buttonMoveUp = document.querySelector('#mover-cima');
const buttonMoveDown = document.querySelector('#mover-baixo');
const buttonDelSelected = document.querySelector('#remover-selecionado');

button.addEventListener('click', selectedTarefa);
buttonClear.addEventListener('click', cleaTarefas);
buttonDelFinishLis.addEventListener('click', delAllFinishLi);
buttonSavelis.addEventListener('click', saveLis);
buttonMoveUp.addEventListener('click', moveUp);
buttonMoveDown.addEventListener('click', moveDown);
buttonDelSelected.addEventListener('click', delSelected);
