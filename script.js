const addButton = document.getElementById('criar-tarefa');
const clearButton = document.getElementById('apaga-tudo');
let list;
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

function UpdateCompleteStatus(params) 
{
  params.target.classList.toggle('completed');
}

function CreateTask() 
{
  const newTask = document.createElement('li');  
  const taskValue = document.getElementById('texto-tarefa').value;
  newTask.innerText = taskValue;
  list.appendChild(newTask);
  newTask.addEventListener('click', UpdateBackgroundColor);
  newTask.addEventListener('dblclick', UpdateCompleteStatus)
  document.getElementById('texto-tarefa').value = '';

}

function CreateOlList() 
{
  list = document.createElement('ol');
  list.id = 'lista-tarefas';
  document.getElementById('corpo-lista').appendChild(list);
}

function ClearList() 
{
  list.parentElement.removeChild(list);  list = document.createElement('ol');
  CreateOlList();
}

addButton.addEventListener('click', CreateTask)
clearButton.addEventListener('click', ClearList)
window.onload = CreateOlList;