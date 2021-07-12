// Esse script foi desenvolvido colaborativamente com Sam e Sergera!

const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);
const myStorage = window.localStorage;
const tasksList = query('#lista-tarefas');

const addSelectListener = (x) =>
  x.addEventListener('click', (e) => {
    if (query('.selected')) query('.selected').classList.remove('selected');
    e.target.classList.add('selected');
  });

const addCompletedListener = (y) => {
  y.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) {
      e.target.classList.remove('completed');
    } else e.target.classList.add('completed');
  });
};

function saveTasks() {
  const button = query('#salvar-tarefas');
  button.addEventListener('click', () => {
    myStorage.clear();
    localStorage.list = tasksList.innerHTML;
    alert('Lista salva');
  });
}
saveTasks();

function recoverTasks() {
  const oldList = localStorage.getItem('list');
  if (!oldList) return;
  tasksList.innerHTML = oldList;
  addSelectListener(tasksList);
  addCompletedListener(tasksList);
}
recoverTasks();

function removeSelectedTask() {
  if (query('.selected')) query('.selected').remove('selected');
}
query('#remover-selecionado').addEventListener('click', removeSelectedTask);

const createItem = () => {
  const item = document.createElement('li');
  item.innerText = query('#texto-tarefa').value;
  tasksList.appendChild(item);
  query('#texto-tarefa').value = null;
  addSelectListener(item);
  addCompletedListener(item);
};
query('#criar-tarefa').addEventListener('click', createItem);

const clear = () =>
  queryAll('#lista-tarefas').forEach((element) => element.remove());
query('#apaga-tudo').addEventListener('click', clear);

const clearCompleted = () => {
  queryAll('.completed').forEach((element) => element.remove());
};
query('#remover-finalizados').addEventListener('click', clearCompleted);

function moveUp() {
  query('#mover-cima').addEventListener('click', () => {
    if (!query('.selected')) return;
    if (query('.selected').previousElementSibling) {
      query('.selected').parentNode.insertBefore(
        query('.selected'),
        query('.selected').previousElementSibling,
      );
    }
  });
}
moveUp();

function moveDown() {
  const button = query('#mover-baixo');
  button.addEventListener('click', () => {
    if (!query('.selected')) return;
    if (query('.selected').nextElementSibling) {
      query('.selected').parentNode.insertBefore(
        query('.selected').nextElementSibling,
        query('.selected'),
      );
    }
  });
}
moveDown();
