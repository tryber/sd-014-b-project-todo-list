const textInput = document.querySelector('#texto-tarefa');
const addButton = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// Adiciona texto do input na lista ordenada
// Referências:
// https://www.horadecodar.com.br/2020/12/15/como-pegar-valor-de-input-com-javascript/
// Conteúdo do Course [5.2] Parte II Criando Elementos
// Exercício de fixação - Spotrybefy - link para meu repositório https://github.com/oelithon/other-activities/pull/2

function addText() {
  const texto = textInput.value;
  const taskListItem = document.createElement('li');
  taskListItem.innerText = texto;
  taskListItem.classList.add('task');
  textInput.value = null;
  taskList.appendChild(taskListItem);
}
addButton.addEventListener('click', addText);

// Adiciona background-color da tarefa clicada

function addBackground(event) {
  const taskBgColor = document.querySelector('.task');
  taskBgColor.classList.remove('bgColor');
  event.target.classList.add('bgColor');
}
taskList.addEventListener('click', addBackground);

// Risca tarefas concluídas
// Referências para esse requisito:
// https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
// Pedi ajuda em monitoria individual, lá pude entender melhor como funciona essa verificação e consegui aplicar no requisito.

function markCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

taskList.addEventListener('dblclick', markCompleted);
