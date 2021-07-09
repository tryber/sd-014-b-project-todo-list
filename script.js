const taskList = document.getElementById('lista-tarefas')
const inputTask = document.getElementById('texto-tarefa')
const btnCreateTask = document.getElementById('criar-tarefa')
let listItens = taskList.childNodes

btnCreateTask.addEventListener('click', addTask)
function addTask(){
  let listItem = document.createElement('li')
  if(inputTask.value !== ''){
    listItem.innerText = inputTask.value
    taskList.appendChild(listItem)
    inputTask.value = null
    updateListItensReference()
  }
}



function updateListItensReference(){
  listItens = taskList.childNodes
  for (item of listItens) {
    item.addEventListener('click', function(event){
      if (event.target.style.backgroundColor === 'rgb(128, 128, 128)'){
        item.style.backgroundColor = 'white'
      } else {
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'
      }
    })
  }
}