let inputElement = document.getElementById("texto-tarefa");  //input de texto
let buttonElement = document.querySelector("#criar-tarefa"); // botão adicionar
let olElement = document.querySelector("#lista-tarefas"); // recuperando lista
let btnRemove = document.querySelector("#apaga-tudo"); //recupera o botão de remover
let btnSelectedClear = document.querySelector("#remover-finalizados");


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
