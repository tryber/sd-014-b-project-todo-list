function clickButton() {
 const btn = document.querySelector('#criar-tarefa');
 btn.addEventListener('click', addList);
}
clickButton();

function addList() {
  const addList = document.querySelector('#lista-tarefas');
  const createNew = document.createElement('li');
  let tarefaAdd = document.querySelector('#texto-tarefa').value;
  createNew.innerHTML = tarefaAdd;
  createNew.classList.add('tarefa');
  addList.appendChild(createNew);
  document.querySelector('#texto-tarefa').value = '';
}
