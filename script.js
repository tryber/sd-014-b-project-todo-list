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

//troca cor do funda da tarefa
const colorTask = document.querySelector('#lista-tarefas');

function changeColor (event) {
  event.target.classList.add('background-task');
}
colorTask.addEventListener('click', changeColor);

// function changeColor() {
//   document.querySelector('li').style.backgroundColor = 'rgb(128, 128, 128)';
// }
// document.addEventListener('click', changeColor);
