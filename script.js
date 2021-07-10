// Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128).

// document.getElementsByClassName('task')[0].style.backgroundColor = 'red';
const buttonCreateTask = document.getElementById('criar-tarefa');
const listOfTasks = document.getElementById('lista-tarefas');

function colorTasks() {
  const task = document.querySelectorAll('li');
  for (let index = 0; index < task.length; index += 1) {
    const taskIndex = task[index];
    taskIndex.addEventListener('click', (event) => {
      const setNewColor = 'rgb(128,128,128)';
      // eslint-disable-next-line no-param-reassign
      event.target.style.backgroundColor = setNewColor;
    });
  }
}

// Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.
// Ajuda do Leonardo (Eli) dos Santos;
listOfTasks.addEventListener('click', (event) => {
  const color = 'rgb(128, 128, 128)';
  const listChildren = listOfTasks.children;
  for (let index = 0; index < listChildren.length; index += 1) {
    const childrenIndex = listChildren[index];
    if (childrenIndex.style.backgroundColor === color) {
      childrenIndex.style.backgroundColor = 'white';
    }
    // eslint-disable-next-line no-param-reassign
    event.target.style.backgroundColor = color;
  }
});

// Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.
// Consegui resolver, apos ajuda do 
function createClass(event) {
  const classCompleted = 'completed';
  if (event.target.classList.contains(classCompleted)) {
    event.target.classList.remove(classCompleted);
  } else {
    event.target.classList.add(classCompleted);
  }
}
listOfTasks.addEventListener('dblclick', createClass);

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
  colorTasks();
});
