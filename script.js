const taskList = document.getElementById('lista-tarefas')
const inputTask = document.getElementById('texto-tarefa')
const btnCreateTask = document.getElementById('criar-tarefa')
const btnDeleteAll = document.getElementById('apaga-tudo')
const btnRemoveCompleted = document.getElementById('remover-finalizados')

let listItens = taskList.children
btnCreateTask.addEventListener('click', addTask)
function addTask(){
  let listItem = document.createElement('li')
  if(inputTask.value !== ''){
    listItem.innerText = inputTask.value
    taskList.appendChild(listItem)
    inputTask.value = null

    listItem.addEventListener('click', function(event){
      if (event.target.style.backgroundColor === 'rgb(128, 128, 128)'){
        event.target.style.backgroundColor = 'white'
      } else {
        for (let item of taskList.children){
          if(item.style.backgroundColor = 'rgb(128, 128, 128)'){
            item.style.backgroundColor = 'white'
          }
        }
        event.target.style.backgroundColor = 'rgb(128, 128, 128)'
      }
    })
    listItem.addEventListener('dblclick', function(event){
      let isCompleted = event.target.style.textDecoration.includes("line-through")
      if(isCompleted){
        event.target.classList.remove('completed')
        event.target.style.textDecoration = "none"
        updateListItensReference()
      } else {
        event.target.classList.add('completed')
        event.target.style.textDecoration = "line-through solid rgb(0, 0, 0)";
        updateListItensReference()
      }
    })
    updateListItensReference()
  }
}

function updateListItensReference(){
  listItens = taskList.children
}

btnDeleteAll.addEventListener('click', function(){
  while(taskList.firstChild){
    taskList.removeChild(taskList.lastChild)
  }
})
btnRemoveCompleted.addEventListener('click', function(){
  let completedTasks = document.querySelectorAll('.completed')
  for (let task of completedTasks){
    task.parentNode.removeChild(task)
  }
})