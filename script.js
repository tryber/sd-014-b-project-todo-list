const lista = document.querySelector('#lista-tarefas');
const botaoCriarTarefa = document.getElementById('criar-tarefa');
const botaoApagarLista = document.getElementById('apaga-tudo');
const botaoApagarFinalizados = document.getElementById('remover-finalizados');
const botaoSalvarLista = document.getElementById('salvar-tarefas');
const botaoMoverCima = document.getElementById('mover-cima');
const botaoMoverBaixo = document.getElementById('mover-baixo');
const botaoExcluirSelecionado = document.getElementById('remover-selecionado');

function markTask(e) {
  const items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    items[i].style.backgroundColor = 'transparent';
    items[i].classList.remove('selected');
  }
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  e.target.classList.add('selected');
}

function completeTask(event) {
  event.target.classList.toggle('completed');
}

function salveEvents() {
  const items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    items[i].addEventListener('click', markTask);
    items[i].addEventListener('dblclick', completeTask);
  }
}

function addTarefa() {
  const tarefa = document.getElementById('texto-tarefa').value;

  if (tarefa !== '') {
    const item = document.createElement('li');
    item.innerText = tarefa;
    item.addEventListener('click', markTask);
    item.addEventListener('dblclick', completeTask);
    document.getElementById('listaVazia').style.display = 'none';
    lista.style.display = 'block';
    lista.appendChild(item);
    document.getElementById('texto-tarefa').value = '';
  } else {
    alert('Informe uma tarefa!');
  }
}

function verificarListaVazia() {
  const items = document.querySelectorAll('li');
  if (items.length === 0) {
    document.getElementById('listaVazia').style.display = 'block';
    lista.style.display = 'none';
    if (localStorage.length !== 0) {
      localStorage.setItem('list', lista.innerHTML);
    }
  }
}

function clearList() {
  const items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    items[i].remove();
  }
  localStorage.removeItem('list');
  verificarListaVazia();
}

function clearCompleted() {
  const itemsCompleted = document.querySelectorAll('.completed');
  for (let i = 0; i < itemsCompleted.length; i += 1) {
    itemsCompleted[i].remove();
  }
  if (localStorage.length !== 0) {
    localStorage.setItem('list', lista.innerHTML);
  }
  verificarListaVazia();
}

function clearSelected() {
  const itemSelecionado = document.querySelector('.selected');
  if (itemSelecionado != null) {
    itemSelecionado.remove();
    if (localStorage.length !== 0) {
      localStorage.setItem('list', lista.innerHTML);
    }
  }
  verificarListaVazia();
}

function salveList() {
  const items = document.querySelectorAll('li');

  if (items.length !== 0) {
    if (document.querySelector('.selected') !== null) {
      document.querySelector('.selected').style.backgroundColor = 'transparent';
      document.querySelector('.selected').classList.remove('selected');
    }
    const itemsSalvos = lista.innerHTML;
    localStorage.setItem('list', itemsSalvos);
    alert('Lista salva!');
  } else {
    alert('Lista Vazia!');
  }
}

function moveUp() {
  const reservedElement = document.querySelector('.selected');
  if (reservedElement != null) {
    const elementoPai = reservedElement.parentElement;
    const elementoAnterior = reservedElement.previousElementSibling;

    if (elementoAnterior != null) {
      elementoPai.insertBefore(reservedElement, elementoAnterior);
    }
  }
}

function moveDown() {
  const reservedElement = document.querySelector('.selected');
  if (reservedElement != null) {
    const elementoPosterior = reservedElement.nextElementSibling;
    if (elementoPosterior != null) {
      elementoPosterior.insertAdjacentElement('afterend', reservedElement);
    }
  }
}

window.onload = () => {
  if (localStorage.length !== 0) {
    const salve = localStorage.getItem('list');
    lista.innerHTML = salve;
    document.getElementById('listaVazia').style.display = 'none';
    lista.style.display = 'block';
    salveEvents();
  }

  botaoCriarTarefa.addEventListener('click', addTarefa);
  botaoApagarLista.addEventListener('click', clearList);
  botaoApagarFinalizados.addEventListener('click', clearCompleted);
  botaoSalvarLista.addEventListener('click', salveList);
  botaoMoverCima.addEventListener('click', moveUp);
  botaoMoverBaixo.addEventListener('click', moveDown);
  botaoExcluirSelecionado.addEventListener('click', clearSelected);
};
