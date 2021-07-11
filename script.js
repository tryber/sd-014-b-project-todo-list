window.onload = function() {

  if (localStorage.length != 0) {
    let salve = localStorage.getItem('list');
    document.getElementById('lista-tarefas').innerHTML = salve;
    salveEvents();
  }

  const botaoCriarTarefa = document.getElementById('criar-tarefa');
  const botaoApagarLista = document.getElementById('apaga-tudo');
  const botaoApagarFinalizados = document.getElementById('remover-finalizados');
  const botaoSalvarLista = document.getElementById('salvar-tarefas');
  const botaoMoverCima = document.getElementById('mover-cima');
  const botaoMoverBaixo = document.getElementById('mover-baixo');
  const botaoExcluirSelecionado = document.getElementById('remover-selecionado');

  botaoCriarTarefa.addEventListener('click', addTarefa);
  botaoApagarLista.addEventListener('click', clearList);
  botaoApagarFinalizados.addEventListener('click', clearCompleted);
  botaoSalvarLista.addEventListener('click', salveList);
  botaoMoverCima.addEventListener('click', moveUp);
  botaoMoverBaixo.addEventListener('click', moveDown);
  botaoExcluirSelecionado.addEventListener('click', clearSelected)

}

function addTarefa() {

  let tarefa = document.getElementById('texto-tarefa').value;
  let lista = document.getElementById('lista-tarefas');
  let item = document.createElement('li');
  item.innerText = tarefa;
  item.addEventListener('click', markTask);
  item.addEventListener('dblclick', completeTask);
  lista.appendChild(item);
  document.getElementById('texto-tarefa').value = '';

}

function salveEvents() {

  let items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    items[i].addEventListener('click', markTask);
    items[i].addEventListener('dblclick', completeTask);
  }

}

function markTask(event) {
  
  let items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    items[i].style.backgroundColor = 'transparent';
    items[i].classList.remove('selected');
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.classList.add('selected');

}

function completeTask(event) {
  event.target.classList.toggle('completed');
}

function clearList() {
  let items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    items[i].remove();
  }
  localStorage.removeItem('list');
}

function clearCompleted() {
  let itemsCompleted = document.querySelectorAll('.completed');
  for (let i = 0; i < itemsCompleted.length; i += 1) {
    itemsCompleted[i].remove();
  }
  if (localStorage.length != 0) {
    localStorage.setItem('list', document.querySelector('#lista-tarefas').innerHTML);
  }
}

function clearSelected() {
  
  let itemSelecionado = document.querySelector('.selected');
  if (itemSelecionado != null) {
    itemSelecionado.remove();
    if (localStorage.length != 0) {
      localStorage.setItem('list', document.querySelector('#lista-tarefas').innerHTML);
    }
  }
  
}

function salveList() {
  let itemsSalvos = document.querySelector('#lista-tarefas').innerHTML;
  localStorage.setItem('list', itemsSalvos);
}

function moveUp() {

  let reservedElement = document.querySelector('.selected');
  if (reservedElement != null) {
    let elementoPai = reservedElement.parentElement;
    let elementoAnterior = reservedElement.previousElementSibling;

    if (elementoAnterior != null) {
      elementoPai.insertBefore(reservedElement, elementoAnterior);
    }
  }
  
}

function moveDown() {

  let reservedElement = document.querySelector('.selected');
  if (reservedElement != null) {
    let elementoPosterior = reservedElement.nextElementSibling;
  
    if (elementoPosterior != null) {
      elementoPosterior.insertAdjacentElement('afterend', reservedElement);
    }
  }

}
