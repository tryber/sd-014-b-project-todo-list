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
    li.addEventListener('click', function () { changeBackground(li); });
    li.addEventListener('dblclick', function () { finishTarefa(li); });
  } else {
    alert('Não foi digitada nenhuma tarefa!');
  }
}

const button = document.querySelector('#criar-tarefa');

button.addEventListener('click', selectedTarefa);
