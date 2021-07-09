const button = document.querySelector('#criar-tarefa');

button.addEventListener('click', () => {
  const answer = document.querySelector('#texto-tarefa');
  const task = document.createElement('li');
  const list = document.querySelector('#lista-tarefas');
  task.innerText = answer.value;
  list.appendChild(task);
  answer.value = '';
});
