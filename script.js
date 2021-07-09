let olPath = document.querySelector('#lista-tarefas');
let inputPath = document.querySelector('#texto-tarefa');


// * Requisito - 5
document.querySelector('#criar-tarefa').addEventListener('click', function () {
  let tarefaLi = document.createElement('li');
  olPath.appendChild(tarefaLi).innerText = inputPath.value;
  inputPath.value = '';
})