let botao = document.getElementById('criar-tarefa');
botao.addEventListener('click', criaTarefa);

function criaTarefa() {
  let lista = document.getElementById('lista-tarefas');
  let input = document.getElementById('texto-tarefa');
  let textoTarefa = input.value;
  lista.appendChild(document.createElement('li')).innerText = textoTarefa;
  document.querySelector('#texto-tarefa').value = '';
}
