document.querySelector('h1').innerText = "Minha Lista de Tarefas";
document.querySelector('#funcionamento').innerText = "Clique duas vezes em um item para marcá-lo como completo";


function addNewTarefa() {
  let addTextTarefa = document.querySelector('#texto-tarefa');
  let addInputBotton = document.querySelector('#criar-tarefa');
  let addListTarefa = document.querySelector('#lista-tarefas');

  addInputBotton.addEventListener('click' , function() {
    let newTarefa = document.createElement('li');
    newTarefa.innerText = addTextTarefa.value;

    addListTarefa.appendChild(newTarefa);
    addTextTarefa.value = '';
  })
}
addNewTarefa();
