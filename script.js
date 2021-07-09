const inputText = document.querySelector('#texto-tarefa');
const listaOrde = document.querySelector('#lista-tarefas');
const button = document.querySelector('#criar-tarefa');

button.addEventListener('click', function() {
  let li = document.createElement('li');
  listaOrde.appendChild(li);
  li.innerText = inputText.value;
  inputText.value = '';
})
color = 'grey';
listaOrde.addEventListener('click', function(event) {
  let list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1 ) {
    list[index].style.background = 'white';
    event.target.style.background = color;
  }
})

