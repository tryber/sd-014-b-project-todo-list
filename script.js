// Ajuda do Sam na reducao de linhas https://github.com/samsantosb
const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);

const selecTask = (x) =>
  x.addEventListener('click', (e) => {
    if (query('.color')) query('.color').classList.remove('color');
    e.target.classList.add('color');
  });

const mark = (element) => {
  let li = queryAll('li');
  element.addEventListener('dblclick', function risca(e) {
    e.target.classList.toggle('completed');
  });
};

const addTask = () => {
  let input = query('#texto-tarefa');
  let list = query('#lista-tarefas');
  let li = document.createElement('li');
  list.appendChild(li);
  selecTask(li);
  mark(li);
  li.innerText = input.value;
  input.value = '';
};

query('#criar-tarefa').addEventListener('click', addTask);
