window.onload = function() {
  let addTask = document.getElementById('criar-tarefa');
  addTask.addEventListener('click', addTarefa);

  function addTarefa() {
    let input = document.getElementById('texto-tarefa');
    let newTask = document.createElement('li');
    let position = document.getElementById('lista-tarefas');

    newTask.className = 'tarefa';
    newTask.innerText = input.value;
    newTask.addEventListener('click', highlight);
    position.appendChild(newTask);
  }

  function highlight(selection) {
    let selectionedTask = document.querySelectorAll('.selected');
    if (selectionedTask.length !== 0) { 
    selectionedTask[0].classList.remove('selected');
    }
    selection.target.classList.add('selected');
  }
}