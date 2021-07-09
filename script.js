const selector = document.querySelector.bind(document);

const todo = () => {
  const newItem = document.createElement('li');
  newItem.innerText = selector('#texto-tarefa').value;
  selector('#lista-tarefas').appendChild(newItem);
};
