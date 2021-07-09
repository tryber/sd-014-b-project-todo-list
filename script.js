window.onload = function () {
  const input = document.querySelector('#texto-tarefa');
  const btnAddList = document.querySelector('#criar-tarefa');
  const todoList = document.querySelector('#lista-tarefas');
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
  function addList() {
    const item = document.createElement('li');
    const inputValue = input.value;
    item.innerText = inputValue;
    todoList.appendChild(item);
    input.value = '';
    item.addEventListener('click', selectItem);
    //item.addEventListener('dblclick', functionZ);
  }
  btnAddList.addEventListener('click', addList);
};
