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

// Req 10 - pulei o 10 sem querer
const buttonClearAll = document.querySelector('#apaga-tudo');
buttonClearAll.addEventListener('click', clearAll);

function clearAll () {
  let allTasks = document.getElementsByClassName('task');
  const manyTask = allTasks.length;
  for (index = 0; index < manyTask; index += 1) {
    taskList.removeChild(allTasks[0]); 
  }
}

// Req 11 - Botão deletar
const buttonClearCompleted = document.querySelector('#remover-finalizados');
buttonClearCompleted.addEventListener('click', clearCompleted);

function clearCompleted () {
  let killTask = document.getElementsByClassName('completed');
  const aux = killTask.length;
  for (let index = 0; index < aux; index += 1) {
    killTask[0].remove();
  }
}
