//ajuda do meu amigo glauco para desenvolver o Script e Css.
const selector = document.querySelector.bind(document);

const color = (li) => li.addEventListener('click', (event) => {
  if (selector('.color')) selector('.color').classList.remove('color');
  event.target.classList.add('color');
});

const completed = (a) => a.addEventListener('dblclick', (e) => e.target.classList.add('completed'));

const clear = () => (selector('#lista-tarefas').innerHTML = '');
const clearAll = () => selector('#apaga-tudo').addEventListener('click', clear);

clearAll();
const todo = () => {
  const newI = document.createElement('li');
  color(newI);
  completed(newI);
  newI.innerText = selector('#texto-tarefa').value;
  selector('#lista-tarefas').appendChild(newI);
  selector('#texto-tarefa').value = null;
};

selector('#criar-tarefa').addEventListener('click', todo);

