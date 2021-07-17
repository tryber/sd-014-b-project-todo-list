const getButton = document.querySelector('#criar-tarefa');
const getInput = document.querySelector('#texto-tarefa');
const getOrdenedList = document.querySelector('#lista-tarefas');

getButton.addEventListener('click', function() {
  const criaLi = document.createElement('li');
  if (getInput.value !== '') {
    getOrdenedList.appendChild(criaLi).innerText = getInput.value;
  }
  getInput.value = '';
});

