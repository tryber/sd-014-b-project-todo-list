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
query('#criar-tarefa').addEventListener('click', () => {
  const newItem = document.createElement('li');
  grey(newItem), mark(newItem);
  newItem.innerText = query('#texto-tarefa').value;
  query('#lista-tarefas').appendChild(newItem);
  query('#texto-tarefa').value = null;
});
query('#apaga-tudo').addEventListener('click', () => (query('#lista-tarefas').innerHTML = ''));
query('#remover-finalizados').addEventListener('click', () => {
  for (const markedItem of queryAll('.completed')) markedItem.remove();
});


//ajuda do meu amigo Glauco, outras refs estão no projeto de pixel art.
