const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

function CreateTask() 
{
  const newTask = document.createElement('li');  
  const taskValue = document.getElementById('texto-tarefa').value;
  newTask.innerText = taskValue;
  list.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
}

button.addEventListener('click', CreateTask)