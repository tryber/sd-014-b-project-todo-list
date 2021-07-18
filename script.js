const button = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
let firstTime = true;
let previousSelected;

function UpdateBackgroundColor(params) 
{
  let target = params.target;
  if (previousSelected == target) return;
  target.classList.toggle('cinza');

  if (firstTime == true)
  {
    firstTime = false;
  }
  else
  {
    previousSelected.classList.toggle('cinza');
  }
  previousSelected = target;
}

function CreateTask() 
{
  const newTask = document.createElement('li');  
  const taskValue = document.getElementById('texto-tarefa').value;
  newTask.innerText = taskValue;
  list.appendChild(newTask);
  newTask.addEventListener('click', UpdateBackgroundColor);
  document.getElementById('texto-tarefa').value = '';

}

button.addEventListener('click', CreateTask)