const ol = document.getElementById('lista-tarefas')

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

function deleteListItems() {
 const deleteButton = document.getElementById('apaga-tudo');
 const ol = document.getElementById('lista-tarefas');
 deleteButton.addEventListener('click', function () {
  let listItems = document.querySelectorAll('.listItem');
  for (let index = 0; index < listItems.length; index += 1) {
   ol.removeChild(listItems[index])
  }
 })
}
deleteListItems()

function removeCompleted() {
 const removeCompletedButton = document.getElementById('remover-finalizados');
 const ol = document.getElementById('lista-tarefas');
 removeCompletedButton.addEventListener('click', function () {
  let completedItems = document.querySelectorAll('.completed');
  for (let index = 0; index < completedItems.length; index += 1) {
   ol.removeChild(completedItems[index])
  }
 })
}
removeCompleted()

function saveLocalStorage() {
 const saveButton = document.getElementById('salvar-tarefas');
 saveButton.addEventListener('click', function () {
  const ol = document.getElementById('lista-tarefas');
  let contentsListItem = ol.innerHTML;
  localStorage.setItem('lista', JSON.stringify(contentsListItem))
 })
}
saveLocalStorage()

function recoverSave() {
 if (window.localStorage.getItem('lista')) {
  const save = JSON.parse(window.localStorage.getItem('lista'));
  ol.innerHTML = save;
  const listItems = document.querySelectorAll('.listItem');
  for (let index = 0; index < listItems.length; index += 1){
   listItems[index].addEventListener('click', changeColorToGray);
   listItems[index].addEventListener('dblclick', completedListItem);
  }
 }
}
recoverSave()



