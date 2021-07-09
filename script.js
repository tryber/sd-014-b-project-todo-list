

/*  5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo */
function addTarefa(){
  let addLista = document.createElement('li')
  document.getElementById('lista-tarefas').appendChild(addLista)
  addLista.innerText = document.getElementById('texto-tarefa').value
  document.getElementById('texto-tarefa').value = ""
}

document.getElementById('criar-tarefa').addEventListener('click', addTarefa)

