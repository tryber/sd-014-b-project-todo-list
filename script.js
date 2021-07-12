// Ajuda do Sam na reducao de linhas https://github.com/samsantosb
const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);

const selecTask = (x) =>
  x.addEventListener('click', (e) => {
    if (query('.color')) query('.color').classList.remove('color');
    e.target.classList.add('color');
  });

const mark = (element) => {
  element.addEventListener('dblclick', function risca(e) {
    e.target.classList.toggle('completed');
  });
};

const addTask = () => {
  let li = document.createElement('li');
  query('#lista-tarefas').appendChild(li);
  selecTask(li);
  mark(li);
  li.innerText = query('#texto-tarefa').value;
  query('#texto-tarefa').value = '';
};
query('#criar-tarefa').addEventListener('click', addTask);

query('#apaga-tudo').addEventListener('click', () =>
  queryAll('#lista-tarefas').forEach((element) => element.remove())
); //Glauco god of refatoration and samuel son

query('#remover-finalizados').addEventListener('click', () => {
  queryAll('.completed').forEach((element) => element.remove());
}); //Samuel god of refatoration 2nd