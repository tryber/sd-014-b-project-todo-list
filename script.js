// Requisito 5: Criar função para adicionar tarefa com o botão Adicionar
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