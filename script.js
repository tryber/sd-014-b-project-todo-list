////https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);

const turnGrey = (x) =>
  x.addEventListener('click', (event) => {
    if (query('.selected')) query('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });

//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
const lineTrough = (y) => {
  y.addEventListener('dblclick', (e) => {
    e.target.classList.contains('completed')
      ? e.target.classList.remove('completed')
      : e.target.classList.add('completed');
  });
};

const insertLi = () => {
  let taskList = query('#lista-tarefas');
  let newLi = document.createElement('li');
  let tagTextoTarefa = query('#texto-tarefa');
  taskList.appendChild(newLi);
  turnGrey(newLi);
  lineTrough(newLi);
  newLi.innerText = tagTextoTarefa.value;
  tagTextoTarefa.value = '';
};

query('#criar-tarefa').addEventListener('click', insertLi);

const del = query('#apaga-tudo');
del.addEventListener('click', () => {
  const tasks = queryAll('li');
  tasks.forEach((element) => {
    element.remove();
  });
});