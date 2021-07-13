//Adicionando tarefa pelo botão
const botaoAdd = document.querySelector('#criar-tarefa');

function addTarefa() {
  const inputTask = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const listTask = document.createElement('li');

  list.appendChild(listTask);
  listTask.innerText = inputTask.value;
  inputTask.value = '';
}

botaoAdd.addEventListener('click', addTarefa);