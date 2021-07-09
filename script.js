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
  function inputCreation() {
    let bodySelection = document.querySelector('body');
    let inputCreation = document.createElement('input')
    inputCreation.id = 'texto-tarefa';
    bodySelection.appendChild(inputCreation);
  }
  function unorderedListCreation() {
    let bodySelection = document.querySelector('body');
    let ulCreation = document.createElement('ul')
    ulCreation.id = 'lista-tarefas';
    bodySelection.appendChild(ulCreation);
  }
  headerCreation();
  paragraphCreation();
  inputCreation();
  unorderedListCreation();

}