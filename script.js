const taskList = document.getElementById('lista-tarefas')
const inputTask = document.getElementById('texto-tarefa')
const btnCreateTask = document.getElementById('criar-tarefa')

btnCreateTask.addEventListener('click', addTask)
function addTask(){
  let listItem = document.createElement('li')
  if(inputTask.value !== ''){
    listItem.innerText = inputTask.value
    taskList.appendChild(listItem)
    inputTask.value = null
  }
}