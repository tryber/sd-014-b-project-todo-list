const button = document.getElementById('criar-tarefa');
function addItem() {
  const input = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  const item = document.createElement('li');
  item.innerText = input.value;
  list.appendChild(item);
  input.value = '';
}
button.addEventListener('click', addItem);
