const input = document.querySelector('#texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
console.log(lista);
function addTarefa() {
  let itemTarefa = document.createElement('li');
  itemTarefa.innerText = input.value;
  console.log(itemTarefa);
  lista.appendChild(itemTarefa);
  input.value = '';
}
btnCriarTarefa.addEventListener('click', addTarefa);
