// Cria o campo de input
const inputContainer = document.querySelector('#input-container');
const inputTask = document.createElement('input');
inputTask.id = 'texto-tarefa';
inputTask.type = 'text';
inputContainer.appendChild(inputTask);

// Cria a lista ordenada
const listContainer = document.querySelector('#list-container');
const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
listContainer.appendChild(taskList);

// Cria o botão de criar tarefas
const btnCreateTask = document.createElement('button');
btnCreateTask.id = 'criar-tarefa';
btnCreateTask.innerText = 'Adicionar';
inputContainer.appendChild(btnCreateTask);

// Marca tarefa como completa
function markAsCompleted(event) {
  const getTaskClassList = event.target.classList;
  let count = 0;
  for (let index = 0; index < getTaskClassList.length; index += 1) {
    if (getTaskClassList[index] === 'completed') {
      event.target.classList.remove('completed');
      count += 1;
    }
  }
  if (count === 0) {
    event.target.classList.add('completed');
  }
}

// Função para criar e adicionar novas tarefas à lista ordenada
function createNewTask() {
  const inputText = inputTask.value;
  const newTask = document.createElement('li');
  newTask.className = 'task';
  newTask.innerHTML = inputText;
  taskList.appendChild(newTask);
  inputTask.value = '';

  // Adiciona evento de clique que seleciona uma tarefa
  newTask.addEventListener('click', (event) => {
    const selectedTask = document.querySelectorAll('.selected');
    if (selectedTask.length !== 0) {
      selectedTask[0].classList.remove('selected');
    }
    event.target.classList.add('selected');
  });

  // Adiciona evento de duplo clique que marca uma tarefa como completa
  newTask.addEventListener('dblclick', markAsCompleted);
}

// Adiciona o evento de click ao botão de criar tarefas
btnCreateTask.addEventListener('click', createNewTask);

// Cria botão que apaga todas as tarefas
const buttonsContainer = document.querySelector('#buttons-container');
const btnDeleteTasks = document.createElement('button');
btnDeleteTasks.id = 'apaga-tudo';
btnDeleteTasks.innerText = 'Limpar Lista';
buttonsContainer.appendChild(btnDeleteTasks);

// Função que apaga todas as tarefas
function deleteAllTasks() {
  const getAllTasks = document.querySelectorAll('.task');
  for (let index = 0; index < getAllTasks.length; index += 1) {
    getAllTasks[index].remove();
  }
}

// Adiciona evento de clique ao botão que apaga todas as tarefas da lista
btnDeleteTasks.addEventListener('click', deleteAllTasks);
