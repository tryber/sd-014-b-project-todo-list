let liLista = document.getElementsByClassName('li-lista');

/*  5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo */

/* 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128) */

function changeColor(event){
  let selected = document.querySelector('.selected');


  if (selected){
    document.querySelector('.selected').classList.remove('selected')
  }
  event.target.classList.add('selected')

}

/* 6 - Ordene os itens da lista de tarefas por ordem de criação */

function addTarefa(){
  let addLista = document.createElement('li');
  addLista.classList.add('li-lista');


  document.getElementById('lista-tarefas').appendChild(addLista);
  addLista.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = "";
  addLista.addEventListener('click', changeColor)
}


document.getElementById('criar-tarefa').addEventListener('click', addTarefa)


