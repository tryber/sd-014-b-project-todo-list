window.onload = function() {

  const botaoCriarTarefa = document.getElementById('criar-tarefa');
  botaoCriarTarefa.addEventListener('click', addTarefa);

}

function addTarefa() {

  let tarefa = document.getElementById('texto-tarefa').value;
  let lista = document.getElementById('lista-tarefas');
  let item = document.createElement('li');
  item.innerText = tarefa;
  item.addEventListener('click', markTask);
  lista.appendChild(item);
  document.getElementById('texto-tarefa').value = '';

}

function markTask(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
