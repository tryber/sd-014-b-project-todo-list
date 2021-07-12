let inputElement = document.getElementById("texto-tarefa");
let buttonElement = document.querySelector("#criar-tarefa");
let olElement = document.querySelector("#lista-tarefas");
let btnRemove = document.querySelector("#apaga-tudo");


buttonElement.addEventListener("click", function recebeClick() {
  let liElement = document.createElement('li');

  if (inputElement.value) {
    liElement.innerText = `${inputElement.value}`;
    olElement.appendChild(liElement);
    inputElement.value = "";
  }

  liElement.addEventListener("click", function selectColorGray(event){
    if (document.querySelector('.selected')) {
      let colorGray = document.querySelector('.selected');
      colorGray.classList.remove('selected');
    }
    event.target.classList.add('selected');

  })

  liElement.addEventListener("dblclick", function doubleClicknone(event) {
    event.target.classList.toggle('completed');
  })

  btnRemove.addEventListener("click", function removeTasks() {
    olElement.removeChild(liElement);
  })

})

let btnSelectedClear = document.querySelector("#remover-finalizados");

btnSelectedClear.addEventListener("click", function clearItemList() {
  let clearComplete = document.querySelectorAll(".completed");
  
  for (index = clearComplete.length - 1; index >= 0; index -= 1) {
    clearComplete[index].remove();
  }

})

