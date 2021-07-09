function criaTarefa() {
  const receberInput = document.getElementById('texto-tarefa');
  const newElement = document.createElement('li');
  newElement.innerText = receberInput.value;

  const listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.appendChild(newElement);
  receberInput.value = '';
}
const botaoAdicionar = document.getElementById('criar-tarefa');
botaoAdicionar.addEventListener('click', criaTarefa);
