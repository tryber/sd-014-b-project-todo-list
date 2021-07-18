const addButton = document.getElementById('criar-tarefa');
const allClearButton = document.getElementById('apaga-tudo');
const doneClearButton = document.getElementById('remover-finalizados');
let list = document.getElementById('lista-tarefas');
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

function UpdateList(clearAll) 
{
  const size = list.children.length;
  let count = 0;
  for (i = 0; i < size; i += 1)
  {
    if (clearAll) 
    {
      list.removeChild(list.firstChild);
    }
    else
    {
      if (list.children[count].classList.contains('completed')) 
      {
        list.removeChild(list.children[count]);
      }
      else
      {
        count += 1;
      }
    }
  }
}

addButton.addEventListener('click', CreateTask);
allClearButton.addEventListener('click', function(){UpdateList(true)});
doneClearButton.addEventListener('click', function(){UpdateList(false)});