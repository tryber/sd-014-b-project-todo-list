const tasks = document.getElementById('texto-tarefa');
const button = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');

button.addEventListener('click', function () {
  const newTasks = document.createElement('li');

  newTasks.innerHTML = tasks.value;
  toDoList.appendChild(newTasks);
  
  tasks.value = '';

  const buttonClear = document.getElementById('apaga-tudo');

  buttonClear.addEventListener('click', function () {
    toDoList.innerHTML = '';
  });
});

toDoList.addEventListener('click', (event) => {
  const listTasks = document.querySelectorAll('li');

  for (let index = 0; index < listTasks.length; index += 1) {
    listTasks[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
});

toDoList.addEventListener('dblclick', (event) => {
  event.target.classList.toggle('completed');

  const buttonRmv = document.getElementById('remover-finalizados');

  buttonRmv.addEventListener('click', function () {
    const tasksFinished = document.querySelectorAll('.completed');

    for (let index = 0; index < tasksFinished.length; index += 1) {
      tasksFinished[index].remove();
    }
  });
});
