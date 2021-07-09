function addListItem () {
  const addButton = document.querySelector('#criar-tarefa');
  const inputText = document.querySelector('#texto-tarefa');
  addButton.addEventListener('click', function () {
    const orderList = document.querySelector('#lista-tarefas');
    const listItem = document.createElement('li');
    listItem.classList.add('list-item');
    listItem.innerText = inputText.value;
    orderList.appendChild(listItem);
    inputText.value = '';
  })
}
addListItem();

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('list-item')) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}, false);
