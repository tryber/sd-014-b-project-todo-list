window.onload = function() {
  function headerCreation() {
    let bodySelection = document.querySelector('body');
    let header = document.createElement('header');
    header.innerText = 'Minha Lista de Tarefas';
    bodySelection.appendChild(header);
  }

  headerCreation();

}