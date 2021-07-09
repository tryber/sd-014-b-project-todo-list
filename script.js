// Permite a adição de tarefas à lista

let addTask = document.querySelector("#criar-tarefa");
addTask.addEventListener("click", createTask);

function createTask() {
  let parentLis = document.querySelector("#lista-tarefas")
  let task = document.querySelector("#texto-tarefa").value;
  let itemList = document.createElement("li");
  itemList.innerText = task;
  itemList.addEventListener("click", changeBackgroundColor);
  parentLis.appendChild(itemList);
  document.querySelector("#texto-tarefa").value = null;
}

// Ao clicar em uma tarefa, muda o background da mesma



function changeBackgroundColor(event) {
  let list = document.querySelectorAll("li");
  for (let index = 0; index <list.length; index += 1) {
    list[index].style.backgroundColor = '';
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
}



