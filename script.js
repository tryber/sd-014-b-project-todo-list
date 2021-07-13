function selectTarefa() {
  const tarefaSelecionada = document.querySelectorAll('li');
  for (let i = 0; i < tarefaSelecionada.length; i += 1) {
    tarefaSelecionada[i].addEventListener('click', () => {
      for (let index = 0; index < tarefaSelecionada.length; index += 1) {
        if (tarefaSelecionada[index].classList.contains('tarefa')) {
          tarefaSelecionada[index].classList.remove('tarefa');
        }
      }
      tarefaSelecionada[i].classList.add('tarefa');
    });
  }
}

function tarefaCompleta() {
  const tarefaCompletada = document.querySelectorAll('li');
  for (let i = 0; i < tarefaCompletada.length; i += 1) {
    tarefaCompletada[i].addEventListener('dblclick', () => {
      tarefaCompletada[i].classList.add('completed');
    });
  }
}

function addTarefa() {
  const addList = document.querySelector('#lista-tarefas');
  const createNew = document.createElement('li');
  const tarefaAdd = document.querySelector('#texto-tarefa').value;
  createNew.innerHTML = tarefaAdd;
  addList.appendChild(createNew);
  document.querySelector('#texto-tarefa').value = '';
  selectTarefa();
  tarefaCompleta();
}

function clickButtonCreate() {
  const btn = document.querySelector('#criar-tarefa');
  btn.addEventListener('click', addTarefa);
}
clickButtonCreate();

function limparLista() {
  const lista = document.querySelectorAll('li');
  const listas = document.querySelector('#lista-tarefas');
  for (let i = 0; i < lista.length; i += 1) {
    listas.removeChild(lista[i]);
  }
}

function clickButtonClear() {
  const btn = document.querySelector('#apaga-tudo');
  btn.addEventListener('click', limparLista);
}
clickButtonClear();

function limparListaCompleta() {
  const lista = document.querySelectorAll('.completed');
  const listas = document.querySelector('#lista-tarefas');
  for (let i = 0; i < lista.length; i += 1) {
    listas.removeChild(lista[i]);
  }
}

function clickButtonClearComplete() {
  const btn = document.querySelector('#remover-finalizados');
  btn.addEventListener('click', limparListaCompleta);
}
clickButtonClearComplete();
