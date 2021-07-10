/* VINICIUS SANTANA */
const addButton = document.getElementById('criar-tarefa'); // #5
const input = document.getElementById('texto-tarefa'); // #5
const ol = document.getElementById('lista-tarefas'); // #5 - 10 - 11
const resetButton = document.getElementById('apaga-tudo'); // #10
const resetCompletedButton = document.getElementById('remover-finalizados'); // #10
const saveButton = document.getElementById('salvar-tarefas'); // #12
const paraCimaButton = document.getElementById('mover-cima'); // #13
const paraBaixoButton = document.getElementById('mover-baixo'); // #13
const removerSelecionadoButton = document.getElementById('remover-selecionado'); // #14
const rgb = 'rgb(128, 128, 128)';

// Requisito 12 parte 2
function storage() {
  ol.innerHTML = localStorage.ol; // Pega dados de LocalStorage e coloca na OL
}
storage();

// Requisito #7 #8
function backgroundList(event) {
  const evento = event.target;
  // [1] se (nenhum item da lista selecionado)> pintar e selecionar(com classe)
  // [2] senão > apagar selecionado e fazer o 1
  const coloredItem = document.querySelector('.select');
  if (coloredItem === null) {
    evento.style.backgroundColor = rgb;
    evento.classList.add('select');
  } else {
    coloredItem.style.backgroundColor = ''; // Remove cor Selecionado do anterior
    coloredItem.classList.remove('select'); // Remove Classe 'Selecionado' anterior
    evento.style.backgroundColor = rgb; // add cor ao novo
    evento.classList.add('select'); // Fixa como selecionado.
  }
}

// Requisito 9
function completed(event) {
  const evento = event.target;
  // [1] se (conter a classe 'completed' )> remover completed [2] senão > adicionar completed
  const completedItem = evento.classList.contains('completed');
  console.log(completedItem);
  if (completedItem) {
    evento.classList.remove('completed');
  } else {
    evento.classList.add('completed');
  }
}

// Adiciona eventos de 9 e 7
function listEvent() {
  const list = document.querySelectorAll('.item-lista');
  console.log(list);
  for (let index = 0; index < list.length; index += 1) {
    list[index].addEventListener('click', backgroundList); // [#7]adiciona eventos a li
    list[index].addEventListener('dblclick', completed); // [#9]
  }
}

// requisito #5
function criaTarefa() {
  const criaItem = document.createElement('li'); // 2-cria li
  criaItem.innerHTML = input.value; // 3-adiciona texto na li
  criaItem.classList.add('item-lista'); // [requisito #7] adiciona class para usar em outro requisito
  ol.appendChild(criaItem); // 4-adiciona li na ol
  listEvent(); // [requisito #7] adiciona evento ao li
  input.value = ''; // 5-Apaga o conteúdo do input
}
addButton.addEventListener('click', criaTarefa); // 1 - Ao clicar inicia função já declarada

// Requisito 10
function resetAll() {
  const list = document.querySelectorAll('.item-lista'); // Seleciona todos (li)
  for (let index = 0; index < list.length; index += 1) {
    ol.removeChild(list[index]); // Remove todos (li) da (ol)
  }
}
resetButton.addEventListener('click', resetAll);

// Requisito 11
function resetCompleted() {
  const list = document.querySelectorAll('.completed'); // Seleciona todos os completos
  for (let index = 0; index < list.length; index += 1) {
    ol.removeChild(list[index]); // remove todos da lista (ol)
  }
}
resetCompletedButton.addEventListener('click', resetCompleted);

// Requisito 12
function saveList() {
  // Pega o conteúdo do HTML da OL(todas li) e Salva no Local Storage.
  const dados = document.querySelector('ol').innerHTML;
  localStorage.setItem('ol', dados);
}
saveButton.addEventListener('click', saveList);

// Requisito 13
function paraCima() {
  const primeiroFilho = ol.firstElementChild;
  const selecionado = document.querySelector('.select');
  // verifica se primeiro filho é diferente de selecionado
  // && verifica se selecionado existe(verdadeiro) ou não existe(falso/null)
  // OBS: se 'selecionado' não existir vai ocorrer erro no 'anterior'(Não passa no NPM mas funciona)
  if (primeiroFilho !== selecionado && selecionado) {
    const anterior = selecionado.previousElementSibling;
    const temporario = selecionado.innerText;
    selecionado.innerText = anterior.innerText;
    selecionado.style.backgroundColor = '';
    selecionado.classList.remove('select');
    anterior.innerText = temporario;
    anterior.classList.add('select');
    anterior.style.backgroundColor = rgb;
  }
}
paraCimaButton.addEventListener('click', paraCima);

function paraBaixo() {
  const ultimoFilho = ol.lastElementChild;
  const selecionado = document.querySelector('.select');
  if (ultimoFilho !== selecionado && selecionado) {
    const proximo = selecionado.nextSibling;
    const temporario = selecionado.innerText;
    selecionado.innerText = proximo.innerText;
    selecionado.style.backgroundColor = '';
    selecionado.classList.remove('select');
    proximo.innerText = temporario;
    proximo.classList.add('select');
    proximo.style.backgroundColor = rgb;
  }
}
paraBaixoButton.addEventListener('click', paraBaixo);

// Requisito 14
function removeSelected() {
  const selected = document.querySelector('.select');
  ol.removeChild(selected);
}
removerSelecionadoButton.addEventListener('click', removeSelected);
