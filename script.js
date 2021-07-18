const adList = document.querySelector('#lista-tarefas');
// Requisito 5 - 6
function Complete() {
  const completeTask = document.querySelectorAll('.tarefa');
  for (let index = 0; index < completeTask.length; index += 1) {
    if (completeTask[index].classList.contains('completed')) {
      completeTask[index].classList.remove('completed');
    } else completeTask[index].classList.add('completed');
  }
}
function adTask() {
  const taskNew = document.createElement('li');
  adTask = document.querySelector('#texto-tarefa').value;
  taskNew.innerHTML = adTask;
  adList.appendChild(taskNew);
  document.querySelector('#texto-tarefa').value = '';
}
function criaButton() {
  const buttonT = document.querySelector('#criar-tarefa');
  buttonT.addEventListener('click', adTask);
}
criaButton();

function clearList() {
  const list = document.querySelectorAll('li');
  const lists = document.querySelector('#lista-tarefas');
  for (let index = 0; index < list.length; index += 1) {
    lists.removeChild(list[index]);
  }
}
function botaoClear() {
  const botao = document.querySelector('#apaga-tudo');
  botao.addEventListener('click', clearList);
}
botaoClear();

function clearCompleted() {
  const lista = document.querySelectorAll('.completed');
  const listas = document.querySelector('#lista-tarefas');
  for (let index = 0; index < lista.length; index += 1) {
    listas.removeChild(lista[index]); 
  }
}
clearCompleted();

function clearTaskCompleted() {
  const botao = document.querySelector('#remover-finalizados');
  botao.addEventListener('click', clearCompleted);
}
function colorSelect(evento) {
  const list = document.querySelectorAll('li');
  for (const index of list) {
    index.style.backgroundColor = 'white';
  }
  evento.target.style.backgroundColor = 'rgb(128,128,128)';
}
const ordenedList = document.querySelector('#lista-tarefas');
ordenedList.addEventListener('click', colorSelect);
