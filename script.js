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
    getItem[index].addEventListener('dblclick', markAsCompleted);
    getItem[index].addEventListener('click', changeColor);
  }
}  

function changeColor(item) {
  let selectedItem = document.querySelectorAll('.tarefa');
  for (let index = 0; index <= selectedItem.length - 1; index +=1){
    selectedItem[index].style.backgroundColor = ''
  }
  item.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function markAsCompleted(item) {
  console.log(item.target.className);
  if (item.target.className === 'tarefa completed') {
    item.target.classList.remove('completed');
  } else {
    item.target.classList.add('completed');
  }
}