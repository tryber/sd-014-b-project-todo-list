const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);

const turnGrey = (x) =>
  x.addEventListener('click', (event) => {
    if (query('.selected')) query('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });

const insertLi = () => {
  let taskList = query('#lista-tarefas');
  let newLi = document.createElement('li');
  let tagTextoTarefa = query('#texto-tarefa');
  taskList.appendChild(newLi);
  turnGrey(newLi);
  newLi.innerText = tagTextoTarefa.value;
  tagTextoTarefa.value = '';
};

query('#criar-tarefa').addEventListener('click', insertLi);
