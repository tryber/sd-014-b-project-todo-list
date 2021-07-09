const q = document.querySelector.bind(document);

const bg = (li) => {
  li.addEventListener('click', (event) => {
    if (q('.color')) q('.color').classList.remove('color');
    event.target.classList.add('color');
  });
};

const todo = () => {
  const newItem = document.createElement('li');
  bg(newItem);
  newItem.innerText = q('#texto-tarefa').value;
  q('#lista-tarefas').appendChild(newItem);
};

q('#criar-tarefa').addEventListener('click', todo);
