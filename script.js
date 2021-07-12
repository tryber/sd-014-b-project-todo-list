// Script JS.
function changeBackground(li) {
  const oldSelectedLi = document.querySelector('.li-selected');
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
  finishLi.forEach((el) => {
    el.parentElement.removeChild(el);
  });
}

function saveLis() {
  const lis = document.querySelector('ol').innerHTML;
  localStorage.setItem('save', lis);
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

button.addEventListener('click', selectedTarefa);
buttonClear.addEventListener('click', cleaTarefas);
buttonDelFinishLis.addEventListener('click', delAllFinishLi);
buttonSavelis.addEventListener('click', saveLis);
