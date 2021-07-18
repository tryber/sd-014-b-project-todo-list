const addButton = document.getElementById('criar-tarefa');
const allClearButton = document.getElementById('apaga-tudo');
const doneClearButton = document.getElementById('remover-finalizados');
const list = document.getElementById('lista-tarefas');
let previousSelected;

function UpdateBackgroundColor(params)
{
  const target = params.target;
  if (previousSelected === target) return;
  if (previousSelected !== undefined) previousSelected.classList.toggle('cinza');
  target.classList.toggle('cinza');
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
  newTask.addEventListener('dblclick', UpdateCompleteStatus);
  document.getElementById('texto-tarefa').value = '';
}

function UpdateList(params) 
{
  const size = list.children.length;
  const target = params.target.id;
  for (let i = 0; i < size; i += 1)
  {
    if (target === 'apaga-tudo')
    {
      list.removeChild(list.firstChild);
      continue;
    }
    if (list.children[i].classList.contains('completed'))
    {
      list.removeChild(list.children[i]);
      continue;
    }
  }
}

addButton.addEventListener('click', CreateTask);
allClearButton.addEventListener('click', UpdateList);
doneClearButton.addEventListener('click', UpdateList);
