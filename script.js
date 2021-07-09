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

// Função altera backgorund-color da li selecionada
// sem permitir que seja alterada mais de uma;
function alterBackgrountLi(event) {
  const liSelect = document.querySelectorAll('li');
  for (let index = 0; index < liSelect.length; index += 1) {
    liSelect[index].removeAttribute('style');
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
}

// Chamada de evento de click para selecionar elemento li
listTarefas.addEventListener('click', alterBackgrountLi);

listTarefas.addEventListener('dblclick', function (event) {
  event.target.setAttribute('class', 'completed');
  listTarefas.addEventListener('dblclick', function (event) {
    event.target.removeAttribute('class');
  });
});
