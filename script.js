window.onload = function () {
  const clickButton = document.querySelector('#criar-tarefa')
  clickButton.addEventListener('click', createNewTask);

  function createNewTask() {
    const inputTask = document.querySelector('#texto-tarefa');
    const taskList = document.querySelector('#lista-tarefas');
    const createTask = document.createElement('li');
    createTask.innerText = inputTask.value;
    createTask.addEventListener('click', listBackgroundColor);
    createTask.addEventListener('dblclick', doubleClickCompleteTask);
    taskList.appendChild(createTask);
    inputTask.value = '';
  }

  function listBackgroundColor(Event) {
    const selectedList = document.querySelectorAll('li');
    const color = 'rgb(128, 128, 128)';
    for (let index = 0; index < selectedList.length; index += 1) {
      if (selectedList[index].style.backgroundColor === color) {
        selectedList[index].style.backgroundColor = '';
      } else {
        Event.target.style.backgroundColor = color;
      }
    }
  }
  function doubleClickCompleteTask(event) {
    if (event.target.className === 'completed') {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  }
  const buttonToRemoveList = document.querySelector('#apaga-tudo');
  function removeAllList() {
    const clearAllList = document.querySelector('#lista-tarefas');
    clearAllList.innerHTML = '';
  }
  buttonToRemoveList.addEventListener('click', removeAllList);

  const removeComplete = document.querySelector('#remover-finalizados');
  function removeCompleteTasks (){
    const completeTasks = document.querySelectorAll('.completed');
    for (let index = 0; index < completeTasks.length; index += 1){
      completeTasks[index].remove();
    }
  }
  removeComplete.addEventListener('click', removeCompleteTasks);

}
