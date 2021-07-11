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

function addTask(parameter) {
  let listItem = document.createElement('li');
  if (inputTask.value !== '') {
    listItem.innerText = inputTask.value;
    taskList.appendChild(listItem);
    inputTask.value = null;
    addListItemListeners(listItem);
  }
}

inputTask.addEventListener('keypress', function(event) {
  if(event.key === 'Enter' ){
    addTask()
  }
})
function addListItemListeners(listItem) {
  listItem.addEventListener('click', function (event) {
    if (event.target.classList.contains('selected')) {
      event.target.style.backgroundColor = '';
      event.target.classList.remove('selected');
    } else {
      for (let item of taskList.children) {
        if (item.classList.contains('selected')) {
          item.style.backgroundColor = '';
          item.classList.remove('selected');
        }
      }
      event.target.style.backgroundColor = 'rgb(30, 11, 43);';
      event.target.classList.add('selected');
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
    let div = document.createElement('div');
    let pElement = document.createElement('p');
    pElement.innerText = 'Você tem certeza que quer apagar todas as tarefas?';
    div.appendChild(pElement);
    let yesButton = document.createElement('button');
    yesButton.innerText = 'sim';
    yesButton.style.backgroundColor = '#3caa41';
    yesButton.style.display = 'inline';
    let noButton = document.createElement('button');
    noButton.innerText = 'não';
    noButton.style.backgroundColor = '#ee4444';
    noButton.style.display = 'inline';
    div.appendChild(yesButton);
    div.appendChild(noButton);
    main.appendChild(div);
    yesButton.addEventListener('click', function (e) {
      main.removeChild(div);
      while (taskList.firstChild) {
        taskList.removeChild(taskList.lastChild);
      }
      localStorage.clear();
    });

    noButton.addEventListener('click', function (e) {
      main.removeChild(div);
    });
    setTimeout(function () {
      main.removeChild(div);
    }, 10000);
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
  let selectedItem = document.getElementsByClassName('selected')[0];
  let listNode;
  if (selectedItem) {
    listNode = selectedItem.parentNode;
    if (selectedItem.previousElementSibling) {
      //referencia: https://stackoverflow.com/questions/46724542/javascript-move-elements-up-and-down-in-the-list
      listNode.insertBefore(selectedItem, selectedItem.previousSibling);
      // a linha acima insere selectedItem antes do elemento passado como referencia, no caso selectedItem.previousSibling que é o elemento logo acima, o if verifica se há um elemento acima
    }
  }
});

btnMoveDown.addEventListener('click', function () {
  let selectedItem = document.getElementsByClassName('selected')[0];
  let listNode;
  if (selectedItem) {
    listNode = selectedItem.parentNode;
    if (selectedItem.nextElementSibling) {
      //referencia: https://stackoverflow.com/questions/46724542/javascript-move-elements-up-and-down-in-the-list
      listNode.insertBefore(selectedItem.nextElementSibling, selectedItem);
      //dessa vez foi preciso inverter. a linha acima insere selectedItem.nextElementSibling(elemento abaixo) depois do elemento passado como referencia, no caso selectedItem que é o elemento selecionado, o if verifica se há um elemento abaixo
    }
  }
});

btnRemoveSelected.addEventListener('click', function () {
  let selectedItem = document.getElementsByClassName('selected')[0];
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
        console.log(listItem);
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
