const inputText = document.querySelector('#texto-tarefa');
const listaOrde = document.querySelector('#lista-tarefas');
const button = document.querySelector('#criar-tarefa');
const buttonErase = document.querySelector('#apaga-tudo');

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

listaOrde.addEventListener('dblclick', function(event) {
  let list = document.querySelectorAll('li');
  event.target.classList.toggle('completed');
})

buttonErase.addEventListener('click', function() {
  let list = document.querySelectorAll('li');
  for (let index = 0; index < list.length; index += 1) {
    list[index].remove('li');
  }
})