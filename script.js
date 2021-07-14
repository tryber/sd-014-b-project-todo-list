const createTodoButton = document.getElementById('criar-tarefa');
const deleteAllButton = document.getElementById('apaga-tudo');
const deleteCompletedButton = document.getElementById('remover-finalizados');
const saveTasksButton = document.getElementById('salvar-tarefas');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');
const deleteSelectedButton = document.getElementById('remover-selecionado');
const todoList = document.getElementById('lista-tarefas');
const inputTodo = document.getElementById('texto-tarefa');

function selectItem(event) {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function completeTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

createTodoButton.addEventListener('click', () => {
  const item = document.createElement('li');
  item.innerText = inputTodo.value;
  item.className = 'item';
  item.addEventListener('click', selectItem);
  item.addEventListener('dblclick', completeTask);
  todoList.appendChild(item);
  inputTodo.value = '';
});

deleteAllButton.addEventListener('click', () => {
  todoList.innerHTML = '';
});

deleteCompletedButton.addEventListener('click', () => {
  for (let index = 0; index < todoList.children.length; index += 1) {
    const element = todoList.children[index];
    if (element.classList.contains('completed')) {
      todoList.removeChild(element);
      index -= 1;
    }
  }
});

saveTasksButton.addEventListener('click', () => {
  const save = [];

  for (let index = 0; index < todoList.children.length; index += 1) {
    const element = todoList.children[index];
    const objectTodo = {
      todo: element.innerText,
      completed: element.classList.contains('completed'),
    };
    save.push(objectTodo);
  }

  localStorage.setItem('save', JSON.stringify(save));
});

moveUpButton.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  const previousSibling = selected ? selected.previousElementSibling : null;
  if (selected !== null && previousSibling !== null) {
    const selectedInnerText = selected.innerText;
    const selectedClassName = selected.className;
    const previousSiblingInnerText = previousSibling.innerText;
    const previousSiblingClassName = previousSibling.className;
    selected.innerText = previousSiblingInnerText;
    selected.className = previousSiblingClassName;
    previousSibling.innerText = selectedInnerText;
    previousSibling.className = selectedClassName;
  }
});

moveDownButton.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  const nextSibling = selected ? selected.nextElementSibling : null;
  if (selected !== null && nextSibling !== null) {
    const selectedInnerText = selected.innerText;
    const selectedClassName = selected.className;
    const nextSiblingInnerText = nextSibling.innerText;
    const nextSiblingClassName = nextSibling.className;
    selected.innerText = nextSiblingInnerText;
    selected.className = nextSiblingClassName;
    nextSibling.innerText = selectedInnerText;
    nextSibling.className = selectedClassName;
  }
});

deleteSelectedButton.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    todoList.removeChild(selected);
  }
});

function loadStorage() {
  const save = JSON.parse(localStorage.getItem('save'));
  if (save !== null) {
    for (let index = 0; index < save.length; index += 1) {
      const item = document.createElement('li');
      item.innerText = save[index].todo;
      item.className = 'item';
      item.addEventListener('click', selectItem);
      item.addEventListener('dblclick', completeTask);
      if (save[index].completed) {
        item.classList.add('completed');
      }
      todoList.appendChild(item);
    }
  }
}

loadStorage();
