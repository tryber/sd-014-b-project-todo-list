const botaoAdiciona = document.querySelector('#criar-tarefa');
const userInput = document.querySelector('#texto-tarefa');
const listaDesordenada = document.querySelector('#lista-tarefas');

botaoAdiciona.addEventListener('click', function () {
  if (userInput.value !== '') {
    let novaTarefa = document.createElement('li');
    novaTarefa.innerHTML = userInput.value;
    listaDesordenada.appendChild(novaTarefa);
    userInput.value = '';
  }
});
