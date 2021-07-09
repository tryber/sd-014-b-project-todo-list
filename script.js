// Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.

const buttonCreateTask = document.getElementById('criar-tarefa');
const listOfTasks = document.getElementById('lista-tarefas');

buttonCreateTask.addEventListener('click', () => {
  const input = document.getElementById('texto-tarefa')
  const addTask = document.createElement('li');
  listOfTasks.appendChild(addTask);
  addTask.innerHTML = input.value;
  input.value = '';
});
