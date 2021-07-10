window.onload = function() {

  if (localStorage.length != 0) {
    let salve = localStorage.getItem('list');
    console.log(salve);
    document.getElementById('lista-tarefas').innerHTML = salve;
  }

  const botaoCriarTarefa = document.getElementById('criar-tarefa');
  const botaoApagarLista = document.getElementById('apaga-tudo');
  const botaoApagarFinalizados = document.getElementById('remover-finalizados');
  const botaoSalvarLista = document.getElementById('salvar-tarefas');

  botaoCriarTarefa.addEventListener('click', addTarefa);
  botaoApagarLista.addEventListener('click', clearList);
  botaoApagarFinalizados.addEventListener('click', clearCompleted);
  botaoSalvarLista.addEventListener('click', salveList);

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

function markTask(event) {
  
  let items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    items[i].style.backgroundColor = 'transparent';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';

}

function completeTask(event) {
  event.target.classList.toggle('completed');
}

function clearList() {
  let items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    items[i].remove();
  }
}

function clearCompleted() {
  let itemsCompleted = document.querySelectorAll('.completed');
  for (let i = 0; i < itemsCompleted.length; i += 1) {
    itemsCompleted[i].remove();
  }
}

function salveList() {
  let itemsSalvos = document.querySelector('#lista-tarefas').innerHTML;
  localStorage.setItem('list', itemsSalvos);
}
