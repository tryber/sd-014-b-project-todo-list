const button = document.querySelector('#criar-tarefa');

button.addEventListener('click', function(){
  const list = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  list.appendChild(li);
  li.innerText = input.value;
  input.value = ""
  li.addEventListener('click', changeClass)
})

function changeClass(event) {
  const arrayLi = document.getElementsByTagName('li');
  for (let index = 0; index < arrayLi.length; index += 1){
    arrayLi[index].classList.remove('selectedTask');
    event.target.classList.add('selectedTask')
  }
}

