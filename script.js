// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);

const turnGrey = (x) =>
  x.addEventListener('click', (event) => {
    if (query('.selected')) query('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
const lineTrough = (y) => {
  y.addEventListener('dblclick', (e) => {
    e.target.classList.contains('completed')
      ? e.target.classList.remove('completed')
      : e.target.classList.add('completed');
  });
};

const insertLi = () => {
  const taskList = query('#lista-tarefas');
  const newLi = document.createElement('li');
  const tagTextoTarefa = query('#texto-tarefa');
  taskList.appendChild(newLi);
  turnGrey(newLi);
  lineTrough(newLi);
  newLi.innerText = tagTextoTarefa.value;
  tagTextoTarefa.value = '';
};

query('#criar-tarefa').addEventListener('click', insertLi);

const deleted = query('#apaga-tudo');
deleted.addEventListener('click', () => {
  const tasks = queryAll('li');
  tasks.forEach((e) => {
    e.remove();
  });
});

const deleteTagCompleted = query('#remover-finalizados');
deleteTagCompleted.addEventListener('click', () => {
  const taskTagCompleted = queryAll('.completed');
  taskTagCompleted.forEach((e) => {
    e.remove();
  });
});

// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/parentNode
// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/contains

const up = query('#mover-cima');
up.addEventListener('click', () => {
  const a = queryAll('.selected').length;
  if (!queryAll('li')[0].classList.contains('selected') && a === 1) {
    const li = query('.selected');
    li.parentNode.insertBefore(li, li.previousElementSibling);
  }
});
const down = query('#mover-baixo');
down.addEventListener('click', () => {
  const a = queryAll('.selected').length;
  const tagLi = queryAll('li');
  const tagLiLength = tagLi.length - 1;
  if (!tagLi[tagLiLength].classList.contains('selected') && a === 1) {
    const li = query('.selected');
    li.parentNode.insertBefore(li.nextElementSibling, li);
  }
});

const removeSelected = query('#remover-selecionado');
removeSelected.addEventListener('click', () => {
  const task = queryAll('li');
  task.forEach((e) => {
    if (e.classList.contains('selected')) {
      e.remove();
    }
  });
});
