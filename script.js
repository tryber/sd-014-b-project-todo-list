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

function clickButton() {
  const btn = document.querySelector('#criar-tarefa');
  btn.addEventListener('click', addTarefa);
}
clickButton();

function tarefaCompleta() {
  const tarefaCompletada = document.querySelectorAll('li');
  for (let i = 0; i < tarefaCompletada.length; i += 1) {
    tarefaCompletada[i].addEventListener('dblclick', () => {
      tarefaCompletada[i].classList.add('completed');
    });
  }
}
