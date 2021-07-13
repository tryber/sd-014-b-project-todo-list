const list = document.querySelector('#lista-tarefas');

function createTask() {
  const input = document.querySelector('#texto-tarefa').value;
  const taskList = document.querySelector('#lista-tarefas');
  const task = document.createElement('li');
  task.innerHTML = input;
  task.style.backgroundColor = '';
  if (input !== '') {
    taskList.appendChild(task);
  }
  document.querySelector('#texto-tarefa').value = '';
}

const selectedColor = 'rgb(128, 128, 128)';

function changeColor(event) {
  const evento = event;
  const listItem = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index].style.backgroundColor === selectedColor) {
      listItem[index].style.backgroundColor = '';
    }
    evento.target.style.backgroundColor = selectedColor;
  }
}

list.addEventListener('click', changeColor);

function finishTask(event) {
  const evento = event;
  evento.target.classList.toggle('completed');
}

list.addEventListener('dblclick', finishTask);
list.addEventListener('mousedown', (e) => { e.preventDefault(); }, false);

function clearTasks() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

const completedTasks = list.childNodes;

function removeCompletedTasks() {
  const finalIndex = completedTasks.length;
  for (let index = finalIndex - 1; index >= 0; index -= 1) {
    if (completedTasks[index].classList.contains('completed')) {
      list.removeChild(completedTasks[index]);
    }
  }
}

const removeCompleted = document.getElementById('remover-finalizados');
removeCompleted.addEventListener('click', removeCompletedTasks);

function saveTasks() {
  const oldList = document.querySelectorAll('#lista-tarefas li');
  const key = 'name';
  let index = 0;
  while (index < oldList.length) {
    JSON.stringify(localStorage.setItem(key + index, oldList[index].outerHTML));
    index += 1;
  }
}

// function removeCompletedStorage() {
//   let string;
//   const finalIndex = localStorage.length;
//   for (let i = 0; i <= finalIndex; i += 1) {
//     string = localStorage.getItem(`name${i}`);
//     if (string.includes('completed')) {
//       localStorage.removeItem(`name${i}`);
//     } else {
//       i += 1;
//     }
//   }
// }

function initialRenderization() {
  const newList = document.querySelector('ol');
  const itens = [];
  for (let index = 0; index < localStorage.length; index += 1) {
    if (localStorage.getItem(`name${index}`) !== null && localStorage.length !== 0) {
      itens.push(localStorage.getItem(`name${index}`));
      newList.innerHTML += itens[index];
    } else {
      itens.push(localStorage.getItem(`name${(index + 1)}`));
      newList.innerHTML += itens[index];
    }
  }
}

clearTasks();
createTask();

const saveButton = document.getElementById('salvar-tarefas');
saveButton.addEventListener('click', saveTasks);
window.onload = initialRenderization;

function changeUpPosition() {
  const taskItens = document.querySelectorAll('ol li');
  let firstPosition;
  let secondPosition;
  for (let index = 0; index < taskItens.length; index += 1) {
    if (taskItens[index].style.backgroundColor === selectedColor && index !== 0) {
      firstPosition = taskItens[index - 1].textContent;
      secondPosition = taskItens[index].textContent;
      // if (taskItens[index].previousSibling.classList.contains('completed')) {
      //   taskItens[index].classList.add('completed');
      //   taskItens[index - 1].classList.remove('completed');
      // }
      taskItens[index].innerText = firstPosition;
      taskItens[index - 1].innerText = secondPosition;
      taskItens[index].style.backgroundColor = '';
      taskItens[index - 1].style.backgroundColor = selectedColor;
    }
  }
}

const upButton = document.getElementById('mover-cima');
upButton.addEventListener('click', changeUpPosition);

function changeDownPosition() {
  const taskItens = document.querySelectorAll('ol li');
  const length = taskItens.length - 1;
  let firstPosition;
  let secondPosition;
  for (let index = length; index >= 0; index -= 1) {
    if (taskItens[index].style.backgroundColor === selectedColor && index !== length) {
      firstPosition = taskItens[index + 1].textContent;
      secondPosition = taskItens[index].textContent;
      // if (taskItens[index].nextSibling.classList.contains('completed')) {
      //   taskItens[index].classList.add('completed');
      //   taskItens[index + 1].classList.remove('completed');
      // }
      taskItens[index].innerText = firstPosition;
      taskItens[index + 1].innerText = secondPosition;
      taskItens[index].style.backgroundColor = '';
      taskItens[index + 1].style.backgroundColor = selectedColor;
    }
  }
}

const downButton = document.getElementById('mover-baixo');
downButton.addEventListener('click', changeDownPosition);

function removeSelected() {
  const taskItens = document.querySelectorAll('ol li');
  for (let index = 0; index < taskItens.length; index += 1) {
    if (taskItens[index].style.backgroundColor === selectedColor) {
      list.removeChild(taskItens[index]);
    }
  }
}

const removeButton = document.getElementById('remover-selecionado');
removeButton.addEventListener('click', removeSelected);

function clearSaved() {
  localStorage.clear();
}

const eraseButton = document.getElementById('limpar-salvos');
eraseButton.addEventListener('click', clearSaved);
