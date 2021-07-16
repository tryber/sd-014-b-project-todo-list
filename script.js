let liLista = document.getElementsByClassName('lista-dentro');
let clearButton = document.getElementById('apaga-tudo');
let finishButton = document.getElementById('remover-finalizados');
let buttonSave = document.getElementById('salvar-tarefas');
let completed = document.getElementsByClassName('completed');

/*  5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo */

/* 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128) */

function changeColor(event){
  let selected = document.querySelector('.selected');
  if (selected){
    document.querySelector('.selected').classList.remove('selected')
}event.target.classList.add('selected')
}

function changeToComplete(event){
  let complete = event.target.classList[0]
  let complete2 = event.target.classList[1]
  let complete3 = event.target.classList[2]

  event.target.classList.add('completed')
  if (complete && complete2 && complete3) {
    event.target.classList.remove('completed')
  }
}

/* 6 - Ordene os itens da lista de tarefas por ordem de criação */

function addTarefa(){
  let addLista = document.createElement('li');
  addLista.classList.add('lista-dentro')
  document.getElementById('lista-tarefas').appendChild(addLista);
  addLista.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = "";
  addLista.addEventListener('click', changeColor)
  addLista.addEventListener('dblclick', changeToComplete)
}


document.getElementById('criar-tarefa').addEventListener('click', addTarefa)


/* 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista */
clearButton.addEventListener('click', removeAll)

function removeAll(){
  document.getElementById('lista-tarefas').remove()
  let ol = document.createElement('ol')
  ol.id = 'lista-tarefas'
  document.getElementById('lista').appendChild(ol)  
}

/* 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove **somente** os elementos finalizados da sua lista */
finishButton.addEventListener('click', removeFinish)


function removeFinish(){
  
  for (let index = 0; index < completed.length; index +=1){
  completed[index].parentElement.removeChild(completed[index])
  for (let index = 0; index < completed.length; index +=1){
    completed[index].parentElement.removeChild(completed[index])
  }
}
}


