let botao = document.querySelector('#criar-tarefa').addEventListener ('click', clique)
let tarefas = document.querySelector('#texto-tarefa')
let lista = document.querySelector('#lista-tarefas')

function clique() {
   let li = document.createElement('li')
   li.innerText = tarefas.value
   lista.appendChild(li)
   tarefas.value = ''
}
