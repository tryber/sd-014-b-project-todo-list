function clickButton() {
  const btn = document.querySelector('#criar-tarefa');
  btn.addEventListener('click', addTarefa);
}
clickButton();

function addTarefa() {
  const addList = document.querySelector('#lista-tarefas');
  const createNew = document.createElement('li');
  const tarefaAdd = document.querySelector('#texto-tarefa').value;
  createNew.innerHTML = tarefaAdd;
  addList.appendChild(createNew);
  document.querySelector('#texto-tarefa').value = '';
  console.log(tarefaAdd + ' adicionado!');
  selectTarefa();
}

function selectTarefa() {
  const tarefaSelecionada = document.querySelectorAll('li');
  for (let i = 0; i < tarefaSelecionada.length; i += 1) {
    tarefaSelecionada[i].addEventListener('click', () => {
      console.log("hm");
      tarefaSelecionada[i].classList.add('tarefa');
    });
  }
}
