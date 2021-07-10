// Req 5 adicionando funcionalidade ao botão Criar Tarefa:

const taskList = document.querySelector('#lista-tarefas'); // OL de tarefas
const taskBox = document.querySelector('#texto-tarefa'); // Caixa de texto
const buttonTask = document.querySelector('#criar-tarefa'); // Botão de adicionar tarefa

buttonTask.addEventListener('click', incluiTarefa);

function incluiTarefa() {
  const li = document.createElement('li');
  li.innerHTML = taskBox.value;
  taskList.appendChild(li);
  li.classList.add('task');
  taskBox.value = '';
}

// Req 7 e 8: pintando a Task de cinza
taskList.addEventListener('click', highlight);

function highlight(elemento) {
  let allTasks = document.getElementsByClassName('task');
  for (let index = 0; index < allTasks.length; index += 1) {
    allTasks[index].classList.remove('selected');
  }  
  elemento.target.classList.add('selected');
}

// Req 9: riscando uma tarefa concluída
taskList.addEventListener('dblclick', completion);

function completion(elemento) {
  if (elemento.target.classList.contains('completed') === true) {
    elemento.target.classList.remove('completed');  
  } else {
    elemento.target.classList.add('completed');  
  }
}

