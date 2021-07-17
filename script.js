const getButton = document.querySelector('#criar-tarefa');
const getInput = document.querySelector('#texto-tarefa');
const getOrdenedList = document.querySelector('#lista-tarefas');

getButton.addEventListener('click', function() {
  const criaLi = document.createElement('li');
  if (getInput.value !== '') {
    getOrdenedList.appendChild(criaLi).innerText = getInput.value;
  }
  getInput.value = '';

  criaLi.addEventListener('click', gray);
});

function gray(event) {
  const getGray = document.querySelector('.gray');
  event.target.classList.add('gray');
  if (getGray) {
    getGray.classList.remove('gray');
  }
}

