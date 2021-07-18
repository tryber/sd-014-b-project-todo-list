const button = document.getElementById('criar-tarefa');
function addItem() {
  const input = document.getElementById('texto-tarefa');
  const list = document.getElementById('lista-tarefas');
  const item = document.createElement('li');
  item.innerText = input.value;
  list.appendChild(item);
  input.value = '';
}
button.addEventListener('click', addItem);
const tasks = document.getElementById('lista-tarefas');

function bgColor(event) {
  event.target.classList.add('selected');
  const item = document.querySelector('.selected');
  if (item !== event.target) {
    item.classList.remove('selected');
  }
}
function done(event) {
  event.target.classList.toggle('completed');
}
tasks.addEventListener('click', bgColor);
tasks.addEventListener('dblclick', done);

const clean = document.getElementById('apaga-tudo');

function cleanAll() {
  const childs = document.querySelectorAll('li');
  for (let index = 0; index < childs.length; index += 1) {
    childs[index].remove();
  }
}
clean.addEventListener('click', cleanAll);
