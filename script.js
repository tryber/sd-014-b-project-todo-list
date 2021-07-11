const textInput = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const clearButton = document.querySelector('#apaga-tudo');

// Referencias para resolver o requisito 05:
// https://www.horadecodar.com.br/2020/12/15/como-pegar-valor-de-input-com-javascript/
// Conteúdo do Course [5.2] Parte II Criando Elementos
// Exercício de fixação - Spotrybefy - link para meu repositório https://github.com/oelithon/other-activities/pull/2

addButton.addEventListener('click', function() {
  const texto = textInput.value;
  const taskListItem = document.createElement('li');
  taskListItem.innerText = texto;
  textInput.value = null;
  taskList.appendChild(taskListItem);
});

// Adiciona background-color da tarefa clicada

taskList.addEventListener('click', function(event) {
  event.target.classList.add('bgColor');
});

// Risca tarefas concluídas

taskList.addEventListener('dblclick', function(event) {
  event.target.classList.add('completed');
});

taskList.addEventListener('dblclick', function(event) {
  const theTask = document.querySelector('#lista-tarefas');
  if (theTask.classList.contains('completed')) {
    event.classList.remove('completed');
  }
});

// Limpar Lista

function clearList() {
  taskList = null;
}

clearButton.addEventListener('click', clearList);
