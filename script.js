/* No campo de input será digitado o texto de uma tarefa qualquer e,
 em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input. */

var input = document.querySelector('#texto-tarefa');
var button = document.querySelector('#criar-tarefa');
var taskList = document.querySelector('#lista-tarefas');


function addTask() {
  let li = document.createElement('li');
  li.innerText = input.value;
  taskList.appendChild(li);
  input.value = '';
}

button.addEventListener('click', addTask);