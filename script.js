// Seletores dos elemento input, ol e button;
const listTarefas = document.querySelector('#lista-tarefas');
const buttonNewTarefa = document.querySelector('#criar-tarefa');
const inputText = document.querySelector('#texto-tarefa');
const getSelectionButton = document.querySelector('#buttons');

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
  if (event.target.className !== 'completed') {
    event.target.setAttribute('class', 'completed');
  } else {
    event.target.classList.remove('completed');
  }

});

const newButton = document.createElement('button');
newButton.setAttribute('id', 'apaga-tudo');
newButton.innerText = 'Limpar Tarefas';
getSelectionButton.appendChild(newButton);

const getButtonClear = document.querySelector('#apaga-tudo');

getButtonClear.addEventListener('click', function () {
  const getLis = document.querySelectorAll('ol li');
  if (getLis.length > 0) {
    for (let index = 0; index < getLis.length; index++) {
      getLis[index].parentNode.removeChild(getLis[index]);
    }
  }
});

const buttonNew = document.createElement('button');
buttonNew.setAttribute('id', 'remover-finalizados');
buttonNew.innerText = 'Finalizar Tarefa';
getSelectionButton.appendChild(buttonNew);

const getButtonFinishTask = document.querySelector('#remover-finalizados');

getButtonFinishTask.addEventListener('click', function () {
  const taskFinish = document.querySelectorAll('.completed');
  if (taskFinish !== null) {
    for (let index = 0; index < taskFinish.length; index += 1) {
      taskFinish[index].parentElement.removeChild(taskFinish[index]);
    }
  }
});

const newButtonSalve = document.createElement('button');
newButtonSalve.setAttribute('id', 'salvar-tarefas');
newButtonSalve.innerText = 'Salvar Tarefas';
getSelectionButton.appendChild(newButtonSalve);

// Remover tarefa selecionada;
function removeLiSelected() {
  const lisSelect = document.querySelectorAll('li');

  for (let index = 0; index < lisSelect.length; index += 1) {    
    if (lisSelect[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      lisSelect[index].parentNode.removeChild(lisSelect[index]);
    }
  }
}

const newButtonRemove = document.createElement('button');
newButtonRemove.setAttribute('id', 'remover-selecionado');
newButtonRemove.innerText = 'X';
getSelectionButton.appendChild(newButtonRemove);

const buttonRemove = document.querySelector('#remover-selecionado');
buttonRemove.addEventListener('click', removeLiSelected);
