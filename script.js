function changeColor(evento) {
  const listItems = document.querySelectorAll('.tasks');
  const itemClicked = evento.target;
  for (let index = 0; index < listItems.length; index += 1) {
    const item = listItems[index];

    // Muda a cor de todos para branco
    item.style.backgroundColor = 'rgb(0, 0, 0, 0)';

    // Seta a cor do item clickado para cinza
    itemClicked.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function taskCompleted(evento) {
  const itemClicked = evento.target;
  const searchClassCompleted = itemClicked.classList.contains('completed');

  // Verifica se possui a classe 'completed', se sim, remove, se não, adiciona
  if (searchClassCompleted === true) {
    itemClicked.classList.remove('completed');
  } else {
    itemClicked.classList.add('completed');
  }
}

function eventTasks() {
  const listItems = document.querySelectorAll('.tasks');

  for (let index = 0; index < listItems.length; index += 1) {
    const task = listItems[index];
    task.addEventListener('click', changeColor);
    task.addEventListener('dblclick', taskCompleted);
  }
}

const valueTxtTask = document.querySelector('#texto-tarefa');
// Cria os elementos li, dentro da lista
function createTask() {
  // Faz a ligação da OL e do Input Text
  const listTask = document.querySelector('#lista-tarefas');

  if (valueTxtTask === '') {
    alert('[ERRO] Campo vazio!');
  } else {
    // Cria o elemento, adiciona o texto inserido no input
    // Adiciona classe, evento de clique e adiciona no html
    const itemTask = document.createElement('li');
    itemTask.innerHTML = valueTxtTask.value;
    itemTask.className = 'tasks';

    listTask.appendChild(itemTask);
    eventTasks();
    // Seta o valor do input como vazio
    document.querySelector('#texto-tarefa').value = '';
  }
}
const btnAddTask = document.querySelector('#criar-tarefa');
btnAddTask.addEventListener('click', createTask);

// Ao apertar ENTER, irá executar a função createTask
// Gabriel Gartz - StackOverflow
// 04/02/2014 - às 15:35
function pressEnter(event) {
  if (event.keyCode !== 13) return;
  createTask();
}
valueTxtTask.addEventListener('keydown', pressEnter);

window.onload = function initialPage() {
  const listTask = document.querySelector('#lista-tarefas');

  if (localStorage.length > 0) {
    for (let index = 0; index < localStorage.length; index += 1) {
      listTask.innerHTML += localStorage.getItem(`name${index}`);
      eventTasks();
    }
  }
};

function clearTasks() {
  localStorage.clear();
  const listItems = document.querySelectorAll('.tasks');

  for (let index = 0; index < listItems.length; index += 1) {
    const task = listItems[index];
    task.parentNode.removeChild(task);
  }
}
const btnClearTasks = document.querySelector('#apaga-tudo');
btnClearTasks.addEventListener('click', clearTasks);

function saveTasks() {
  const listItems = document.querySelectorAll('.tasks');

  for (let index = 0; index < listItems.length; index += 1) {
    const task = listItems[index];
    localStorage.setItem(`name${index}`, task.outerHTML);
  }
}
const btnSalvarTarefas = document.querySelector('#salvar-tarefas');
btnSalvarTarefas.addEventListener('click', saveTasks);

function clearCompleted() {
  const listItems = document.querySelectorAll('.tasks');

  for (let index = 0; index < listItems.length; index += 1) {
    const task = listItems[index];
    const searchClassCompleted = task.classList.contains('completed'); // Retorna true se o elemento tiver a classe 'completed'
    if (searchClassCompleted === true) { // Se tiver, remove o elemento da lista e do Storage
      task.parentNode.removeChild(task);
    }
  }
}
const btnRemoveCompleted = document.querySelector('#remover-finalizados');
btnRemoveCompleted.addEventListener('click', clearCompleted);
