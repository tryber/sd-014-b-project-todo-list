const input = document.querySelector('#texto-tarefa');
const inputLocalStorage = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const btnApagatudo = document.querySelector('#apaga-tudo');
const btnRemoverConcluidos = document.querySelector('#remover-finalizados');
const btnSalvarTarefa = document.querySelector('#salvar-tarefas');
const moverParaCima = document.querySelector('#mover-cima');
const moverParaBaixo = document.querySelector('mover-baixo');
const btnRemoverSelecionado = document.querySelector('#remover-selecionado');

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
  if (verificador === 'item-tarefa completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
lista.addEventListener('dblclick', tarefaCompleta);

function apagaLista() {
// As long as <ol> has a child node, remove it
// https://www.w3schools.com/jsref/met_node_removechild.asp
  while (lista.hasChildNodes()) {
    lista.removeChild(lista.firstChild);
  }
}
btnApagatudo.addEventListener('click', apagaLista);

function removerConcluidos() {
  const tamanhoListaCompleta = document.querySelectorAll('.completed');
  if (tamanhoListaCompleta.length !== 0) {
    for (let i = tamanhoListaCompleta.length; i > 0; i -= 1) {
      lista.removeChild(document.querySelector('.completed'));
    }
  } else {
    console.log("Não existe nenhuma tarefa concluída!");
  }
}
//btnRemoverConcluidos.addEventListener('click', removerConcluidos);

function addTarefaToLocalStorage() {
  let tarefas = document.querySelectorAll('.item-tarefa');
  let tarefasStorage = [];
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefasStorage.push(tarefas[i].innerText);
  }
  localStorage.setItem('tarefas', JSON.stringify(tarefasStorage));
}
btnSalvarTarefa.addEventListener('click', addTarefaToLocalStorage);

//PRECISA DAR UMA OLHADA EM COMO RESOLVER ISSO
function removeConcluidosLocalStorage() {
  const tarefasConcluidas = document.querySelectorAll('.completed');
  const listaLocalStorage = localStorage.getItem('tarefas');//Preciso descobrir como pegar esse valor
  console.log(listaLocalStorage); // como saber o tamanho do array gravado no localStorage?
  for (let i = 0; i > tarefasConcluidas.length; i += 1) {
    for (let ii = 0; ii > tarefasConcluidas.length; ii += 1) {
      console.log(ii);
    }
  } 
}
//btnRemoverConcluidos.addEventListener('click', removerConcluidos);
btnRemoverConcluidos.addEventListener('click', removeConcluidosLocalStorage);

// Inicialização do Local Storage
// Verifica se já existe um array criado, caso tenha carrega a lista
// caso não tenha, cria a chave de inicialização
function initialRenderization() {
  if (localStorage.getItem('tarefas') === null) {
    localStorage.setItem('tarefas', JSON.stringify([]));
  } else {
    const tarefasList = JSON.parse(localStorage.getItem('tarefas'));
    const listLength = tarefasList.length - 1;
    for (let index = 0; index <= listLength; index += 1) {
      const listElement = document.createElement('li');
      listElement.innerText = tarefasList[index];
      listElement.classList.add('item-tarefa');
      lista.appendChild(listElement);
    }
  }
}

window.onload = function() {
  initialRenderization();
};
