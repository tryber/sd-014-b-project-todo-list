const q = document.querySelector.bind(document);
//.completed

const color = (li) => {
  li.addEventListener('click', (event) => {
    if (q('.color')) q('.color').classList.remove('color');
    event.target.classList.add('color');
  });
};

const completed = (li) =>
  li.addEventListener('dblclick', (e) => {
    e.target.classList.add('completed');
  });

const clear = () => (q('#lista-tarefas').innerHTML = '');
const btn = () => q('#apaga-tudo').addEventListener('click', clear);

const e = () => {
  const newt = document.createElement('li');
  color(newt);
  completed(newt);
  newt.innerText = q('#texto-tarefa').value;
  q('#lista-tarefas').appendChild(newt);
  q('#texto-tarefa').value = null;
};

q('#criar-tarefa').addEventListener('click', e);

btn();
completed();
