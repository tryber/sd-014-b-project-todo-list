const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);
const grey = (x) => x.addEventListener('click', (e) => {
  if (query('.color')) query('.color').classList.remove('color');
  e.target.classList.add('color');
});
const mark = (y) => {
  y.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) e.target.classList.remove('completed');
    else e.target.classList.add('completed');
  });
}
const newTask = () => {
  const newItem = document.createElement('li');
  grey(newItem), mark(newItem);
  newItem.innerText = query('#texto-tarefa').value;
  query('#lista-tarefas').appendChild(newItem);
  query('#texto-tarefa').value = null;
}
query('#criar-tarefa').addEventListener('click', newTask);
query('#apaga-tudo').addEventListener('click', () => queryAll('#lista-tarefas').forEach((element) => element.remove()));
query('#remover-finalizados').addEventListener('click', () => {
  queryAll('.completed').forEach((element) => element.remove());
});
//ajuda do meu amigo Glauco, outras refs estão no projeto de pixel art.
