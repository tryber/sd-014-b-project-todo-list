const novaTarefa = document.getElementById("texto-tarefa");
const botaoAdicionar = document.getElementById("criar-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");

botaoAdicionar.addEventListener('click', () => {
  const novoItem = document.createElement('li');
  novoItem.innerText = novaTarefa.value;
  novoItem.className = 'tarefa';
  listaTarefas.appendChild(novoItem);
  novaTarefa.value = '';
});
