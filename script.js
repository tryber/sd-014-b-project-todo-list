// CONSTANTS:

const newTaskButton = document.querySelector('#criar-tarefa');
const inputWindow = document.querySelector('#texto-tarefa');
const orderedList = document.querySelector('#lista-tarefas')
const clearButton = document.querySelector('#apaga-tudo');

// FUNCTIONS:

function getInput() { 
  return inputWindow.value
}

function eraseInput() { 
  inputWindow.value = null;
}

function addToList(input) { // REF. [1]
  let liNode = document.createElement('li'); // Cria li
  liNode.classList.add('list-item');
  let  nodeText = document.createTextNode(input); // Cria um texto
  liNode.appendChild(nodeText); // Aloca o texto dentro do li
  orderedList.appendChild(liNode); // Aloca o li na ol
}

function eraseListItems() {
  let listItem = document.querySelectorAll('.list-item');
  for (let i=0; i < listItem.length; i++) {
    orderedList.removeChild(listItem[i]); // REF. [2]
  }
}

// EVENT LISTENERS:

newTaskButton.addEventListener('click', (event)=>{
  addToList(getInput());
  eraseInput();
});

inputWindow.addEventListener('keypress', (event)=>{
  if (event.key === 'Enter'){
    addToList(getInput());
    eraseInput();
  }
});

orderedList.addEventListener('click', (event)=>{
  let listItem = document.querySelectorAll('.list-item');
  for (let i=0; i < listItem.length; i++) {
    if (listItem[i].classList.contains('selected')) {
      listItem[i].classList.remove('selected');
      listItem[i].style.backgroundColor = 'white';
    } else if (listItem[i] === event.target){
      listItem[i].classList.add('selected');
      listItem[i].style.backgroundColor = 'rgb(128,128,128)';
    }
  }
});

orderedList.addEventListener('dblclick', (event)=>{
  let listItem = document.querySelectorAll('.list-item');
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
  eraseListItems();
});

// REFERÊNCIAS:

// [1]: appendChild() method: w3schools.com/jsref/met_node_appendchild.asp
// [2]: removeChild() method: geeksforgeeks.org/how-to-remove-an-html-element-using-javascript/
