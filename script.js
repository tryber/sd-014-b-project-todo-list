let listaOrdenada;

/*  5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo */

/* 6 - Ordene os itens da lista de tarefas por ordem de criação */

function addTarefa(){
  let addLista = document.createElement('li');
  addLista.classList.add('li-lista');
  document.getElementById('lista-tarefas').appendChild(addLista);
  addLista.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('texto-tarefa').value = "";
}

document.getElementById('criar-tarefa').addEventListener('click', addTarefa)


