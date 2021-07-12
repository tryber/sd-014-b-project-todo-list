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
  let itemNumber = 0;
  let tarefas = [];
  for(let index = 0; index <= lista.length - 1; index += 1) {
    // tarefas.push(lista[index]);
    if(item === lista[index]) {
      itemNumber = index;
      console.log(itemNumber);
    }
  }
  console.log(lista);
  if (itemNumber !== 0 && itemNumber !== lista.length - 1) {
    for(let index = 0; index <= lista.length - 1; index += 1) {
      if(index === itemNumber){
      }
       if(index < itemNumber) {
      ol.removeChild(lista[index]);
      ol.appendChild(lista[index]);
      return;
      }
    }
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


const buttonRemoveFinalizados = document.getElementById('remover-finalizados');
const buttonApagaTudo = document.getElementById('apaga-tudo');
const button = document.getElementById('criar-tarefa');
const buttonSalvar = document.getElementById('salvar-tarefas');
const buttonMoveUp = document.getElementById('mover-cima');
const buttonMovedown = document.getElementById('mover-baixo');
button.addEventListener('click', createItem);
button.addEventListener('click', addEvent);
buttonApagaTudo.addEventListener('click', apagaLista);
buttonRemoveFinalizados.addEventListener('click', removeFinalizados);
buttonSalvar.addEventListener('click', salvarLista);
imprimirListaSalva();
addEvent();
buttonMoveUp.addEventListener('click', moveUp);
