const input = document.querySelector('#texto-tarefa'); /* Input requisito 3 */
const taskList = document.querySelector('#lista-tarefas'); /* Lista ordenada requisito 4 */
const button = document.querySelector('#criar-tarefa'); /* Botão requisito 5 */
const allTasks = document.getElementsByClassName('task'); /* Array com todas os list-itens, utilizado na função do requisito 7 e 8 */
const clearAllButton = document.querySelector('#apaga-tudo'); /* Botão requisito 10 */
const clearFinished = document.querySelector('#remover-finalizados'); /* Botão requisito 11 */
const saveTasks = document.querySelector('#salvar-tarefas'); /* Botão requisito 12 */
const moveUp = document.querySelector('#mover-cima'); /* Botão requisito 13 */
const moveDown = document.querySelector('#mover-baixo'); /* Botão requisito 13 */
const removeSelected = document.querySelector('#remover-selecionado'); /* Botão requisito 14 */

// Requisito 7 e 8
function enableSelection() {
  for (let i = 0; i < allTasks.length; i += 1) {
    allTasks[i].addEventListener('click', (event) => {
      for (let i2 = 0; i2 < allTasks.length; i2 += 1) {
        allTasks[i2].classList.remove('selected');
        event.target.classList.add('selected');
      }
    });
  }
}

//  Requisito 5 e 6

function createTask() {
  const createLi = document.createElement('li');
  createLi.setAttribute('class', 'task');
  if (input.value !== '') {
    taskList.appendChild(createLi);
    createLi.innerText = input.value;
    input.value = '';
  } else {
    alert('Insira um texto');
  }
  enableSelection();
}

button.addEventListener('click', createTask);

// Requisito 9
// Referencia do "ClassList.toggle()" https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList

function markCompleted(event) {
  event.target.classList.toggle('completed');
  if (taskList.classList.contains('completed')) {
    taskList.classList.remove('completed');
  }
}

taskList.addEventListener('dblclick', markCompleted);

// Requisito 10

function clearAll() {
  taskList.innerHTML = '';
  localStorage.clear();
}

clearAllButton.addEventListener('click', clearAll);

// Requisito 11

function clearDone() {
  const completedLis = document.getElementsByClassName('completed');

  for (let i = 0; i < completedLis.length; i += 0) {
    completedLis[i].remove();
  }
}

clearFinished.addEventListener('click', clearDone);

// Requisito 12

saveTasks.addEventListener('click', () => {
  localStorage.setItem('list', taskList.innerHTML);
});

window.onload = () => {
  taskList.innerHTML = localStorage.getItem('list');
  enableSelection();
};

// Requisito 13
// element.insertbefore() que usei para resolver os requisitos 13
// Referências https://stackoverflow.com/questions/34913953/move-an-element-one-place-up-or-down-in-the-dom-tree-with-javascript/34914096#34914096
// Documentação do MDN do element.insert.before() https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore

moveUp.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
    // Recomendação do Victor Martins, esse "if(selected)" já retorna um booleano.
    if (selected === allTasks[0]) {
      alert('Não pode mais subir');
    } else {
      selected.parentNode.insertBefore(selected, selected.previousElementSibling);
    }
  }
});

moveDown.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected) {
  // Recomendação do Victor Martins, esse "if(selected)" já retorna um booleano.
    if (selected.nextElementSibling === null) {
      alert('Não pode mais descer');
    } else {
      selected.parentNode.insertBefore(selected, selected.nextElementSibling.nextElementSibling);
    }
  }
});

// Requisito 14

removeSelected.addEventListener('click', () => {
  document.querySelector('.selected').remove();
});
