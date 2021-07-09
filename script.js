// <input type = 'text' name = 'atividade' id = 'texto-tarefa'>


/* document.querySelector('#criar-tarefa').addEventListener('click', incluiTarefa); */
/* textoTarefa.addEventListener('submit', incluiTarefa); */

// Req 5 adicionando funcionalidade ao botão Criar Tarefa:

const taskList = document.querySelector('#lista-tarefas'); // OL de tarefas
const taskBox = document.querySelector('#texto-tarefa'); // Caixa de texto
const buttonTask = document.querySelector('#criar-tarefa'); // Botão de adicionar tarefa

buttonTask.addEventListener('click', incluiTarefa);

function incluiTarefa() {
  const li = document.createElement('li');
  li.innerHTML = taskBox.value;
  taskList.appendChild(li);
  taskBox.value = '';
}

// Req 7: pintando a Task de cinza
