//Requisito 5 - 6
function selectItem(){
  let selectTask = document.querySelectorAll('li');
  for (let index = 0; index < selectTask.length; index += 1) {
    selectTask[index].addEventListener('click', () => {
      for (let index2 = 0; index2 < selectTask.length; index2 += 1) {
        if (selectTask[index2].classList.contains('tarefa')) {
          selectTask[index2].classList.remove('tarefa');
        }
      }
      selectTask[index].classList.add('tarefa');

    });
  }
}
function Complete() {
  let completeTask = document.querySelectorAll('.tarefa');
  for (let index = 0; index < completeTask.length; index += 1) {
    if (completeTask[index].classList.contains('completed')) {
      completeTask[index].classList.remove('completed');
    } else completeTask[index].classList.add('completed');
  }
}
function adTask() {
  let adList = document.querySelector('#lista-tarefas');
  let taskNew = document.createElement('li');
  let adTask = document.querySelector('#texto-tarefa').value;
  taskNew.innerHTML = adTask;
  adList.appendChild(taskNew);
  adList.addEventListener('dblclick', Complete);
  document.querySelector('#texto-tarefa').value = '';
  select();
}
// Requisito 10
function criaButton() {
  let buttonT = document.querySelector('#criar-tarefa');
  buttonT.addEventListener('click', adTask);
}
criaButton();

function clearList() {
  let list = document.querySelectorAll('li');
  let lists = document.querySelector('#lista-tarefas');
  for (let index = 0; index < list.length; index += 1) {
    lists.removeChild(list[index]);
  }
}
function botaoClear() {
  let botao = document.querySelector('#apaga-tudo');
  botao.addEventListener('click', clearList);
}
botaoClear();

function clearCompleted() {
  let lista = document.querySelectorAll('.completed');
  let listas = document.querySelector('#lista-tarefas');
  for (let index = 0; index < lista.length; index += 1) {
    listas.removeChild(lista[index]);
  }
}
//Requisito 11
function clearTaskCompleted() {
  let botao = document.querySelector('#remover-finalizados');
  botao.addEventListener('click', clearTaskCompleted);
}
clearTaskCompleted();