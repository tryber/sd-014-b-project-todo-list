window.onload = function () {
  const input = document.querySelector('#texto-tarefa');
  const btnAddList = document.querySelector('#criar-tarefa');
  const todoList = document.querySelector('#lista-tarefas');
  const btnApagaTudo = document.querySelector('#apaga-tudo');
  const btnClearFinalizados = document.querySelector('#remover-finalizados');
  function selectItem(event) {
    const itens = todoList.children;
    for (let index = 0; index < itens.length; index += 1) {
      if (itens[index].classList) {
        itens[index].classList.remove('selected');
      }
    }
    if (event.target.classList) {
      event.target.classList.add('selected');
    }
  }
  function taskCompleted(event) {
    const toComplete = event.target;
    const classes = toComplete.classList;
    if (classes.contains('completed')) {
      toComplete.classList.remove('completed');
    } else {
      toComplete.classList.add('completed');
    }
  }
  function addList() {
    const item = document.createElement('li');
    const inputValue = input.value;
    item.innerText = inputValue;
    todoList.appendChild(item);
    input.value = '';
    item.addEventListener('click', selectItem);
    item.addEventListener('dblclick', taskCompleted);
  }
  function clearList() {
    let fullList = document.querySelector('#lista-tarefas');
    while (fullList.firstChild) {
      fullList.removeChild(fullList.firstChild);
    }
  }
  function clearFinisheItens() {
    let finalizados = document.querySelectorAll('.completed');
    console.log(finalizados);
    for (let index = 0; index < finalizados.length; index += 1) {
     finalizados[index].remove();
    }
  }
  btnAddList.addEventListener('click', addList);
  btnApagaTudo.addEventListener('click', clearList);
  btnClearFinalizados.addEventListener('click', clearFinisheItens);
};
