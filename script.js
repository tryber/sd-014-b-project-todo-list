let botao = document.getElementById('criar-tarefa');
botao.addEventListener('click', criaTarefa);
function criaTarefa() {
  let lista = document.getElementById('lista-tarefas');
  let input = document.getElementById('texto-tarefa');
  let textoTarefa = input.value;
  lista.appendChild(document.createElement('li')).innerText = textoTarefa;
  document.querySelector('#texto-tarefa').value = '';
  for (i = 0; i < document.querySelectorAll('li').length; i++) {
    let tarefasLista = document.querySelectorAll('li')[i];
    tarefasLista.addEventListener('click', mudaCor);
    tarefasLista.addEventListener('dblclick', riscaItem);
  }
}

function mudaCor(event) {
  let tarefasLista = document.querySelectorAll('li');
  for (i = 0; i < tarefasLista.length; i++)
    if (tarefasLista[i].style.backgroundColor == 'rgb(128, 128, 128)') {
      tarefasLista[i].style.backgroundColor = '';
    }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function riscaItem(evento) {
  let tarefasLista = document.querySelectorAll('li');
  if (evento.target.style.textDecoration != 'line-through') {
    evento.target.style.textDecoration = 'line-through';
  } else {
    evento.target.style.textDecoration = 'none';
  }
}

const botaoApagaTudo = document.querySelector('#apaga-tudo');
botaoApagaTudo.addEventListener('click', cleanAll);
function cleanAll() {
  let listas = document.querySelectorAll('li');
  for (i = 0; i < listas.length; i++) {
    listas[i].remove();
  }
}
