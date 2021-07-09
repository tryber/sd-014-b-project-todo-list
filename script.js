let tarefa = document.querySelector("#texto-tarefa")
let listaTarefa = document.querySelector('#lista-tarefas')
let botao = document.querySelector('#criar-tarefa')

function adicionarTarefa() {
    let novaTarefa = document.createElement('li')
    novaTarefa.innerText =  tarefa.value
    listaTarefa.appendChild(novaTarefa)
    //comando pra limpar a caixa
    tarefa.value = ""
}
botao.addEventListener('click', adicionarTarefa)