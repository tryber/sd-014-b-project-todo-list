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
    bodySelection.appendChild(pCreation)
  }

  headerCreation();
  paragraphCreation();

}