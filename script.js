const q = document.querySelector.bind(document);
//.completed
const grey = (li) => {
  li.addEventListener('click', (e) => {
    if (q('.grey')) q('.grey').classList.remove('grey');
    e.target.classList.add('grey');
  });
};

const completed = (li) =>
  li.addEventListener('dblclick', (e) => {
    e.target.classList.add('completed');
  });

const clear = () => (q('#lista-tarefas').innerHTML = '');
const bt = () => q('#apaga-tudo').addEventListener('click', clear);

const todo = () => {
  const newI = document.createElement('li');
  grey(newI);
  completed(newI);
  newI.innerText = q('#texto-tarefa').value;
  q('#lista-tarefas').appendChild(newI);
  q('#texto-tarefa').value = null;
};

q('#criar-tarefa').addEventListener('click', todo);

bt(), completed();
