// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão,
// um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

function newTask() {
  const taskList = document.querySelector('#lista-tarefas'); // Atribuir elemento de id lista-tarefas à variável taskList
  const task = document.createElement('li'); // Criar elemento de item listado (li) no document
  taskList.appendChild(task); //  Adiciona elemento task (tarefa do input) como elemento filho do elemento pai taskList

  const inputTask = document.getElementById('texto-tarefa').value; // Atribuir valor do input à variável inputTask
  task.innerText = inputTask; // Atribuir valor inserido no input, ao elemento 'task', tipo "li". que será listado na lista ordenada

  document.getElementById('texto-tarefa').value = ''; // Limpar texto do input
}

// 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

function removeAll() {};