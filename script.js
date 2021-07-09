const listaOrdenada = document.querySelector('#lista-tarefas');
const botaoTarefas = document.querySelector('#criar-tarefa');
const inputTarefas = document.querySelector('#texto-tarefa');

// Requisitos #5 e #6
// Source: https://www.w3schools.com/jsref/prop_text_value.asp
function criarItemTarefa() {
  const criarItem = document.createElement('li');
  const textoItem = inputTarefas.value;
  
  criarItem.innerHTML = textoItem;
  listaOrdenada.appendChild(criarItem);
  inputTarefas.value = '';
}
botaoTarefas.addEventListener('click', criarItemTarefa);

// // Requisito #7
listaOrdenada.addEventListener('click', function(event) {
  event.target.style.backgroundColor = 'rgb(128,128,128)';
})
