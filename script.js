let tasks = document.getElementById('texto-tarefa');
let button = document.getElementById('criar-tarefa');
let toDoList = document.getElementById('lista-tarefas');

button.addEventListener('click', function () {
  let newTasks = document.createElement('li');

  newTasks.innerHTML = tasks.value;
  toDoList.appendChild(newTasks);

  tasks.value = '';
});
