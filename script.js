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
//Referências: https://www.w3schools.com/jsref/prop_text_value.asp

function selectTask(select) {
  const taskSelected = document.querySelector('.selected');
  taskSelected.classList.remove('selected');
  select.target.classList.add('selected');
  console.log(select.target)
}

const taskList = document.querySelector('#lista-tarefas');
taskList.addEventListener('click', selectTask);
