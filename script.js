const button = document.querySelector('#criar-tarefa');

button.addEventListener('click', function(){
  const list = document.querySelector('#lista-tarefas');
  const input = document.querySelector('#texto-tarefa');
  const li = document.createElement('li');
  list.appendChild(li);
  li.innerText = input.value;
  input.value = ""
  li.addEventListener('click', changeClass)
  li.addEventListener('dblclick', completedTask)
})

function changeClass(event) {
  const arrayLi = document.getElementsByTagName('li');
  for (let index = 0; index < arrayLi.length; index += 1){
    arrayLi[index].classList.remove('selectedTask');
    event.target.classList.add('selectedTask')
  }
}
//Referência do .includes ref: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/includes"
function completedTask (event) {
  if (event.target.className.includes('completed')){
    event.target.classList.remove('completed')
  } else {
    event.target.classList.add('completed')
  }
}

const delButton = document.querySelector('#apaga-tudo');
delButton.addEventListener('click', function(){
  const list = document.querySelector('#lista-tarefas');
  list.innerHTML = '';
})

const finishedClearButton = document.querySelector('#remover-finalizados');
finishedClearButton.addEventListener('click', function (){
  const listItem = document.querySelectorAll('li');
  const list = document.querySelector('#lista-tarefas');
  for (let index = 0; index < listItem.length; index += 1){
    if (listItem[index].className.includes('completed')){
      list.removeChild(listItem[index])
    }
  }  
})

const saveButton = document.querySelector('#salvar-tarefas');
saveButton.addEventListener('click', function(){
  const list = document.querySelector('#lista-tarefas');
  localStorage.setItem('data',JSON.stringify(list.innerHTML));
  let getItem = localStorage.getItem('data');
  console.log(getItem)
  
})