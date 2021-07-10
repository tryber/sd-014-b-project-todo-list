
function createListItem(text) {
  let listItem = document.createElement('li');
  listItem.className = 'listItem';
  listItem.innerText = text;
  return  listItem;
}

function textListItem() {
  let currentInput = document.getElementById('texto-tarefa').value;
  return currentInput;
}

function addListItem() {
  let addItem  = document.getElementById('criar-tarefa');
  addItem.addEventListener('click', function(){
    let ordList = document.getElementById('lista-tarefas');
    let currentInput = document.getElementById('texto-tarefa')
    let currentItem = createListItem(textListItem());
    ordList.appendChild(currentItem);
    currentInput.value = '';
  })
}

window.onload = function() {

  addListItem();

}