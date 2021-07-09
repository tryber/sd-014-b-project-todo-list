// Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.

const buttonCreateTask = document.getElementById('criar-tarefa');
const listOfTasks = document.getElementById('lista-tarefas');

buttonCreateTask.addEventListener('click', () => {
  const input = document.getElementById('texto-tarefa');
  const addTask = document.createElement('li');
  listOfTasks.appendChild(addTask);
  addTask.classList.add('task');
  addTask.innerHTML = input.value;
  input.value = '';
  colorTasks();
});

// Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128).

// document.getElementsByClassName('task')[0].style.backgroundColor = 'red';

function colorTasks() {
  const task = document.querySelectorAll('li');
  for (let index = 0; index < task.length; index += 1) {
    const taskIndex = task[index];
    taskIndex.addEventListener('click', (event) => {
      const setNewColor = 'rgb(128,128,128)';
      event.target.style.backgroundColor = setNewColor;
    });
  }
}
