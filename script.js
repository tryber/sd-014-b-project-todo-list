const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);
/// Uso do bind conforme:
/// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
/// https://stackoverflow.com/questions/2236747/what-is-the-use-of-the-javascript-bind-method

const taskSelector = (task) =>
  task.addEventListener('click', (event) => {
    if (query('.selected')) query('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });

const marker = (element) => {
  element.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('done');
  });
};

/// Uso de elements, arrow functions conforme:
/// https://www.w3schools.com/jsref/dom_obj_all.asp
/// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
/// https://stackoverflow.com/questions/47591258/how-to-use-this-in-an-arrow-function-for-referencing-the-clicked-element

const addTaskButton = () => {
  const taskItem = document.createElement('li');
  query('#lista-tarefas').appendChild(taskItem).classList.add('item');
  taskSelector(taskItem);
  marker(taskItem);
  taskItem.innerText = query('#texto-tarefa').value;
  query('#texto-tarefa').value = '';
};

query('#criar-tarefa').addEventListener('click', addTaskButton);

query('#apaga-tudo').addEventListener('click', () =>
  queryAll('.item').forEach((element) => element.remove()));

query('#remover-finalizados').addEventListener('click', () => {
  queryAll('.done').forEach((element) => element.remove());
});

query('#remover-selecionado').addEventListener('click', () =>
  queryAll('.selected').forEach((element) => element.remove()));

/// forEach, conforme:
/// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
/// https://blog.betrybe.com/javascript/javascript-foreach/
