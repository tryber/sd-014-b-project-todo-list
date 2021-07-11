// update color
function updateColor(event) {
  const selected = document.querySelectorAll('li');
  selected.forEach((element) => {
    element.classList.remove('selected');
  });
  event.target.classList.add('selected');
}
// toggle line through
function doubleClick(event) {
  event.target.classList.toggle('completed');
}
function initTasks() {
  const li = document.createElement('li');
  const tasks = document.getElementById('lista-tarefas').appendChild(li);
  return tasks;
}
function init() {
  if (JSON.parse(localStorage.getItem('li'))) {
    const text = JSON.parse(localStorage.getItem('li'));
    text.forEach((element) => {
      if (element.style) {
        const tasks = initTasks();
        tasks.innerText = element.text;
        tasks.classList.add('completed');
        tasks.addEventListener('click', updateColor); // update color + function bellow
        tasks.addEventListener('dblclick', doubleClick);// toggle line through + function bellow
      } else {
        const tasks = initTasks();
        tasks.innerText = element.text;
        tasks.addEventListener('click', updateColor);// update color + function bellow
        tasks.addEventListener('dblclick', doubleClick);// toggle line through + function bellow
      }
    });
  }
}
init();
// insert task
const insert = document.getElementById('criar-tarefa');
insert.addEventListener('click', () => {
  const li = document.createElement('li');
  li.innerText = document.getElementById('texto-tarefa').value;
  const task = document.getElementById('lista-tarefas').appendChild(li);
  // update color + function bellow
  task.addEventListener('click', updateColor);
  // toggle line through + function bellow
  task.addEventListener('dblclick', doubleClick);
  document.getElementById('texto-tarefa').value = '';
});

// delete all tasks
const del = document.getElementById('apaga-tudo');
del.addEventListener('click', () => {
  const tasks = document.querySelectorAll('li');
  tasks.forEach((element) => {
    element.remove();
  });
});

// delete complete tasks
const delCompleted = document.getElementById('remover-finalizados');
delCompleted.addEventListener('click', () => {
  const completedTasks = document.querySelectorAll('.completed');
  completedTasks.forEach((element) => {
    element.remove();
  });
});

// save tasks
const saveTasks = document.getElementById('salvar-tarefas');
saveTasks.addEventListener('click', () => {
  const tasks = document.querySelectorAll('li');
  localStorage.clear();
  const li = [];
  tasks.forEach((element) => {
    const text = element.innerText;
    let style = false;
    if (element.classList.contains('completed')) {
      style = true;
      li.push({ text, style });
    } else {
      li.push({ text, style });
    }
  });
  localStorage.setItem('li', JSON.stringify(li));
});

// move up usando for.
// const moveUp = document.getElementById('mover-cima');
// moveUp.addEventListener('click', () => {
//   const tasks = document.querySelectorAll('li');
//   console.log(tasks);
//   if (tasks.length > 1) {
//     for (let count = 1; count < tasks.length; count += 1) {
//       if (tasks[count].classList.contains('selected')) {
//         tasks[count].classList.remove('selected');
//         const above = tasks[count - 1].innerText;
//         tasks[count - 1].innerText = tasks[count].innerText;
//         tasks[count].innerText = above;
//         tasks[count - 1].classList.add('selected');
//       }
//     }
//   }
// });
// move up.função insert before adquirida do site: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
const moveUp = document.getElementById('mover-cima');
moveUp.addEventListener('click', () => {
  const containsSel = document.getElementsByClassName('selected').length;
  if (containsSel === 1 && !document.querySelectorAll('li')[0].classList.contains('selected')) {
    const li = document.querySelector('.selected');
    li.parentNode.insertBefore(li, li.previousElementSibling);
  }
});
// move down
const moveDown = document.getElementById('mover-baixo');
moveDown.addEventListener('click', () => {
  const containsSel = document.getElementsByClassName('selected').length;
  const queryLi = document.querySelectorAll('li');
  const liLength = queryLi.length - 1;
  if (containsSel === 1 && !queryLi[liLength].classList.contains('selected')) {
    const li = document.querySelector('.selected');
    li.parentNode.insertBefore(li.nextElementSibling, li);
  }
});

// move Down usando for.
// const moveDown = document.getElementById('mover-baixo');
// moveDown.addEventListener('click', () => {
//   const tasks = document.querySelectorAll('li');
//   console.log(tasks);
//   if (tasks.length > 1) {
//     for (let count = tasks.length - 2; count >= 0; count -= 1) {
//       if (tasks[count].classList.contains('selected')) {
//         tasks[count].classList.remove('selected');
//         const above = tasks[count + 1].innerText;
//         tasks[count + 1].innerText = tasks[count].innerText;
//         tasks[count].innerText = above;
//         tasks[count + 1].classList.add('selected');
//       }
//     }
//   }
// });
// Del Selected
const delSelected = document.getElementById('remover-selecionado');
delSelected.addEventListener('click', () => {
  const tasks = document.querySelectorAll('li');
  tasks.forEach((element) => {
    if (element.classList.contains('selected')) {
      element.remove();
    }
  });
});
