// Permite a adição de tarefas à lista

let addTask = document.querySelector("#criar-tarefa");
addTask.addEventListener("click", createTask);

function createTask() {
  let parentLis = document.querySelector("#lista-tarefas")
  let task = document.querySelector("#texto-tarefa").value;
  let itemList = document.createElement("li");
  itemList.innerText = task;
  itemList.addEventListener("click", changeBackgroundColor);
  itemList.addEventListener("dblclick", completedTask); 
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

// Dois cliques risca a palavra e mais 2 clique retira o risco
function completedTask(event) {
  event.target.classList.toggle('completed')
}

// Função para limpar a lista

let buttonClear = document.querySelector("#apaga-tudo");
buttonClear.addEventListener("click", clearList);

function clearList() {
  let list = document.querySelector("#lista-tarefas");
  list.innerHTML = '';
}

//Função para retirar da lista as tarefas já marcadas como concluídas

let concluidas = document.querySelector("#remover-finalizados");
concluidas.addEventListener("click", tarefasConcluidas);

function tarefasConcluidas() {
  let listTasks = document.querySelectorAll(".completed");
    for (let index = 0; index < listTasks.length; index += 1) {
      listTasks[index].remove();
  }
  console.log("tests")
}