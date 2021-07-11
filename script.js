let inputElement = document.getElementById("texto-tarefa");  //input de texto
let buttonElement = document.querySelector("#criar-tarefa"); // botão adicionar
let olElement = document.querySelector("#lista-tarefas"); // recuperando lista

buttonElement.addEventListener("click", recebeClick);

function recebeClick(event) {

  if (inputElement.value) {
    let liElement = document.createElement('li');
    liElement.innerText = `${inputElement.value}`;
    olElement.appendChild(liElement);
    inputElement.value = "";
  }

}
