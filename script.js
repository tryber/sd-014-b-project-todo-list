// Seletores dos elemento input, ol e button;
const listTarefas = document.querySelector('#lista-tarefas');
const buttonNewTarefa = document.querySelector('#criar-tarefa');
const inputText = document.querySelector('#texto-tarefa');

// Função cria elemento li com value digitado no input
// e em seguida limpa o value do input;
function addLi() {
  const newLi = document.createElement('li');
  newLi.innerText = inputText.value;
  listTarefas.appendChild(newLi);
  inputText.value = '';
}

// Chamada do evento de click para o elemento button
buttonNewTarefa.addEventListener('click', addLi);

// function alterBackgroundColorLi(event) {
//   event.target.
// }

listTarefas.addEventListener('click', function (event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)';
});
