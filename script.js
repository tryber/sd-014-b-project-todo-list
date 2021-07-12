let taskList = document.getElementById('lista-tarefas');
let inputTask = document.getElementById('texto-tarefa');
let main = document.getElementsByTagName('main')[0];
const btnCreateTask = document.getElementById('criar-tarefa');
const btnDeleteAll = document.getElementById('apaga-tudo');
const btnRemoveCompleted = document.getElementById('remover-finalizados');
const btnSaveTasks = document.getElementById('salvar-tarefas');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');
const btnRemoveSelected = document.getElementById('remover-selecionado');
let listItens = taskList.children;

btnCreateTask.addEventListener('click', addTask);

function addTask() {
  let listItem = document.createElement('li');
  if (inputTask.value !== '') {
    listItem.innerText = inputTask.value;
    taskList.appendChild(listItem);
    inputTask.value = null;
    addListItemListeners(listItem);
  }
}

inputTask.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

function addListItemListeners(listItem) {
  listItem.addEventListener('click', function (event) {
    if (event.target.style.backgroundColor === 'rgb(128, 128, 128)') {
      event.target.style.backgroundColor = '';
      event.target.removeAttribute('id');
    } else {
      for (let item of taskList.children) {
        if (item.style.backgroundColor === 'rgb(128, 128, 128)') {
          item.style.backgroundColor = '';
          item.removeAttribute('id');
        }
      }
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
      event.target.id = 'selected';
    }
  });

  listItem.addEventListener('dblclick', function (event) {
    let isCompleted = event.target.classList.contains('completed');
    if (isCompleted) {
      event.target.classList.remove('completed');
      event.target.style.textDecoration = 'none';
    } else {
      event.target.classList.add('completed');
      event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  });
}

btnDeleteAll.addEventListener('click', function () {
  if (listItens.length > 0) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.lastChild);
    }
    localStorage.clear();
  }
});

btnRemoveCompleted.addEventListener('click', function () {
  let completedTasks = document.querySelectorAll('.completed');
  for (let task of completedTasks) {
    task.parentNode.removeChild(task);
  }
});

btnSaveTasks.addEventListener('click', function () {
  let arrayOfTasks = [];
  localStorage.clear();
  if (listItens.length > 0) {
    for (item of listItens) {
      let isCompleted;
      if (item.classList.contains('completed')) {
        isCompleted = true;
      } else {
        isCompleted = false;
      }
      arrayOfTasks.push({ task: item.innerText, completed: isCompleted });
    }
    localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
    let pElement = document.createElement('li');
    pElement.innerText = 'Tarefas salvas com sucesso!';
    pElement.style.color = '#3caa41';
    pElement.style.fontSize = '16px';
    main.appendChild(pElement);
    setTimeout(function () {
      main.removeChild(pElement);
    }, 5000);
  }
});

btnMoveUp.addEventListener('click', function () {
  let selectedItem = document.getElementById('selected');
  if (selectedItem) {
    if (selectedItem.previousElementSibling !== null) {
      selectedItem.parentElement.insertBefore(selectedItem, selectedItem.previousElementSibling);
    } else if(selectedItem.previousElementSibling === null){
      console.log(selectedItem)
    }
  }
});

btnMoveDown.addEventListener('click', function () {
  let selectedItem = document.getElementById('selected');
  if (selectedItem) {
    if (selectedItem.nextElementSibling !== null) {
      selectedItem.parentElement.insertBefore(selectedItem.nextElementSibling, selectedItem);
    } else if(selectedItem.nextElementSibling === null){
      console.log(selectedItem)
    }
  }
});

// function moveItem(selected, seletedSibling) {
//   let siblingText = seletedSibling.innerText;
//   seletedSibling.innerText = selected.innerText;
//   selected.innerText = siblingText;
//   selected.style.backgroundColor = '';
//   selected.removeAttribute('id');
//   seletedSibling.style.backgroundColor = 'rgb(128, 128, 128)';
//   seletedSibling.id = 'selected';
//   handleCompleted(selected, seletedSibling);
// }

// function handleCompleted(selected, seletedSibling) {
//   if (selected.classList.contains('completed') && !seletedSibling.classList.contains('completed')) {
//     selected.classList.remove('completed');
//     selected.style.textDecoration = 'none';
//     seletedSibling.classList.add('completed');
//     seletedSibling.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
//   } else if(selected.classList.contains('completed') && seletedSibling.classList.contains('completed')){
//     selected.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
//     seletedSibling.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
//   } else if (seletedSibling.classList.contains('completed')) {
//     seletedSibling.classList.remove('completed');
//     seletedSibling.style.textDecoration = 'none';
//     selected.classList.add('completed');
//     selected.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
//   } 
// }

btnRemoveSelected.addEventListener('click', function () {
  let selectedItem = document.getElementById('selected');
  if (selectedItem) {
    taskList.removeChild(selectedItem);
  } else {
    let pElement = document.createElement('li');
    pElement.innerText = 'Selecione um item';
    pElement.style.color = '#3697d8';
    pElement.style.fontSize = '16px';
    pElement.style.className = 'alert';
    main.appendChild(pElement);
    setTimeout(function () {
      main.removeChild(pElement);
    }, 5000);
  }
});

function getLocalStorage() {
  let tasksStorage = JSON.parse(localStorage.getItem('tasks'));
  if (tasksStorage !== null) {
    for (let task of tasksStorage) {
      let listItem = document.createElement('li');
      listItem.innerText = task.task;
      taskList.appendChild(listItem);
      if (task.completed == true) {
        taskList.lastChild.classList.add('completed');
        taskList.lastChild.style.textDecoration =
          'line-through solid rgb(0, 0, 0)';
      }
      addListItemListeners(listItem);
    }
  }
}

window.onload = function () {
  getLocalStorage();
};
