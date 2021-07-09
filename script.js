window.onload = function() {
  function headerCreation() {
    let bodySelection = document.querySelector('body');
    let header = document.createElement('header');
    header.innerText = 'Minha Lista de Tarefas';
    bodySelection.appendChild(header);
  }
  function paragraphCreation() {
    let bodySelection = document.querySelector('body');
    let pCreation = document.createElement('p');
    pCreation.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
    pCreation.id = 'funcionamento';
    bodySelection.appendChild(pCreation);
  }
  function inputContainerCreation() {
    let bodySelection = document.querySelector('body');
    let divCreation = document.createElement('div');
    divCreation.id = 'inputAndButtonContainer';
    bodySelection.appendChild(divCreation);
  }
  function inputCreation() {
    let divSelection = document.querySelector('#inputAndButtonContainer');
    let input = document.createElement('input');
    input.id = 'texto-tarefa';
    divSelection.appendChild(input);
  }
  function orderedListCreation() {
    let bodySelection = document.querySelector('body');
    let ulCreation = document.createElement('ol')
    ulCreation.id = 'lista-tarefas';
    bodySelection.appendChild(ulCreation);
  }
  function buttonCreation() {
    let inputSelection = document.querySelector('#inputAndButtonContainer')
    let button = document.createElement('button')
    button.innerText = 'Adicionar'
    button.id = 'criar-tarefa'
    inputSelection.appendChild(button)
  }
  headerCreation();
  paragraphCreation();
  inputContainerCreation();
  inputCreation()
  buttonCreation()
  orderedListCreation();
  let button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', function(event) {
    let listSelection = document.querySelector('ol')
    let inputSelection = document.querySelector('#texto-tarefa')
    let listItem = document.createElement('li')
    listItem.innerText = inputSelection.value 
    listSelection.appendChild(listItem)
    inputSelection.value = ''

  })

}