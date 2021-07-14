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
  textInput.value = null;
  taskList.appendChild(taskListItem);
}
addButton.addEventListener('click', addText);

// Adiciona background-color da tarefa clicada

function addBackground(event) {
  const taskBgColor = document.querySelectorAll('li');
  for (let index of taskBgColor) {
    index.style.backgroundColor = 'rgb(232 , 235 , 241';
  }
  event.target.style.backgroundColor = 'gray';
}
taskList.addEventListener('click', addBackground);

// Risca tarefas concluídas
// Referências para esse requisito:
// https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
// Pedi ajuda em monitoria individual, lá pude entender melhor como funciona essa verificação e consegui aplicar no requisito.

function markCompleted(event) {
  // if (!event.target.classList.contains('completed')) {
  //   event.target.classList.add('completed');
  // } else {
  //   event.target.classList.remove('completed');
  // }

  event.target.classList.toggle('completed');
}

taskList.addEventListener('dblclick', markCompleted);
