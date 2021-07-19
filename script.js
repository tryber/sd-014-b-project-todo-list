const addButton = document.getElementById('criar-tarefa');
const allClearButton = document.getElementById('apaga-tudo');
const doneClearButton = document.getElementById('remover-finalizados');
const saveButton = document.getElementById('salvar-tarefas');
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
  newTask.innerText = document.getElementById('texto-tarefa').value;
  list.appendChild(newTask);
  newTask.addEventListener('click', UpdateBackgroundColor);
  newTask.addEventListener('dblclick', UpdateCompleteStatus);
  document.getElementById('texto-tarefa').value = '';
}

function SaveList(params) 
{
  window.sessionStorage.clear();
  UpdateList(params);
}

function UpdateList(params)
{
  let count = 0;
  const target = params.target.id;
  const items = list.children;
  const size = items.length;

  for (let i = 0; i < size; i += 1)
  {
    switch (target)
    {
      case 'salvar-tarefas':
        const isCompleted = items[i].classList.contains('completed');
        const text = items[i].innerText;
        window.sessionStorage.setItem(i, [text + ',' + isCompleted]);
        break;

      case 'apaga-tudo':
        list.removeChild(list.firstChild);
        break;

      case 'remover-finalizados':
        if (items[count].classList.contains('completed'))
        {
          list.removeChild(items[count]);
        }else count += 1;
        break;
    }
  }
}

function UpdateStorage(params)
{
  const items = list.children;
  for (let i = 0; i < window.sessionStorage.length -1; i += 1)
  {
    CreateTask();
    let content = window.sessionStorage.getItem(i).split(',');
    items[i].innerText = content[0];
    items[i].classList.toggle((content[1] == 'true')?'completed':null);
  }
}

function print(params) 
{
  console.log(params); 
}

addButton.addEventListener('click', CreateTask);
allClearButton.addEventListener('click', UpdateList);
doneClearButton.addEventListener('click', UpdateList);
saveButton.addEventListener('click', SaveList)
window.onload = UpdateStorage;
