const buttonCreate = document.querySelector('#criar-tarefa');

function addItemList(item) {
  const list = document.querySelector('#lista-tarefas');
  const li = document.createElement('li');

  li.innerText = item;
  list.appendChild(li);
}

buttonCreate.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  addItemList(input.value);
  input.value = '';
});
