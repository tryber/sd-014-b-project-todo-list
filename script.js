/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
const input = document.querySelector('#texto-tarefa');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const btnApagatudo = document.querySelector('#apaga-tudo');
const btnRemoverConcluidos = document.querySelector('#remover-finalizados');
const btnSalvarTarefa = document.querySelector('#salvar-tarefas');
const btnMoverParaCima = document.querySelector('#mover-cima');
const btnMoverParaBaixo = document.querySelector('#mover-baixo');
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
    tarefas[i].classList.remove('selected');
  }
}

// Seleção de item na lista com preenchimento da linha
lista.addEventListener('click', function (event) {
  limparLinha();
  let tarefas = document.querySelectorAll('.item-tarefa');
  event.target.classList.add('selected');
});

// Subir linha de seleção
function upLineSelection() {
  let tarefas = document.querySelectorAll('.item-tarefa');
  let selected = document.querySelector('.selected');
  if (selected !== null) {
    let n = 1;
    if (tarefas[0].className === 'item-tarefa selected') {
      alert('Primeiro elemento já está selecionado!');
    } else {
      for (let i = 1; i < tarefas.length; i += 1) {
        if (tarefas[i].className === 'item-tarefa selected' || tarefas[i].className === 'item-tarefa selected completed') {
          n = i;
        }
      }
      const sobeTexto = tarefas[n].innerText;
      const sobeClasse = tarefas[n].className;
      tarefas[n].innerText = tarefas[n - 1].innerText;
      tarefas[n].className = tarefas[n - 1].className;
      tarefas[n - 1].innerText = sobeTexto;
      tarefas[n - 1].className = sobeClasse;
    }
  }
} 
btnMoverParaCima.addEventListener('click', upLineSelection);

// Descer linha de seleção
function downLineSelection() {
  let tarefas = document.querySelectorAll('.item-tarefa');
  let selected = document.querySelector('.selected');
  if (selected !== null) {
    let n = tarefas.length - 1;
    if (tarefas[n].className === 'item-tarefa selected') {
      alert('Último elemento já está selecionado!');
    } else {
      for (let i = 0; i < tarefas.length; i += 1) {
        if (tarefas[i].className === 'item-tarefa selected' || tarefas[i].className === 'item-tarefa selected completed') {
          n = i;
        }
      }
      const desceTexto = tarefas[n].innerText;
      const desceClasse = tarefas[n].className;
      tarefas[n].innerText = tarefas[n + 1].innerText;
      tarefas[n].className = tarefas[n + 1]. className;
      tarefas[n + 1].innerText = desceTexto;
      tarefas[n + 1].className = desceClasse;
    }
  }
}
btnMoverParaBaixo.addEventListener('click', downLineSelection);

function tarefaCompleta(event) {
  let verificador = event.target.className;
  if (verificador === 'item-tarefa completed selected') {
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

// Remove itens concluídos
function removerConcluidos() {
  const tamanhoListaCompleta = document.querySelectorAll('.completed');
  if (tamanhoListaCompleta.length !== 0) {
    for (let i = tamanhoListaCompleta.length; i > 0; i -= 1) {
      lista.removeChild(document.querySelector('.completed'));
    }
  } else {
    alert('Não existem tarefas concluídas!');
  }
}
btnRemoverConcluidos.addEventListener('click', removerConcluidos);

// Remove item selecionado
function removerSelecionados() {
  let selected = document.querySelector('.selected');
  if (selected !== null) {
    selected.remove();
  }
}
btnRemoverSelecionado.addEventListener('click', removerSelecionados);

// Adiciona tarefas ao LocalStorage
function addTarefaToLocalStorage() {
  let tarefas = document.getElementsByClassName('item-tarefa');
  console.log(tarefas[0]);
  let tarefasStorage = [];
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefasStorage.push(`${tarefas[i].innerHTML} ${tarefas[i].className}`);
  }
  localStorage.setItem('tarefas', JSON.stringify(tarefasStorage));
}
btnSalvarTarefa.addEventListener('click', addTarefaToLocalStorage);

// Inicialização do Local Storage
// Verifica se já existe um array criado, caso tenha carrega a lista
// caso não tenha, cria a chave de inicialização
function initialRenderization() {
  if (localStorage.getItem('tarefas') === null) {
    localStorage.setItem('tarefas', JSON.stringify([]));
  } else {
    const tarefasList = JSON.parse(localStorage.getItem('tarefas'));
    const listLength = tarefasList.length;
    for (let index = 0; index < listLength; index += 1) {
      let tarefaComClasse = tarefasList[index];
      let classe = tarefaComClasse.indexOf('item-tarefa');// Armazena o índice, onde inicia essa frase buscada
      let frase = tarefaComClasse.slice(0, classe); // Armazena a frase da posição 0 até o índice buscado anteriormente
      let classes = tarefaComClasse.slice(classe, tarefaComClasse.length); // Armazena as classes, iniciando do indice buscado até o final
      const listElement = document.createElement('li');
      listElement.innerText = frase;
      listElement.className = classes;
      lista.appendChild(listElement);
    }
  }
}

window.onload = function() {
  initialRenderization();
};
