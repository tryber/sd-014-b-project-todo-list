function highlightItem(element) {
  const item = element;
  item.addEventListener('click', () => 
  {
    if (item.style.backgroundColor === 'rgb(255, 255, 255)')
      item.style.backgroundColor = 'rgb(128, 128, 128)';
    else
      item.style.backgroundColor = 'rgb(255, 255, 255)';
  });
}

function addToList() {
  const inputBox = document.getElementById('texto-tarefa');
  const text = inputBox.value;
  const list = document.getElementById('lista-tarefas');
  const item = document.createElement('li');
  highlightItem(item);
  item.innerHTML = text;
  list.appendChild(item);
  inputBox.value = "";
}

function Main() {
  const addButton = document.getElementById('criar-tarefa');
  addButton.addEventListener('click', addToList);
}

window.onload = Main;
