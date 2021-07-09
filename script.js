window.onload = function () {
  const input = document.querySelector('#texto-tarefa');
  const btnAddList = document.querySelector('#criar-tarefa');
  let todoList = document.querySelector('#lista-tarefas');
  function addList() {
    let item = document.createElement('li');
    let inputValue = input.value;
    item.innerText = inputValue;
    todoList.appendChild(item);
    input.value = '';
}
  btnAddList.addEventListener('click', addList);
  
}

