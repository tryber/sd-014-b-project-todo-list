/* eslint-disable sonarjs/no-use-of-empty-return-value */
// Requisito 2
const instructions = document.createElement('p');
instructions.id = 'funcionamento';
instructions.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
document.getElementById('header').appendChild(instructions);

// Requisito 3

const input = document.querySelector('.input-task'); // seleciona o local de append child
const inputTask = document.createElement('input');
inputTask.type = 'text';
inputTask.id = 'texto-tarefa';
input.appendChild(inputTask);

// Requisito 4

const task = document.querySelector('.task-list'); // seleciona o local de append child
const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
task.appendChild(taskList);

// Requisito 5

const button = document.querySelector('.button-input-task'); // seleciona o local de append child
const buttonInput = document.createElement('button');
buttonInput.id = 'criar-tarefa';
buttonInput.innerText = 'Adicionar tarefa';
button.appendChild(buttonInput);

function addAnotherTask() {
  const text = inputTask.value; // define uma variável para armazenar p valor do input 
  if (text === '') { // analisa se a o input está vazio
    alert('Insira uma tarefa!');
  }
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  li.classList.add('taskItem');
  li.id = 'task-item';
  li.innerText = text; // aqui retorna o valor do input para adicionar na lista
  ol.appendChild(li);
  document.getElementById('myForm').reset(); // https://www.w3schools.com/Jsref/met_form_reset.asp
}

buttonInput.addEventListener('click', addAnotherTask);

// Quesito 7 // referencia https://github.com/tryber/sd-012-project-todo-list/blob/duribeiro-todo-list/script.js

const ol = document.getElementById('lista-tarefas');

function selectItem(event) {
  const itemSelected = document.querySelector('.selected');
  if (itemSelected !== null) { // aqui vai remover a classe se ela ja estiver adicionada
    itemSelected.classList.remove('selected');
  }
  event.target.classList.add('selected'); // note que o event está fora do if (passa pelo if primeiro a função)
  paintTask(); // funciona como um else esse event.target
}
ol.addEventListener('click', selectItem);
// depois alterar cor de classe(.selected) no css)

// Requesito 8
// ja foi feito no 7

// Requisito 9

const completeOl = document.getElementById('lista-tarefas');

function selectCompleted(event){ // os elementos agora irão transitar entre mais uma classe
let completedSelected = document.querySelector('.completed');
event.target.classList.add('completed');   
}
completeOl.addEventListener('dblclick', selectCompleted);

// Requisito 10 // referencia https://github.com/tryber/sd-012-project-todo-list/blob/julio-barros-todo-list/script.js

const clickClear = document.querySelector('.button-clear'); 
const buttonClear = document.createElement('button');
buttonClear.innerHTML = 'Limpar tarefas';  
clickClear.appendChild(buttonClear);
buttonClear.id = 'apaga-tudo';

function clearBox() {
  const itemsToClear = document.getElementsByTagName('li'); // cria um array de elementos
  const list = document.querySelector('#lista-tarefas'); // define o node da lista
  if (itemsToClear.length > 0) {
    while (list.firstChild) { // enquanto a lista tiver uma child o código será executado
      list.removeChild(list.firstChild);
    }
  } else {
    alert('A lista está vazia!'); // aqui verifica se a lista está vazia ao iniciar, se nao estiver vai para o loop
  }
}
buttonClear.addEventListener('click', clearBox);

// Requisito 11

const clickClearCompleted = document.querySelector('.button-clear-completed');
const buttonClearCompleted = document.createElement('button');
buttonClearCompleted.innerHTML = 'Limpar tarefas completas';
clickClearCompleted.appendChild(buttonClearCompleted);
buttonClearCompleted.id = 'remover-finalizados';

