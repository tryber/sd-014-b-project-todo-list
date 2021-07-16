// 1 - Adicione à sua lista o título "Minha Lista de Tarefas" em uma tag
// 2 - Adicione abaixo do título um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo"
// 3 - Adicione um input com o id="texto-tarefa" onde a pessoa usuária poderá digitar o nome do item que deseja adicionar à lista

// 4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"

// 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

const taskList = document.querySelector('#lista-tarefas'); // Atribuir elemento de id lista-tarefas à variável taskList
// 6 - Ordene os itens da lista de tarefas por ordem de criação
function newTask() {
  const task = document.createElement('li'); // Criar elemento de item listado (li) no document
  taskList.appendChild(task); //  Adiciona elemento task (tarefa do input) como elemento filho do elemento pai taskList

  const inputTask = document.getElementById('texto-tarefa').value; // Atribuir valor do input à variável inputTask
  task.innerText = inputTask; // Atribuir valor inserido no input, ao elemento 'task', tipo "li". que será listado na lista ordenada

  document.getElementById('texto-tarefa').value = ''; // Limpar texto do input
}

const buttonCreateTask = document.querySelector('#criar-tarefa');
buttonCreateTask.addEventListener('click', newTask);

// 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)--> CSS
function selectTask(selectEvent) {
  if (document.querySelector('.selected') != null) {
    document.querySelector('.selected').classList.remove('selected'); // 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo
  }
  selectEvent.target.classList.add('selected');
  console.log(selectEvent.target);
}

const singleClickTask = document.querySelector('ol');
singleClickTask.addEventListener('click', selectTask);

// 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
function checkTask(event) {
  if (event.target.classList.value.includes('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
  console.log(event.target);
}

const dbClickTask = document.querySelector('ol');
dbClickTask.addEventListener('dblclick', checkTask);

// 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

function removeAll() {
  while (taskList.lastElementChild != null) {
    taskList.removeChild(taskList.lastElementChild);
  }
}

const apagarTudo = document.getElementById('apaga-tudo');
apagarTudo.addEventListener('click', removeAll);

// 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista
function removeCompletedTasks() {
  const tasksCompleted = document.querySelectorAll('.completed'); // NodeList: seleção de todos os elementos 'completed'
  tasksCompleted.forEach((li) => { // Arrow function com forEach
    li.parentElement.removeChild(li); // Remover child nodes ---> remover nós da lista de 'completed'
  });
}

const buttonRemoveCompletedTasks = document.getElementById('remover-finalizados');
buttonRemoveCompletedTasks.addEventListener('click', removeCompletedTasks);

// function removeSelected()

// 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava
function saveTasks() {
  localStorage.setItem('taskList', taskList.innerHTML);
}

const saveAllTasks = document.getElementById('salvar-tarefas');
saveAllTasks.addEventListener('click', saveTasks);

function recoverAllTasks() {
  if (localStorage.getItem('taskList') !== '') {
    taskList.innerHTML = localStorage.getItem('taskList');
  }
}

recoverAllTasks();

// Lógica das funções de movimentação das tarefas (up-down) foi baseada no trabalho do colega Dheniarley Cruz
// Referências adicionais:
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_insertbefore
// https://www.w3schools.com/jsref/met_node_insertbefore.asp
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_foreach
// https://www.w3schools.com/jsref/jsref_foreach.asp

// 13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas
function moveUp() {
  const taskSelected = document.querySelector('li.selected'); // Objeto 'taskSelected': seleção do elemento de tarefa selecionado com single click
  const tasksListItems = document.querySelectorAll('li'); // NodeList: seleção de todos os elementos de tarefas, list-items
  tasksListItems.forEach((li, position) => { // Arrow function com list-items e posição de elemento
    if (tasksListItems[position] === taskSelected) { // Condicional para encontrar a posição do selecionado
      const previousTask = tasksListItems[position - 1]; // Selecionar possível elemento anterior ao selecionado
      if (previousTask !== undefined) { // Se houver item anterior ao selecionado, o selecionado não é o primeiro da lista e deve ocorrer a troca com o anterior
        const taskListParent = document.querySelector('ol'); // Selecionar elemento pai da lista
        previousTask.parentElement.removeChild(previousTask); // Remover filho, o "elemento anterior" ao selecionado
        taskListParent.insertBefore(previousTask, taskSelected.nextSibling); // Inverter posições, inserir o "elemento anterior" depois do selecionado (nextsibling)
      }
    }
  });
}

function moveDown() {
  const taskSelected = document.querySelector('li.selected'); // Objeto 'taskSelected': seleção do elemento de tarefa selecionado com single click
  const tasksListItems = document.querySelectorAll('li'); // NodeList: seleção de todos os elementos de tarefas, list-items
  tasksListItems.forEach((li, position) => { // Arrow function com forEach list-item e posição de elemento
    if (tasksListItems[position] === taskSelected) { // Condicional para encontrar a posição do selecionado
      const followingTask = tasksListItems[position + 1]; // Selecionar possível elemento seguinte ao selecionado
      if (followingTask !== undefined) { // Se houver item seguinte ao selecionado, o selecionado não é o último da lista e deve ocorrer a troca com o próximo
        const taskListParent = document.querySelector('ol'); // Selecionar elemento pai da lista
        followingTask.parentElement.removeChild(followingTask); // Remover filho, o "elemento próximo" ao selecionado
        taskListParent.insertBefore(followingTask, taskSelected); // Inverter posições, inserir o elemento "elemento próximo" antes do selecionado
      }
    }
  });
}

const buttonMoveDown = document.getElementById('mover-baixo');
buttonMoveDown.addEventListener('click', moveDown);

const buttonMoveUp = document.getElementById('mover-cima');
buttonMoveUp.addEventListener('click', moveUp);

// 14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado
function removeSelectedTask() {
  const tasksCompleted = document.querySelectorAll('.selected'); // NodeList: seleção de todos os elementos 'completed'
  tasksCompleted.forEach((li) => { // Arrow function com forEach
    li.parentElement.removeChild(li); // Remover child nodes ---> remover nós da lista de 'completed'
  });
}

const buttonRemoveSelectedTask = document.getElementById('remover-selecionado');
buttonRemoveSelectedTask.addEventListener('click', removeSelectedTask);
