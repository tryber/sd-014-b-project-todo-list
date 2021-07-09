window.onload = function() {

  const botaoCriarTarefa = document.getElementById('criar-tarefa');
  botaoCriarTarefa.addEventListener('click', addTarefa);

}

function addTarefa() {

  let tarefa = document.getElementById('texto-tarefa').value;
  let lista = document.getElementById('lista-tarefas');
  let item = document.createElement('li');
  item.innerText = tarefa;
  
  lista.appendChild(item);
  document.getElementById('texto-tarefa').value = '';

}
