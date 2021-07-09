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

function limparLinha() {
  const tarefas = document.querySelectorAll('.item-tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].style.backgroundColor = 'green';
  }
}

// Seleção de item na lista com preenchimento da linha
lista.addEventListener('click', function (event) {
  limparLinha();
  let tarefas = document.querySelectorAll('.item-tarefa');
  let newColor = 'rgb(128, 128, 128)';
  event.target.style.backgroundColor = newColor;
});

function tarefaCompleta(event) {
  let verificador = event.target.className;
  console.log(verificador);
  if (verificador === 'item-tarefa completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
lista.addEventListener('dblclick', tarefaCompleta);
