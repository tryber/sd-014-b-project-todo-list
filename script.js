function changeColorToGray(event) {
 event.target.classList.add('selected');
 let selected = document.querySelectorAll('.selected');
 for (let index = 0; index < selected.length; index += 1) {
  if (selected.length > 1) {
   selected[index].classList.remove('selected')
   event.target.classList.add('selected');
  }
 }
}

function completedListItem(event) {
 if (event.target.classList.contains('completed')) {
  event.target.classList.remove('completed')
 } else {
 event.target.classList.add('completed');
}
}

function createListItem() {
 const button = document.getElementById('criar-tarefa');
 let input = document.getElementById('texto-tarefa');
 const ol = document.getElementById('lista-tarefas');
 button.addEventListener('click', function () {
  let li = document.createElement('li');
  li.className = "listItem";
  li.innerHTML = input.value;
  li.addEventListener('click', changeColorToGray)
  li.addEventListener('dblclick', completedListItem)
  ol.appendChild(li);
  input.value = '';
 })
}
createListItem()















