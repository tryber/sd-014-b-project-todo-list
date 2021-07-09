const selector = document.querySelector.bind(document);

const color = (li) => {
  li.addEventListener('click', (event) => {
    if (selector('.color')) selector('.color').classList.remove('color');
    event.target.classList.add('color');
  });
};

const clear = () => {
  selector('#lista-tarefas').innerHTML = '';
};

const ClearAll = () => selector('#apaga-tudo').addEventListener('click', clear);

const todo = () => {
  const newI = document.createElement('li');
  color(newI);
  newI.innerText = selector('#texto-tarefa').value;
  selector('#lista-tarefas').appendChild(newI);
  selector('#texto-tarefa').value = null;
};

selector('#criar-tarefa').addEventListener('click', todo);
ClearAll();
