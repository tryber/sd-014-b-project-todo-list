function highlightItem(element) {
  const item = element.target;
  document.querySelectorAll('li').forEach((element) => {
    const li = element;
    li.style.backgroundColor = 'rgb(255, 255, 255)';
  });
  item.style.backgroundColor = 'rgb(128, 128, 128)';
}

function addToList() {
  const inputBox = document.getElementById('texto-tarefa');
  const text = inputBox.value;
  const list = document.getElementById('lista-tarefas');
  const item = document.createElement('li');
  item.addEventListener('click', highlightItem);
  item.innerHTML = text;
  list.appendChild(item);
  inputBox.value = '';
}

function Main() {
  const addButton = document.getElementById('criar-tarefa');
  addButton.addEventListener('click', addToList);
}

window.onload = Main;
