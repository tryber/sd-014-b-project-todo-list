// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão,
// um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

function newTask() {
  const taskList = document.querySelector('.lista-tarefas');
  const inputTask = document.getElementById('texto-tarefa').value;
  const task = document.createElement('li'); // Criar elemento de item listado (li) no document
  task.innerText = inputTask; // Atribui valor inserido no input, ao elemento'task', tipo "li". que será listado na lista ordenada
  taskList.appendChild(task); //  Adiciona elemento task (tarefa do input) como elemento filho do elemento pai taskList
  document.getElementById('texto-tarefa').value = '';
}
