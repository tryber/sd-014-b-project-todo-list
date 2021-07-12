function highlightItem(element) {
  const item = element.target;
  document.querySelectorAll('li').forEach((e) => {
    const li = e;
    li.style.backgroundColor = 'rgb(255, 255, 255)';
  });
  item.style.backgroundColor = 'rgb(128, 128, 128)';
}

function lineItem(element) {
  if (element.target.classList.contains('completed')) {
    element.target.classList.remove('completed');
  }
  else {
    element.target.classList.add('completed');
  }
}

function addToList() {
  const inputBox = document.getElementById('texto-tarefa');
  const text = inputBox.value;
  const list = document.getElementById('lista-tarefas');
  const item = document.createElement('li');
  item.addEventListener('click', highlightItem);
  item.addEventListener('dblclick', lineItem);
  item.innerHTML = text;
  list.appendChild(item);
  inputBox.value = '';
}

function Main() {
  const addButton = document.getElementById('criar-tarefa');
  addButton.addEventListener('click', addToList);
}

window.onload = Main;
