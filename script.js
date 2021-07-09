const input = document.querySelector('#texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');

function addTarefa() {
  let itemTarefa = document.createElement('li');
  itemTarefa.classList.add('item-tarefa');
  itemTarefa.innerText = input.value;
  lista.appendChild(itemTarefa);
  input.value = '';
}
btnCriarTarefa.addEventListener('click', addTarefa);

lista.addEventListener('click', function(event) {
  let tarefas = document.querySelectorAll('.item-tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    let newColor = 'rgb(128, 128, 128)';
    event.target.style.backgroundColor = newColor;
  }
});