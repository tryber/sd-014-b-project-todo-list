window.onload = function() {

  const botaoCriarTarefa = document.getElementById('criar-tarefa');
  const botaoApagarLista = document.getElementById('apaga-tudo');

  botaoCriarTarefa.addEventListener('click', addTarefa);
  botaoApagarLista.addEventListener('click', clearList);

}

function addTarefa() {

  let tarefa = document.getElementById('texto-tarefa').value;
  let lista = document.getElementById('lista-tarefas');
  let item = document.createElement('li');
  item.innerText = tarefa;
  item.addEventListener('click', markTask);
  item.addEventListener('dblclick', completeTask);
  lista.appendChild(item);
  document.getElementById('texto-tarefa').value = '';

}

function markTask(event) {
  
  let items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    items[i].style.backgroundColor = 'transparent';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';

}

function completeTask(event) {
  event.target.classList.toggle('completed');
}

function clearList() {
  let items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    items[i].remove();
  }
}
