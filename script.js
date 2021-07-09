window.onload = function() {

  let addTaskButton = document.getElementById('criar-tarefa');
  addTaskButton.addEventListener('click', addTask);
  let removeClearedButton = document.getElementById('apaga-tudo');
  removeClearedButton.addEventListener('click', removeClearedTasks);

  function addTask() {
    let input = document.getElementById('texto-tarefa');
    let newTask = document.createElement('li');
    let position = document.getElementById('lista-tarefas');

    newTask.className = 'tarefa';
    newTask.innerText = input.value;
    newTask.addEventListener('click', highlight);
    newTask.addEventListener('dblclick', riskCleared);
    position.appendChild(newTask);
  }

  function highlight(selection) {
    let selectionedTask = document.querySelectorAll('.selected');
    if (selectionedTask.length !== 0) { 
    selectionedTask[0].classList.remove('selected');
    }
    selection.target.classList.add('selected');
  }

  function riskCleared(selection) {
    let classes = selection.target.classList;
    if (classes.length === 2) {
      classes.add('cleared');
    } else {
      classes.remove('cleared');
    }
  }

  function removeClearedTasks() {
    let clearedTasks = document.querySelectorAll('.cleared');
    let taskList = document.getElementById('lista-tarefas');
    for(let i = 0; i < clearedTasks.length; i ++) {
      taskList.removeChild(clearedTasks[i]);
    }
  }
}
