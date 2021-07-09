function criaTarefa() {
  const receberInput = document.getElementById('texto-tarefa');
  const newElement = document.createElement('li');
  newElement.innerText = receberInput.value;
  const listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.appendChild(newElement);
  receberInput.value = '';
}
const botaoAdicionar = document.getElementById('criar-tarefa');
botaoAdicionar.addEventListener('click', criaTarefa);

function MudaCor(event) {
  const corAtual = document.getElementsByClassName('fundo')[0];
  if (corAtual !== undefined) {
    corAtual.classList.remove('fundo');
  }
  event.target.classList.add('fundo');
}
const itemLista = document.getElementById('lista-tarefas');
itemLista.addEventListener('click', MudaCor);

function sublinhar(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
itemLista.addEventListener('dblclick', sublinhar);


function apagando() {
  itemLista.innerText = '';
}
const botaoApagar = document.getElementById('apaga-tudo');
botaoApagar.addEventListener('click', apagando);
