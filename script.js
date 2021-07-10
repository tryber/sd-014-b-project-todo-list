const input = document.querySelector('#texto-tarefa');
const inputLocalStorage = document.getElementById('texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const btnApagatudo = document.querySelector('#apaga-tudo');
const btnRemoverConcluidos = document.querySelector('#remover-finalizados');

function addTarefa() {
  let itemTarefa = document.createElement('li');
  itemTarefa.classList.add('item-tarefa');
  itemTarefa.innerText = input.value;
  lista.appendChild(itemTarefa);
  input.value = '';
}

function addTarefaToLocalStorage() {
  const oldList = JSON.parse(localStorage.getItem('tarefas'));
  const tarefasText = inputLocalStorage.value;
  oldList.push(tarefasText);
  localStorage.setItem('tarefas', JSON.stringify(oldList));
  addTarefa();
}
btnCriarTarefa.addEventListener('click', addTarefaToLocalStorage);

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
btnRemoverConcluidos.addEventListener('click', removerConcluidos);

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
      lista.appendChild(listElement);
    }
  }
}

window.onload = function() {
  initialRenderization();
};
