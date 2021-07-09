function addListItem () {
  const addButton = document.querySelector('#criar-tarefa');
  const inputText = document.querySelector('#texto-tarefa');
  addButton.addEventListener('click', function () {
    const orderList = document.querySelector('#lista-tarefas');
    const listItem = document.createElement('li');
    listItem.innerText = inputText.value;
    orderList.appendChild(listItem);
    inputText.value = '';
  })
}
addListItem();
