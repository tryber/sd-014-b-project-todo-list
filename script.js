//ajuda do meu amigo glauco para desenvolver o Script e Css.
const query = document.querySelector.bind(document);

const color = (x) => x.addEventListener('click', (e) => {
  if (query('.color')) query('.color').classList.remove('color');
  e.target.classList.add('color');
});
const task = (y) => {
  y.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) e.target.classList.remove('completed');
    else e.target.classList.add('completed');
  });
}
const todo = () => {
  const newItem = document.createElement('li');
  color(newItem), task(newItem);
  newItem.innerText = query('#texto-tarefa').value;
  query('#lista-tarefas').appendChild(newItem);
  query('#texto-tarefa').value = null;
};
query('#criar-tarefa').addEventListener('click', todo);
const clear = () => (query('#lista-tarefas').innerHTML = '');
query('#apaga-tudo').addEventListener('click', clear);
const cleark = () => (query('.completed').remove());
query('#remover-finalizados').addEventListener('click', cleark);






