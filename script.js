let addTask = document.querySelector("#criar-tarefa");
addTask.addEventListener("click", createTask);

function createTask() {
  let parentLis = document.querySelector("#lista-tarefas")
  let task = document.querySelector("#texto-tarefa").value;
  let itemList = document.createElement("li");
  itemList.innerText = task;
  parentLis.appendChild(itemList);
  document.querySelector("#texto-tarefa").value = null;
  console.log(itemList);
}
