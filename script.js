const taskList = document.querySelector('#lista-tarefas');
const addTaskButton = document.querySelector('#criar-tarefa');
const taskInput = document.querySelector('#text-tarefa');

addTaskButton.addEventListener('click', function () {
  const li = document.createElement('li');
  taskList.appendChild(li);
  li.innerText = taskInput.value;
  taskInput.value = '';
});

const clearButton = document.querySelector('#apaga-tudo');
clearButton.addEventListener('click', function () {
  const tasks = document.getElementById('lista-tarefas').querySelectorAll('li');
  tasks.remove();
});




// const clearButton = document.querySelector('#apaga-tudo');
// clearButton.addEventListener('click', function () {
//   taskList.removeChild(taskList.childNodes);
// });