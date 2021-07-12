const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', addListItem);

function addListItem() {
  const input = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas')
  const listItem = document.createElement('li');
  console.log(input.value);
  listItem.innerText = input.value;
  list.appendChild(listItem);
  input.value = '';
}