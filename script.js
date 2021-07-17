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
  
  criaLi.addEventListener('dblclick', completed);
});

function gray(event) {
  const getGray = document.querySelector('.gray');
  event.target.classList.add('gray');
  if (getGray) {
    getGray.classList.remove('gray');
  }
}

function completed(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

const buttonApagaTudo = document.querySelector('#apaga-tudo');

buttonApagaTudo.addEventListener('click', function () {
  document.querySelector('#lista-tarefas').innerHTML = '';
});
