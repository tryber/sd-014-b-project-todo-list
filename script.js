// Requisito 5 e 6: Criar função para adicionar tarefa com o botão Adicionar
function addTask(event){
  let button = document.querySelector('#criar-tarefa');
  let taskList = document.querySelector('#lista-tarefas');
  let inputText = document.querySelector('#texto-tarefa');

  button.addEventListener('click', function () {
    let taskLi = document.createElement('li');
    if (inputText.value.length > 0){
      taskList.appendChild(taskLi).innerText = inputText.value;
      inputText.value = '';
    } else {
      alert('Digite a tarefa a ser memorizada')
    }
  })

  inputText.addEventListener('keyup', function(event) {
    let taskLi = document.createElement('li');
    if (event.keyCode === 13 && inputText.value.length > 0){
      taskList.appendChild(taskLi).innerText = inputText.value;
      inputText.value = '';
    } else if (event.keyCode === 13 && inputText.value.length <= 0){
      alert('Digite a tarefa a ser memorizada')
    }
  })
}

addTask();

// Requisito 7 e 8- Alterar background da tarefa selecionada (apenas 1 por vez)

  // 1 - Apagar a classe selected se houver em alguma li
  // 2 - Adicionar a classe selected na tarefa clicada

function addTaskColor (){
  let taskList = document.querySelector('#lista-tarefas');

  taskList.addEventListener('click', function(event){
    let previousSelected = document.querySelector('.selected')
    let selectedTask = event.target

    if (previousSelected === null){
      selectedTask.classList.add('selected');
    } else {
        previousSelected.classList.remove('selected');
        selectedTask.classList.add('selected');
      }
  })

}

addTaskColor();

// Requisito 9: Double-click faz com que a tarefa seja riscada e adiciona a classe completed

function addTaskCompleted () {
  let taskList = document.querySelector('#lista-tarefas');

  taskList.addEventListener('dblclick', function(event) {
    if (event.target.classList.contains('completed') === false){
      event.target.classList.add('completed');
    } else {
      event.target.classList.remove('completed')
    }
  })

}

addTaskCompleted ();