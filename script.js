// Cria o campo de input
const inputContainer = document.querySelector('#input-container');
const inputTask = document.createElement('input');
inputTask.id = 'texto-tarefa';
inputTask.type = 'text';
inputContainer.appendChild(inputTask);

// Cria a lista ordenada
const listContainer = document.querySelector('#list-container');
const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
listContainer.appendChild(taskList);
