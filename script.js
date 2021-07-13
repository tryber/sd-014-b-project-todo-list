const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function addInTodoList() {
  if (input.value.length == 0) {
    alert ('digite uma tarefa')
  } else {
    const valueInput = input.value;
    const listLi = document.createElement('li');
    listLi.innerText = valueInput;
    listLi.className = 'to-do';
    list.appendChild(listLi);
    input.value = '';
  }
}


window.onload = function() {
  button.addEventListener('click', addInTodoList)


};
