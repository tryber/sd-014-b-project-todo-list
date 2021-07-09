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

// Seleção de item na lista com preenchimento da linha
lista.addEventListener('click', function(event) {
  limparLinha();
  let tarefas = document.querySelectorAll('.item-tarefa');
  let limpar = event.target.innerText;
  let newColor = 'rgb(128, 128, 128)';
  event.target.style.backgroundColor = newColor;
});

function limparLinha() {
  const tarefas = document.querySelectorAll('.item-tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    let taskList = tarefas[i].innerText;
    tarefas[i].style.backgroundColor = 'green';
  }
}
