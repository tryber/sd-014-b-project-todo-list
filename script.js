function createItem() {
  let input = document.getElementById('texto-tarefa');
  let ol = document.querySelector('ol');
  let li = document.createElement('li');
  li.innerText = input.value;
  ol.appendChild(li);
  input.value = '';
}
function apagaLista() {
  let lista = document.querySelectorAll('li'); // apaga a lista;
  let ol = document.querySelector('ol');
  for (let item of lista) {
    ol.removeChild(item);
  }
}


function sortItens() {
  let lista = document.querySelectorAll('li'); // Faz o ultimo Item da lista se tornar o primeiro.
  let ultimoItem = lista[lista.length - 1];   
  let ol = document.querySelector('ol');
  apagaLista();  
  ol.appendChild(ultimoItem);
  for (let index = 0; index < lista.length - 1; index += 1) {
    ol.appendChild(lista[index]);
  }
}

function addEvent() {
  let lista = document.querySelectorAll('li');
  // eslint-disable-next-line no-restricted-syntax
  for (let item of lista) {
    item.addEventListener('click', becomeGrey);
    item.addEventListener('dblclick', riscar);
  }
}

function becomeGrey(event) {
  let lista = document.querySelectorAll('li');
  // eslint-disable-next-line no-restricted-syntax
  for (let item of lista) {
    item.classList.remove('cinza');
  }
  event.target.classList.add('cinza');
}

function riscar(event) {
  if (event.target.classList[0] === 'completed' || event.target.classList[1] === 'completed') {
    event.target.classList.remove('completed');
  } else { event.target.classList.add('completed'); }
}
 

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', createItem);
button.addEventListener('click', addEvent);

// utton.addEventListener('click', sortItens);
// let h1 = document.querySelector('h1');
// h1.addEventListener('click', sortItens);
