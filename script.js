window.onload = function () {
  const input = document.querySelector('#texto-tarefa');
  const btnAddList = document.querySelector('#criar-tarefa');
  const todoList = document.querySelector('#lista-tarefas');
  function addList() {
    const item = document.createElement('li');
    const inputValue = input.value;
    item.innerText = inputValue;
    todoList.appendChild(item);
    input.value = '';
    item.addEventListener('click', selectItem);
    item.addEventListener('dblclick', functionZ);
  }
  function selectItem(event) {
    let itens = todoList.children;
    console.log(itens);
    for (let index = 0; index < itens.length; index += 1) {
      if (itens[index].classList){
        itens[index].classList.remove('selected');
      }
    }
    if (event.target.classList) {
      event.target.classList.add('selected');
    }
  }
  btnAddList.addEventListener('click', addList);  
};
/*
function selectColor(event) {
    // 1° passo um Loop em todas as cores e removo a classe de todos
    for (let index = 0; index < coresPalet.length; index += 1) {
      if (coresPalet[index].classList) {
        coresPalet[index].classList.remove('selected');
      }
    }
    // 2° adiciono a classe novamente apenas na cor que recebeu o clique.
    if (event.target.classList) {
      event.target.classList.add('selected');
    }
  } */