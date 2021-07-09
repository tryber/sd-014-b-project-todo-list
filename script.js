const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');

function addTask() {
  const liCreate = document.createElement('li');
  liCreate.innerText = taskInput.value;
  taskList.appendChild(liCreate);
  taskInput.value = '';
  console.log(taskInput);
}

button.addEventListener('click', addTask);
