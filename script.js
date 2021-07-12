const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', addListItem);

function addListItem() {
  const list = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const listItem = document.createElement('li');
  listItem.innerText = input.value;
  listItem.className = 'tarefa'
  list.appendChild(listItem);
  input.value = '';
  selectItem();
}

function selectItem() {
  let getItem = document.querySelectorAll('.tarefa');
  for (let index = 0; index <= getItem.length - 1; index += 1) {
    getItem[index].addEventListener('click', changeColor);
    console.log(getItem[index]);
  }
}  

function changeColor(item) {
  item.target.style.backgroundColor = 'rgb(128, 128, 128)';
}