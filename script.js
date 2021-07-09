const q = document.querySelector.bind(document);

const todo = () => {
  const nw = document.createElement('li');
  nw.innerText = q('#texto-tarefa').value;
  q('#lista-tarefas').appendChild(nw);
  q('#texto-tarefa').value = null;
};

q('#criar-tarefa').addEventListener('click', todo);
