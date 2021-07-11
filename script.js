const botaoCriarTarefa = document.getElementById('criar-tarefa');
const inputTextoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
function addTarefaLista() {
  const tarefa = document.createElement('li');
  listaTarefas.appendChild(tarefa);
  tarefa.innerText = inputTextoTarefa.value;
  tarefa.className = 'tarefa';
  inputTextoTarefa.value = '';
}
botaoCriarTarefa.addEventListener('click', addTarefaLista);

function corDeFundoItemLista(event) {
  const tarefas = document.getElementsByClassName('tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].style.backgroundColor = '';
    tarefas[i].removeAttribute('id');
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.id = 'selected';
}
listaTarefas.addEventListener('click', corDeFundoItemLista);

function completedTasks(event) {
  if (event.target.classList == 'tarefa completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
listaTarefas.addEventListener('dblclick', completedTasks);

function deleteAll() {
  listaTarefas.innerHTML = '';
}
const buttonDeleteAll = document.getElementById('apaga-tudo');
buttonDeleteAll.addEventListener('click', deleteAll);

function deleteCompleted() {
  const tarefas = document.getElementsByClassName('tarefa');
  for (let i = tarefas.length - 1; i >= 0; i -= 1) {
    if (tarefas[i].classList == 'tarefa completed') {
      listaTarefas.removeChild(tarefas[i]);
    }
  }
}
const deleteCompletedButton = document.getElementById('remover-finalizados');
deleteCompletedButton.addEventListener('click', deleteCompleted);

function saveTasks() {
  const tarefas = document.getElementsByClassName('tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    localStorage.setItem('tarefas', tarefas[i].innerHTML);
  }
}

const buttonSaveTasks = document.getElementById('salvar-tarefas');
buttonSaveTasks.addEventListener('click', saveTasks);

//
// let array = document.getElementsByClassName('tarefa');
// let selected = document.querySelector('.tarefa .selected');
function moveUp() {
  const array = document.querySelectorAll('li');
  const selected = document.querySelector('.selected');
  for (let iTrocado = array.indexOf(selected) - 1; iTrocado >= 0; iTrocado -= 1) {
    for (let iTroca = array.indexOf(selected); iTroca >= 0; iTroca -= 1) {
      if (iTrocado < array.indexOf(selected)) {
        const position = array[iTrocado];
        array[iTrocado] = array[array.indexOf(selected)];
        array[array.indexOf(selected)] = position;
        break;
      }
    }
    break;
  }
}
const buttonUp = document.getElementById('mover-cima');
buttonUp.addEventListener('click', moveUp);

// const array = document.querySelectorAll('li');
// const selected = document.querySelector('.selected');

function moveDown () {
  const array = document.querySelectorAll('li');
  const selected = document.querySelector('.selected');
  for (let iTrocado = array.indexOf(selected) + 1; iTrocado < array.length; iTrocado += 1) {
    for (let iTroca = array.indexOf(selected); iTroca < array.length; iTroca += 1) {
      if (iTrocado > array.indexOf(selected)) {
        const position = array[iTrocado];
        array[iTrocado] = array[array.indexOf(selected)];
        array[array.indexOf(selected)] = position;
        break;
      }
    }
    break;
  }
}
const buttonDown = document.getElementById('mover-baixo');
buttonDown.addEventListener('click', moveDown);
//

function removeSelected() {
  const selectedTask = document.getElementById('selected');
  listaTarefas.removeChild(selectedTask);
}
const removeSelectedButton = document.getElementById('remover-selecionado');
removeSelectedButton.addEventListener('click', removeSelected);