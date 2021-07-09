let btn = document.querySelector('#criar-tarefa');
btn.addEventListener('click', addTask);

function addTask() {
  let input = document.querySelector('#texto-tarefa');
  let list = document.querySelector('#lista-tarefas');
  let li = document.createElement('li');
  list.appendChild(li);
  li.innerText = input.value;
  input.value = '';
}
