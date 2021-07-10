// OK - 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag

// OK - 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"

// OK - 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista

// 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"

// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

function newTask() {
  const taskList = document.querySelector('#lista-tarefas'); // Atribuir elemento de id lista-tarefas à variável taskList
  const task = document.createElement('li'); // Criar elemento de item listado (li) no document
  taskList.appendChild(task); //  Adiciona elemento task (tarefa do input) como elemento filho do elemento pai taskList

  const inputTask = document.getElementById('texto-tarefa').value; // Atribuir valor do input à variável inputTask
  task.innerText = inputTask; // Atribuir valor inserido no input, ao elemento 'task', tipo "li". que será listado na lista ordenada

  document.getElementById('texto-tarefa').value = ''; // Limpar texto do input
}

// 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
function checkTask(event) {
  event.target.classList.toggle('checked');
  console.log(event.target);
}
const dbClickTask = document.querySelector('ol');
dbClickTask.addEventListener('dblclick', checkTask);

// 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

function removeAll() {
  let remove;
}