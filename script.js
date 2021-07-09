const listTarefas = document.querySelector('#lista-tarefas');
const buttonNewTarefa = document.querySelector('#criar-tarefa');
const inputText = document.querySelector('#texto-tarefa');

buttonNewTarefa.addEventListener('click', function () {
  let newLi = document.createElement('li');
  newLi.innerText = inputText.value;
  listTarefas.appendChild(newLi);
  inputText.value = '';

});
