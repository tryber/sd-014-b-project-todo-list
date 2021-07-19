const tasks = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');

button.addEventListener('click', function () {
  const newTasks = document.createElement('li');

  newTasks.innerHTML = tasks.value;
  toDoList.appendChild(newTasks);

  tasks.value = '';

  const buttonClear = document.getElementById('apaga-tudo');

  buttonClear.addEventListener('click', function () {
    toDoList.innerHTML = '';
  });
});
