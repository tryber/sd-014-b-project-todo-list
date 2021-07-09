//ajuda do meu amigo glauco para desenvolver o Script e Css.
const q = document.querySelector.bind(document);
const color = (l) => l.addEventListener('click', (e) => {
  if (q('.color')) q('.color').classList.remove('color');
  e.target.classList.add('color');
});
const task = (m) => {
  m.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) e.target.classList.remove('completed');
    else e.target.classList.add('completed');
  });
}
const todo = () => {
  const newI = document.createElement('li');
  color(newI), task(newI);
  newI.innerText = q('#texto-tarefa').value;
  q('#lista-tarefas').appendChild(newI);
  q('#texto-tarefa').value = null;
};
q('#criar-tarefa').addEventListener('click', todo);
const clear = () => (q('#lista-tarefas').innerHTML = '');
q('#apaga-tudo').addEventListener('click', clear);
const cleark = () => (q('.completed').remove());
q('#remover-finalizados').addEventListener('click', cleark);






