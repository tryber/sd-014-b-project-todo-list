// CONSTANTS:
const query = document.querySelector.bind(document); // REF. [3]
const queryAll = document.querySelectorAll.bind(document); // REF. [3]
const newTaskButton = query('#criar-tarefa');
const inputWindow = query('#texto-tarefa');
const orderedList = query('#lista-tarefas')
const clearButton = query('#apaga-tudo');
const removeButton = query('#remover-finalizados');
const removeSelectedButton = query('#remover-selecionado');
const saveTasks = query('#salvar-tarefas');
const moveUpButton = query('#mover-cima')
const moveDownButton = query('#mover-baixo')

// FUNCTIONS:
function getInput() { 
  return inputWindow.value
}

function eraseInput() { 
  inputWindow.value = '';
}

function addToList(input) { // REF. [1]
  let liNode = document.createElement('li'); // Cria li
  liNode.classList.add('list-item');
  let  nodeText = document.createTextNode(input); // Cria um texto
  liNode.appendChild(nodeText); // Aloca o texto dentro do li
  orderedList.appendChild(liNode); // Aloca o li na ol
}

function eraseListItem(listElement) {
  orderedList.removeChild(listElement); // REF. [2]
}

function moveUp() {
  moveUpButton.addEventListener('click', () => {
    if (!query('.selected')) {
      return; // Se nada selecionado, termina a função
    }
    if (query('.selected').previousElementSibling) { // Se houver anterior
        query('.selected').parentNode.insertBefore(
        query('.selected'),
        query('.selected').previousElementSibling, // Explicação: 1
      );
    }
  });
}
moveUp();

function moveDown() {
  moveDownButton.addEventListener('click', () => {
    if (!query('.selected')) {
      return; // Se nada selecionado, termina a função
    }
    if (query('.selected').nextElementSibling) { // Se houver próximo
        query('.selected').parentNode.insertBefore(
        query('.selected').nextElementSibling,
        query('.selected'),
      );
    }
  });
}
moveDown();

// EVENT LISTENERS:
newTaskButton.addEventListener('click', (event)=>{
  if (inputWindow.value === '') {
    alert('Digite algo!');
    return
  }
  addToList(getInput());
  eraseInput();
});

inputWindow.addEventListener('keypress', (event)=>{
  if (event.key === 'Enter'){
    if (inputWindow.value === '') {
      alert('Digite algo!');
      return
    }
    addToList(getInput());
    eraseInput();
  }
});

orderedList.addEventListener('click', (event)=>{
  let listItem = queryAll('.list-item');
  for (let i = 0; i < listItem.length; i++) {
    listItem[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}) // REF. [4]


orderedList.addEventListener('dblclick', (event)=>{
  let listItem = queryAll('.list-item');
  for (let i = 0; i < listItem.length; i++) {
    if (listItem[i] === event.target){
      if (!listItem[i].classList.contains('completed')){
        listItem[i].classList.add('completed');
      } else if (listItem[i].classList.contains('completed')){
        listItem[i].classList.remove('completed');
      }
    }
  }
});

clearButton.addEventListener('click', (event)=>{
  let listItem = queryAll('.list-item');
    for (let i=0; i < listItem.length; i++) {
    eraseListItem(listItem[i]);
    }
});

removeButton.addEventListener('click', (event)=>{
  let listItem = queryAll('.list-item');
  for (let i = 0; i < listItem.length; i++) {
    if (listItem[i].classList.contains('completed')){
      eraseListItem(listItem[i]);
    }
  }
});

removeSelectedButton.addEventListener('click', (event)=>{
  let listItem = queryAll('.list-item');
  for (let i = 0; i < listItem.length; i++) {
    if (listItem[i].classList.contains('selected')){
      eraseListItem(listItem[i]);
    }
  }
});

saveTasks.addEventListener('click', (event)=>{
  localStorage.setItem('list', orderedList.innerHTML);
  window.alert('Lista salva');
});

window.onload = () => {
  orderedList.innerHTML = localStorage.getItem('list');
};

// REFERÊNCIAS:
// [1]: appendChild() method: 
//w3schools.com/jsref/met_node_appendchild.asp
// [2]: removeChild() method: 
//geeksforgeeks.org/how-to-remove-an-html-element-using-javascript/
// [3]: A ideia de mudar querySelector para query e o norte 
//para fazer as funções moveUp e moveDown vieram do código do 
//colega Glauco Lombeira
// [4]: Ajuda direta do colega Henrique Almeida para debugar o código

// EXPLICAÇÕES
// 1 - parentNode.insertBefore(arg1, arg2);
// 'Por que usar parentNode?' Porque essa é a notação da função.
// É assim que chama ela.
// Arg1 = argumento 1: O que você quer mudar de lugar
// Arg2 = argumento 2: O node, nó, elemento anterior ao arg1
// Seja a lista: 1.a 2.b 3.c
// Você quer que ela seja: 1.b 2.a 3.c
// Você quer, então, trocar a e b.
// arg1 é b, arg2 é a, porque você quer colocar b no lugar do que vem antes de, a
// Seja a lista: 1.a 2.b 3.c
// Você quer que ela seja: 1.a 2.c 3.b
// arg1 é c e arg2 é b, porque você quer colocar c no lugar do b
