function addToList() {
  const inputBox = document.getElementById('texto-tarefa');
  const text = inputBox.value;
  const list = document.getElementById("lista-tarefas");
  const item = document.createElement("li");
  item.innerHTML = text;
  list.appendChild(item);
  inputBox.value = "";
}

function Main() {
  const addButton = document.getElementById('criar-tarefa');
  addButton.addEventListener('click', addToList);
}

window.onload = Main;
