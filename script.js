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
}

// Adiciona o evento de click ao botão de criar tarefas
btnCreateTask.addEventListener('click', createNewTask);
