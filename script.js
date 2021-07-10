const textInput = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// Referencias para resolver o requisito 05:
// https://www.horadecodar.com.br/2020/12/15/como-pegar-valor-de-input-com-javascript/
// Conteúdo do Course [5.2] Parte II Criando Elementos
// Exercício de fixação - Spotrybefy - link para meu repositório https://github.com/oelithon/other-activities/pull/2

function addText() {
  const texto = textInput.value;
  const taskListItem = document.createElement('li');
  taskListItem.innerText = texto;
  taskListItem.classList = 'task';
  textInput.value = null;
  taskList.appendChild(taskListItem);
}

addButton.addEventListener('click', addText);

// Remove background-color da tarefa que estava selecionada

function addColor(event) {
  const taskClass = document.querySelector('.task');
  taskClass.classList.remove('bgColor');
  event.target.classList.add('bgColor');
}

taskList.addEventListener('click', addColor);

// Risca tarefas concluídas

function textCompleted(event) {
  event.target.classList.add('completed')
}

taskList.addEventListener('dblclick', textCompleted);
