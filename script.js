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
    const allListItens = document.querySelectorAll('.list-item');
    for (let index = 0; index < allListItens.length; index += 1) {
      let item = allListItens[index];
      item.style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}, false);

document.addEventListener('dblclick', function (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else if (event.target.classList.contains('list-item')){
    event.target.classList.add('completed');
  }
}, false);

function clearList () {
  const clearListButton = document.querySelector('#apaga-tudo');
  clearListButton.addEventListener('click', function () {
    const orderList = document.querySelector('#lista-tarefas');
    const allListItens = document.querySelectorAll('.list-item');
    for (let index = 0; index < allListItens.length; index += 1) {
      let item = allListItens[index];
      orderList.removeChild(item);
    }
  })
}
clearList();

function clearFinalized () {
  const clearFinalizedButton = document.createElement('button');
  clearFinalizedButton.id = 'remover-finalizados';
  clearFinalizedButton.innerText = 'Limpar Finalizados';
  document.querySelector('.buttons').appendChild(clearFinalizedButton);
  clearFinalizedButton.addEventListener('click', function () {
    const orderList = document.querySelector('#lista-tarefas');
    const allFinalizedItens = document.querySelectorAll('.completed');
    for (let index = 0; index < allFinalizedItens.length; index += 1) {
      let item = allFinalizedItens[index];
      orderList.removeChild(item);
    }
  })
}
clearFinalized();
