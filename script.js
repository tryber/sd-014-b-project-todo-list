const input = document.querySelector('#texto-tarefa'); /* Input requisito 3 */
const taskList = document.querySelector('#lista-tarefas'); /* Lista ordenada requisito 4 */
const button = document.querySelector('#criar-tarefa'); /* Botão requisito 5 */
const allTasks = document.getElementsByClassName('task'); /* Array com todas os list-itens, utilizado em várias funções */
const clearAllButton = document.querySelector('#apaga-tudo'); /* Botão requisito 10 */
const clearFinished = document.querySelector('#remover-finalizados'); /* Botão requisito 11 */
const saveTasks = document.querySelector('#salvar-tarefas'); /* Botão requisito 12 */

//  Requisito 5 e 6

function createTask() {
  const createLi = document.createElement('li');
  createLi.setAttribute('class', 'task');
  taskList.appendChild(createLi);
  createLi.innerText = input.value;
  input.value = '';
}

button.addEventListener('click', createTask);

//  Requisito 7 e 8

function selectTask(event) {
  for (let i = 0; i < allTasks.length; i += 1) {
    allTasks[i].classList.remove('selected');
    event.target.classList.add('selected');
  }
}

taskList.addEventListener('click', selectTask);

// Requisito 9

function markCompleted(event) {
  event.target.classList.toggle('completed');
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
  console.log(completedLis);
  for (let i = 0; i < completedLis.length; i += 0) {
    completedLis[i].remove();
  }
}

clearFinished.addEventListener('click', clearDone);

saveTasks.addEventListener('click', () => {
  localStorage.setItem('list', taskList.innerHTML);
});

window.onload = () => {
  taskList.innerHTML = localStorage.getItem('list');
};

clearFinished.addEventListener('click', clearDone);
