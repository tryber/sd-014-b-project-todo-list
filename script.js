const criaTask = document.querySelector('#criar-tarefa'); 
const listaTask = document.querySelector('#lista-tarefas'); 

criaTask.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa');
  const criaList = document.createElement('li'); 

  if (input.value === '') alert('Adicione uma tarefa!');
  criaList.innerText = input.value;
  listaTask.appendChild(criaList);

  input.value = '';
});

listaTask.addEventListener('click', (event) => {
  const listaItens = document.querySelectorAll('li');
  for (let index = 0; index < listaItens.length; index += 1) {
    listaItens[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
});

listaTask.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');
});
const clearTasks = document.querySelector('#apaga-tudo');
clearTasks.addEventListener('click', () => {
  listaTask.parentNode.removeChild(listaTask);
});

const limpaCompleted = document.querySelector('#remover-finalizados');
limpaCompleted.addEventListener('click', () => {
  const feitas = document.querySelectorAll('.completed');
  for (let index = 0; index < feitas.length; index += 1) {
    feitas[index].remove();
  }
});