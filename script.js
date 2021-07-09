let olPath = document.querySelector('#lista-tarefas');
let inputPath = document.querySelector('#texto-tarefa');
let liTarefaPath = document.getElementsByClassName('liTarefa');

// * Requisitos - 5, 6 e 7
document.querySelector('#criar-tarefa').addEventListener('click', function () {
  let tarefaLi = document.createElement('li');
  if (inputPath.value != '') {
    olPath.appendChild(tarefaLi).innerText = inputPath.value;
  }
  tarefaLi.className = 'liTarefa';
  inputPath.value = '';

  tarefaLi.addEventListener('click', function() {
    tarefaLi.style.backgroundColor = 'rgb(128,128,128)';
  })
})
