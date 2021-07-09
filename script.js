// 5.
const findList = document.querySelector('#lista-tarefas');
const button = document.querySelector("#criar-tarefa");
const inputValue = document.querySelector("#texto-tarefa");

function addItemInList() {
  let createLi = document.createElement('li')
  createLi.innerText = inputValue.value;
  findList.appendChild(createLi);
  inputValue.value = "";
}
button.addEventListener('click', addItemInList);

// 6.
