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

function moveUp() {
  let ol = document.querySelector('ol');
  let lista = document.querySelectorAll('li'); 
  let item = document.querySelector('.cinza');
  if (item === null) { return 'Erro'; }
  let posicao = 0;
  lista.forEach((itens, index) => { { if ( itens === item ) { posicao = index; } } });
  const up = posicao - 1;
  let lista2 = [];
  for (let index = 0; index < lista.length; index += 1) {
    if (index === up) {
      lista2.push(item);
      lista2.push(lista[index]);
      index += 1;
    } else { lista2.push(lista[index]); }
  }
  lista.forEach((itens) => { ol.removeChild(itens); });
  lista.forEach((itens, index) => { ol.appendChild(lista2[index]); });
}

function moveDown() {
  let ol = document.querySelector('ol');
  let lista = document.querySelectorAll('li'); 
  let item = document.querySelector('.cinza');
  if (item === null) { return 'Erro'; }
  let posicao = 0;
  lista.forEach((itens, index) => { { if ( itens === item ) { posicao = index; } } });
  let lista2 = [];
  if (posicao !== lista.length - 1) {
    for (let index = 0; index < lista.length; index += 1) {
      if (index === posicao) {
        lista2.push(lista[index + 1]);
        lista2.push(item);
        index += 1;
      } else { lista2.push(lista[index]); }
    }
    lista.forEach((itens) => { ol.removeChild(itens); });
    lista.forEach((itens, index) => { ol.appendChild(lista2[index]); });
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
function removeFinalizados() {
let ol = document.getElementById('lista-tarefas');
let lista = document.querySelectorAll('li');
for (let item of lista) {
if(item.classList[0] === 'completed' || item.classList[1] === ('completed') ) {
ol.removeChild(item);
}
}
}

function salvarLista () {
localStorage.clear();
let lista = document.querySelectorAll('li');
for (let index = 0; index <= lista.length - 1; index += 1){
localStorage.setItem('lista' + index, lista[index].innerText);
for (let nome of lista[index].classList)
localStorage.setItem('classe' + nome + '.' + index, nome );
}
}

function imprimirListaSalva() {
let ol = document.querySelector('ol');
for (let index = 0; index <= localStorage.length -1; index += 1) { // falta tornar o localStorage.leght = lista.lenght;
let valor = localStorage.getItem('lista' + index);
if (valor !== null) {
let li = document.createElement('li');
li.innerText = valor;
ol.appendChild(li);
}
if (localStorage.getItem('classecinza.' + index ) === 'cinza') {
ol.lastChild.classList.add('cinza');
}
if (localStorage.getItem('classecompleted.' + index) === 'completed') {  // Essa linha não esta funcionando 
ol.lastChild.classList.add('completed');
}
}
}

const removeSelecionado = () => {
  const ol = document.querySelector('ol');
  const lista = document.querySelectorAll('li'); 
  const item = document.querySelector('.cinza');
  if (item === null) { return 'Erro'; }
  const lista2 = Array.from(lista).filter((items) => (item !== items)); // https://stackoverflow.com/questions/32765157/filter-or-map-nodelists-in-es6
  lista.forEach((itens) => { ol.removeChild(itens); });
  lista2.forEach((itens) => { ol.appendChild(itens); });
};

const buttonRemoveFinalizados = document.getElementById('remover-finalizados');
const buttonApagaTudo = document.getElementById('apaga-tudo');
const button = document.getElementById('criar-tarefa');
const buttonSalvar = document.getElementById('salvar-tarefas');
const buttonMoveUp = document.getElementById('mover-cima');
const buttonMovedown = document.getElementById('mover-baixo');
const buttonRemoverSelecionado = document.getElementById('remover-selecionado');
button.addEventListener('click', createItem);
button.addEventListener('click', addEvent);
buttonApagaTudo.addEventListener('click', apagaLista);
buttonRemoveFinalizados.addEventListener('click', removeFinalizados);
buttonSalvar.addEventListener('click', salvarLista);
imprimirListaSalva();
addEvent();
buttonMoveUp.addEventListener('click', moveUp);
buttonMovedown.addEventListener('click', moveDown);
buttonRemoverSelecionado.addEventListener('click', removeSelecionado);
