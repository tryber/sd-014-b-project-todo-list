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

  toDoList.addEventListener('click', (event) => {
    const listTasks = document.querySelectorAll('li');

    for (let index = 0; index < listTasks.length; index += 1) {
      listTasks[index].style.backgroundColor = 'white';
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)';
  });

  const saveButton = document.getElementById('salvar-tarefas');

  saveButton.addEventListener('click', function () {
    localStorage.setItem('listOfTasks', toDoList.innerHTML);

    window.onload = function () {
      toDoList.innerHTML = localStorage.getItem('listOfTasks');
    }
  });
});
