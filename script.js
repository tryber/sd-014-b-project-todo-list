const buttonAddTask = document.querySelector('#criar-tarefa');
const listParent = document.querySelector('#lista-tarefas');
const eraseButton = document.querySelector('#apaga-tudo');
const removeFinishedButton = document.querySelector('#remover-finalizados');

buttonAddTask.addEventListener('click', criarTarefa);

function criarTarefa() {
  let novaTarefa = document.createElement('li');
  let input = document.querySelector('#texto-tarefa');
  let inputValue = input.value;
  novaTarefa.innerText = inputValue;
  novaTarefa.classList.add('list-item');
  novaTarefa.addEventListener('dblclick', mudarStatusDaTarefa);
  novaTarefa.addEventListener('click', mudarCorDaTarefa);
  listParent.appendChild(novaTarefa);
  document.querySelector('#texto-tarefa').value = '';
}

function mudarCorDaTarefa(mouse) {
  let listItem = document.querySelectorAll('.list-item');
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index] === mouse.target) {
      if (mouse.target.style.backgroundColor !== 'rgb(128, 128, 128)') {
        mouse.target.style.backgroundColor = 'rgb(128, 128, 128)';
      } else {
        mouse.target.style.backgroundColor = '#15151a';

      }
    } else {
      listItem[index].style.backgroundColor = '#15151a';
    }
  }
}

function mudarStatusDaTarefa(event) {
  event.target.classList.toggle('completed');
}

eraseButton.addEventListener('click', apagaTodasTarefas);

function apagaTodasTarefas() {
  let tarefas = document.querySelectorAll('.list-item');
  let tarefasParent = document.querySelector('#lista-tarefas');
  for (index = 0; index < tarefas.length; index += 1) {
    tarefasParent.removeChild(tarefas[index]);
  }
}

removeFinishedButton.addEventListener('click', removerTarefasFinalizadas);

function removerTarefasFinalizadas() {
  let tarefas = document.querySelectorAll('.list-item');
  let tarefasParent = document.querySelector('#lista-tarefas');
  for (index = 0; index < tarefas.length; index += 1) {
    if (tarefas[index].className === 'list-item completed') {
      tarefasParent.removeChild(tarefas[index]);
    }
  }
}


