window.onload = function () {

  // Criando botão

  let textTarefa = document.getElementById('section');
  
  let buttonTarefa = document.createElement('button');
  buttonTarefa.id = 'criar-tarefa';
  buttonTarefa.innerHTML = "Adicionar";
  textTarefa.appendChild(buttonTarefa)
  
  let textoTarefa = document.getElementById('texto-tarefa');
  let listaTarefa = document.getElementById('lista-tarefas');
  
  buttonTarefa.addEventListener('click', function (){
    let addlistaTarefa = document.createElement('li')
    addlistaTarefa.innerText = textoTarefa.value;
    listaTarefa.appendChild(addlistaTarefa);
    textoTarefa.value = '';

    addlistaTarefa.addEventListener('click', function (event){
      // event.target.classList.add('color-gray')
    let colorSelect = document.querySelector('.color-gray')
      if (colorSelect) {
      colorSelect.classList.remove('color-gray');
    }
      event.target.classList.add('color-gray')
    })
    
    addlistaTarefa.addEventListener('dblclick', function (event) {
      let addDecoration = document.querySelector('.completed');
        event.target.classList.add('completed') 
      addlistaTarefa.addEventListener('dblclick', function (){
        event.target.classList.remove('completed')  
      })
          
    })
  })   
}