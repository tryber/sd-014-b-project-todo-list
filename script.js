const q = document.querySelector.bind(document);

const color = (li) => {
  li.addEventListener('click', (event) => {
    if (q('.color')) q('.color').classList.remove('color');
    event.target.classList.add('color');
  });
};
const clear = () => (q('#lista-tarefas').innerHTML = '');
const btn = () => q('#apaga-tudo').addEventListener('click', clear);
const element = () => {
  newt = document.createElement('li');
  color(newt);
  newt.innerText = q('#texto-tarefa').value;
  q('#lista-tarefas').appendChild(newt);
  q('#texto-tarefa').value = null;
};
q('#criar-tarefa').addEventListener('click', element);
btn();
