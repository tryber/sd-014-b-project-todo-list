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

function moveUp() {
  const tarefas = document.getElementsByClassName('tarefa');
  const selectedTask = document.querySelector('#selected');
  console.log(selectedTask.indexOf());
}
const buttonUp = document.getElementById('mover-cima');
buttonUp.addEventListener('click', moveUp);

function removeSelected() {
  const selectedTask = document.getElementById('selected');
  listaTarefas.removeChild(selectedTask);
}
const removeSelectedButton = document.getElementById('remover-selecionado');
removeSelectedButton.addEventListener('click', removeSelected);
