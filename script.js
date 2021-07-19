//Cria seletores
const textInput = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');

//Seleciona o value do input e cria uma <li> com esse valor dentro da <ol>
function addTarefa (event) {
  let input = textInput.value;
  let todoItem = document.createElement('li');
  todoItem.addEventListener('click',select);
  todoItem.addEventListener('dblclick', complete)
  todoItem.innerText = input;
  todoList.appendChild(todoItem);
  textInput.value = "";
}
addButton.addEventListener('click', addTarefa);

//Muda a cor de fundo quando seleciona o item

function select (event) {
  if (event.target.classList.contains('selected')) {
  event.target.classList.remove('selected');
  }
  else {
    let selected = document.querySelector('.selected');
    if (selected != null)
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function complete (event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
    }
    else {
      let completed = document.querySelector('.completed');
      if (completed != null)
      completed.classList.remove('completed');
      event.target.classList.add('completed');
    }
}