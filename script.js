function select(){
  let tarefaSelect = document.querySelectorAll('li');
  for (let i = 0; i < tarefaSelect.length; i += 1) {
    tarefaSelect[i].addEventListener('click', () => {
      for (let index = 0; index < tarefaSelect.length; index += 1) {
        if (tarefaSelect[index].classList.contains('tarefa')) {
          tarefaSelect[index].classList.remove('tarefa');
        }
      }
      tarefaSelect[i].classList.add('tarefa');
    });
  }
}

function Complete() {
  let tarefaDone = document.querySelectorAll('.tarefa');
  for (let i = 0; i < tarefaDone.length; i += 1) {
    if (tarefaDone[i].classList.contains('completed')) {
      tarefaDone[i].classList.remove('completed');
    } else tarefaDone[i].classList.add('completed');
  }
}

function addTarefa() {
  let addList = document.querySelector('#lista-tarefas');
  let newTarefa = document.createElement('li');
  let addTarefa = document.querySelector('#texto-tarefa').value;
  newTarefa.innerHTML = addTarefa;
  addList.appendChild(newTarefa);
  addList.addEventListener('dblclick', Complete);
  document.querySelector('#texto-tarefa').value = '';
  select();
}

function createBtn() {
  let btn = document.querySelector('#criar-tarefa');
  btn.addEventListener('click', addTarefa);
}
createBtn();

function clearList() {
  let lista = document.querySelectorAll('li');
  let listas = document.querySelector('#lista-tarefas');
  for (let i = 0; i < lista.length; i += 1) {
    listas.removeChild(lista[i]);
  }
}

function clearBtn() {
  let btn = document.querySelector('#apaga-tudo');
  btn.addEventListener('click', clearList);
}
clearBtn();

function clearListCompleta() {
  let lista = document.querySelectorAll('.completed');
  let listas = document.querySelector('#lista-tarefas');
  for (let i = 0; i < lista.length; i += 1) {
    listas.removeChild(lista[i]);
  }
}

function clearComplete() {
  let btn = document.querySelector('#remover-finalizados');
  btn.addEventListener('click', clearListCompleta);
}
clearComplete();