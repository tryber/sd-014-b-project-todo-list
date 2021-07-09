window.onload = function() {

  //Define constantes que armazenam os botões e adicionam 'escutadores' de eventos
  const addTaskButton = document.getElementById('criar-tarefa');
  addTaskButton.addEventListener('click', addTask);

  const removeClearedButton = document.getElementById('remover-finalizados');
  removeClearedButton.addEventListener('click', removeClearedTasks);

  const clearAllButton = document.getElementById('apaga-tudo');
  clearAllButton.addEventListener('click', removeAll);

  // Função que permite adicionar tarefa à lista, também atribui classe e a sensibilidade a eventos
  function addTask() {
    let input = document.getElementById('texto-tarefa');
    let newTask = document.createElement('li');
    let position = document.getElementById('lista-tarefas');

    newTask.className = 'tarefa';
    newTask.innerText = input.value;
    newTask.addEventListener('click', highlight);
    newTask.addEventListener('dblclick', riskCleared);
    position.appendChild(newTask);
    input.value = '';
  }

  // Permite aplicar cor de realce à tarefa seleciona, também restringe a seleção a um elemento por vez
  function highlight(selection) {
    let selectionedTask = document.querySelectorAll('.selected');
    if (selectionedTask.length !== 0) { 
    selectionedTask[0].classList.remove('selected');
    }
    selection.target.classList.add('selected');
  }

  // Atribui a classe 'realizada' e aplica estilo na fonte, riscando.
  function riskCleared(selection) {
    let classes = selection.target.classList;
    if (classes.length === 2) {
      classes.add('completed');
    } else {
      classes.remove('completed');
    }
  }

  // Remove as tarefas realizadas da lista
  function removeClearedTasks() {
    let clearedTasks = document.querySelectorAll('.completed');
    let taskList = document.getElementById('lista-tarefas');
    for(let i = 0; i < clearedTasks.length; i ++) {
      taskList.removeChild(clearedTasks[i]);
    }
  }

  // Limpa a lista, removendo todos os itens
  function removeAll() {
    let allItems = document.querySelectorAll('.tarefa');
    let taskList = document.getElementById('lista-tarefas');
    for(let i = 0; i < allItems.length; i++) {
      taskList.removeChild(allItems[i]);
    }
  }
}
