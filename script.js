// Script JS.
function selectedTarefa() {
  const conteudo = document.querySelector('#texto-tarefa').value;
  if (conteudo !== '') {
    const olPai = document.querySelector('ol');
    const li = document.createElement('li');
    li.innerText = conteudo;
    olPai.appendChild(li);
    document.querySelector('#texto-tarefa').value = '';
  } else {
    alert('Não foi digitada nenhuma tarefa!');
  }
}
const button = document.querySelector('#criar-tarefa');

button.addEventListener('click', selectedTarefa);
