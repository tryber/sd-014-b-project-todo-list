const inputText = document.querySelector('#texto-tarefa');
const listaOrde = document.querySelector('#lista-tarefas');
const button = document.querySelector('#criar-tarefa');

button.addEventListener('click', function() {
  let li = document.createElement('li');
  listaOrde.appendChild(li);
  li.innerText = inputText.value;
  inputText.value = '';
})  