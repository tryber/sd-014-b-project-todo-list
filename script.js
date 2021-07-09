function createListItem() {
 const button = document.getElementById('criar-tarefa');
 let input = document.getElementById('texto-tarefa');
 const ol = document.getElementById('lista-tarefas');
 button.addEventListener('click', function () {
   let li = document.createElement('li');
   li.innerHTML = input.value;
   ol.appendChild(li);
   input.value = '';
 })
}
createListItem()

