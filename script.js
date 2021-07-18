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
  getOrdenedList.innerHTML = '';
});

const buttonRemoveFinalizados = document.querySelector('#remover-finalizados');

buttonRemoveFinalizados.addEventListener('click', function () {
  const ols = document.querySelectorAll('.completed');

  for (let index = 0; index < ols.length; index +=1) {
    ols[index].remove();
  }
});


const buttonSave = document.querySelector('#salvar-tarefas');

buttonSave.addEventListener('click', function() {
  localStorage.setItem('listaDeTarefas', getOrdenedList.innerHTML);
});

window.onload = function() {
  getOrdenedList.innerHTML = localStorage.getItem('listaDeTarefas');
};
