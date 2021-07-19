//Cria seletores
const textInput = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const todoList = document.querySelector('#lista-tarefas');

//Seleciona o value do input e cria uma <li> com esse valor dentro da <ol>
function addTarefa () {
  let input = textInput.value;
  let todoItem = document.createElement('li');
  todoItem.innerText = input;
  todoList.appendChild(todoItem);
  textInput.value = "";
}
addButton.addEventListener('click', addTarefa);

