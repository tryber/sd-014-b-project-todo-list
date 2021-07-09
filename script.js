//Requisito 5

function removeInputText() {
  let input = document.querySelector('#texto-tarefa');
  input.value = '';
}

function addTextList() {
  let input = document.querySelector('#texto-tarefa');
  let li = document.createElement('li');
  li.innerHTML = input.value;
  document.querySelector('#lista-tarefas').appendChild(li);
  removeInputText();
}

let button = document.getElementById('criar-tarefa');
button.addEventListener('click', addTextList);