window.onload = function () {

  // Criando botão adicionar

  let textTarefa = document.getElementById('section');
  
  let buttonTarefa = document.createElement('button');
  buttonTarefa.id = 'criar-tarefa';
  buttonTarefa.innerHTML = "Adicionar";
  textTarefa.appendChild(buttonTarefa)

// Adiciona o valor do input na lista

  let textoTarefa = document.getElementById('texto-tarefa');
  let listaTarefa = document.getElementById('lista-tarefas');
  
  buttonTarefa.addEventListener('click', function (){
    let addlistaTarefa = document.createElement('li')
    addlistaTarefa.innerText = textoTarefa.value;
    addlistaTarefa.id = 'add-lista-tarefa';
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
  
// Criando botão Apaga tudo.

  let buttonApaga = document.createElement('button');
  buttonApaga.id = 'apaga-tudo';
  buttonApaga.innerHTML = "Apagar tudo";
  textTarefa.appendChild(buttonApaga);

  buttonApaga.addEventListener('click', function (){
    let apagaTudo = document.querySelectorAll('li')
    console.log('clicou')
    for (let index = 0; index < apagaTudo.length; index += 1){
      apagaTudo[index].parentNode.removeChild(apagaTudo[index]);
    }
  })

}