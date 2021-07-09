// Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128).

// document.getElementsByClassName('task')[0].style.backgroundColor = 'red';
const buttonCreateTask = document.getElementById('criar-tarefa');
const listOfTasks = document.getElementById('lista-tarefas');

function colorTasks() {
  const task = listOfTasks.children;
  for (let index = 0; index < task.length; index += 1) {
    const taskIndex = task[index];
    taskIndex.addEventListener('click', (event) => {
      const setNewColor = 'rgb(128,128,128)';
      // eslint-disable-next-line no-param-reassign
      event.target.style.backgroundColor = setNewColor;
    });
  }
}
colorTasks();

// Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.

buttonCreateTask.addEventListener('click', () => {
  const input = document.getElementById('texto-tarefa');
  if (input.value !== '') {
    const addTask = document.createElement('li');
    listOfTasks.appendChild(addTask);
    addTask.classList.add('task');
    addTask.innerHTML = input.value;
    input.value = '';
  } else {
    alert('Insira sua Tarefa!');
  }
});

// Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.
// Ajuda do Leonardo (Eli) dos Santos;
listOfTasks.addEventListener('click', (event) => {
  const color = 'rgb(128, 128, 128)';
  const ListChildren = listOfTasks.children;
  for (let index = 0; index < ListChildren.length; index += 1) {
    const ChildrenIndex = ListChildren[index];
    if (ChildrenIndex.style.backgroundColor === color) {
      ChildrenIndex.style.backgroundColor = 'white';
    }
  }
  // eslint-disable-next-line no-param-reassign
  event.target.style.backgroundColor = color;
});