function clearBoxCompleted() {
  const itemsCompletedToClear = document.getElementsByClassName('completed'); // cria array de items selecionados (com a classe 'completed')
  const listCompletedToClear = document.querySelector('#lista-tarefas'); // seleciona os elementos da lista de tarefas para comparar suas classes
  if (itemsCompletedToClear.length > 0) { // aqui analisa se tem algum item marcado (com a classe completed) compara as classes
    while (listCompletedToClear.firstChild) { // enquanto a lista tiver uma child o código será executado
      itemsCompletedToClear[0].parentNode.removeChild(itemsCompletedToClear[0]); // removes a specified child node of the specified element.
    } // o loop vai passar pelo array dos elementos da classe selected e removê-los
  } else {
    alert('Você não possui tarefas completas!');
  }
}
buttonClearCompleted.addEventListener('click', clearBoxCompleted);

// Quesito 12 referencia https://github.com/tryber/sd-012-project-todo-list/blob/luciano-lanes-lopes-project-todo-list/script.js

const clickSave = document.querySelector('.button-save');
const buttonSave = document.createElement('button');
buttonSave.innerHTML = 'Atualizar tarefas';
clickSave.appendChild(buttonSave);
buttonSave.id = 'salvar-tarefas';

function saveTasks() {
  const taskListSaveLocal = document.getElementById('lista-tarefas');
  localStorage.setItem('tasks', taskListSaveLocal.innerHTML);
}  
function retrieveTasks() {
  const taskListSaveLocal = document.getElementById('lista-tarefas');
  taskListSaveLocal.innerHTML = localStorage.getItem('tasks');
}

window.onload = retrieveTasks(); // Execute a JavaScript immediately after a page has been loaded:
buttonSave.addEventListener('click', saveTasks);

// Quesito 13 - primeiro precisamos selecionar o elemento -> com a classe selected

const clickUp = document.querySelector('.button-up'); 
const buttonUp = document.createElement('button');
buttonUp.innerHTML = 'Mover para cima';  
clickUp.appendChild(buttonUp);
buttonUp.id = 'mover-cima';

function moveUp() { // referencia https://github.com/tryber/sd-012-project-todo-list/blob/caroline-benichio-todo-list/script.js
  const ol = document.querySelector('#lista-tarefas');
  const taskUp = document.querySelector('.selected'); // aqui define qual elemento será movido
  if (ol.firstChild !== taskUp && taskUp != null) { // The logical AND (&&) operator (logical conjunction) for a set of operands is true if and only if all of its operands are true 
    ol.insertBefore(taskUp, taskUp.previousSibling); // insertBefore ---> https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
  } // !== null é quando a classe é a selected (o item clicado)
} // pega o elemento de baixo (o previousSibling) e adiciona o item selecionado em cima dele (before)
buttonUp.addEventListener('click', moveUp);

const clickDown = document.querySelector('.button-down'); // mover item está relacionado com a posição das childs nos nós
const buttonDown = document.createElement('button');
buttonDown.innerHTML = 'Mover para baixo';
clickDown.appendChild(buttonDown);
buttonDown.id = 'mover-cima';

function moveDown() {
  const ol = document.querySelector('#lista-tarefas');
  const taskDown = document.querySelector('.selected');
  if (ol.lastChild !== taskDown && taskDown != null) { // aqui compara as childs da lista e o elemento selecionado
    ol.insertBefore(taskDown.nextSibling, taskDown); // o if é para comparar os demais elementos da lista porque eles 
  } // serão usados como parâmetro de inserção. O parâmetro de inserção "para baixo" é mover o elemento em relação a posição dos seus irmãos filhos da lista
}
buttonDown.addEventListener('click', moveDown);

// Requisito 14

const clickRemoveSelected = document.querySelector('.button-up');
const buttonRemoveSelected = document.createElement('button');
buttonRemoveSelected.innerHTML = 'Remover tarefa selecionada';
clickRemoveSelected.appendChild(buttonRemoveSelected);
buttonRemoveSelected.id = 'remover-selecionado';

function removeTaskSelected() {
  const taskSelectedToRemove = document.querySelector('.selected'); // aqui seleciona o elemento a ser limpo
  taskSelectedToRemove.remove(); // The Element.remove() method removes the element from the tree it belongs to.
}
buttonRemoveSelected.addEventListener('click', removeTaskSelected);
