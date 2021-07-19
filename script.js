function newTask() {
    const info = document.getElementById('texto-tarefa').value
    const list = document.getElementById('lista-tarefas');
    const toDo = document.createElement('li');
    toDo.innerHTML = info;
    if (toDo !== '') {
      list.appendChild(toDo);
    }
    document.querySelector('#texto-tarefa').value = '';
    
}
//Referência: https://www.w3schools.com/jsref/prop_text_value.asp

function selectTask(select) {
  const taskSelected = document.querySelector('.selected');
  taskSelected.classList.remove('selected');
  select.target.classList.add('selected');
  console.log(select.target)
}

const taskList = document.querySelector('#lista-tarefas');
taskList.addEventListener('click', selectTask);

function completeTask(taskCompleted) {
  const doubleClickTask = taskCompleted;
  doubleClickTask.target.classList.toggle('completed')
}

taskList.addEventListener('dblclick', completeTask);

function clearList () {
  taskList.innerHTML = '';
}

function clearCompleted (){
  const completedTasks = document.getElementsByClassName('completed');
  for (let index = 0; index < completedTasks.length; index += 0) {
    completedTasks[index].remove();
  }
}

//Referência: https://developer.mozilla.org/en-US/docs/Web/API/Element/remove