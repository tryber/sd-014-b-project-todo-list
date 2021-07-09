function changeColorToGray(color) {
 color.target.className = 'concluded';
}

function createListItem() {
 const button = document.getElementById('criar-tarefa');
 let input = document.getElementById('texto-tarefa');
 const ol = document.getElementById('lista-tarefas');
 button.addEventListener('click', function () {
   let li = document.createElement('li');
   li.addEventListener('click', changeColorToGray)
   li.innerHTML = input.value;
   ol.appendChild(li);
   input.value = '';
 })
}
createListItem()




