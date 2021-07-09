// Script JS.
function changeBackground(li) {
  const oldSelectedLi = document.querySelector('.li-selected');
  if (oldSelectedLi !== null) {
    oldSelectedLi.className = 'li-tarefa';
  }
  const liSelect = li;
  liSelect.className = 'li-selected';
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
  } else {
    alert('Não foi digitada nenhuma tarefa!');
  }
}

const button = document.querySelector('#criar-tarefa');

button.addEventListener('click', selectedTarefa);
