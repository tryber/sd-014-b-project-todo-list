//ajuda dos meus amigos glauco e Grasi para desenvolver o Script e Css.
const q = document.querySelector.bind(document);
//função da cor cinza
const color = (x) => x.addEventListener('click', (e) => {
  if (query('.color')) q('.color').classList.remove('color');
  e.target.classList.add('color');
});
//marca e desmarca as tarefas
const task = (y) => {
  y.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('completed')) e.target.classList.remove('completed');
    else e.target.classList.add('completed');
  });
}
//cria as tarefas e atrela elas as duas primeiras funções
q('#criar-tarefa').addEventListener('click', () => {
  const newItem = document.createElement('li');
  color(newItem), task(newItem);
  newItem.innerText = q('#texto-tarefa').value;
  q('#lista-tarefas').appendChild(newItem), q('#texto-tarefa').value = null;
});
//apaga tudo e remove os finalizados
q('#apaga-tudo').addEventListener('click', () => (q('#lista-tarefas').innerHTML = ''));
q('#remover-finalizados').addEventListener('click', () => (q('.completed').remove()));











