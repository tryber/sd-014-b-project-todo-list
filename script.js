let tarefa = document.querySelector("#texto-tarefa")
let listaTarefa = document.querySelector('#lista-tarefas')
let botao = document.querySelector('#criar-tarefa')

//adicona os itens nas li da lista ordenada
function adicionarTarefa() {
    let novaTarefa = document.createElement('li') 
    novaTarefa.innerText =  tarefa.value
    listaTarefa.appendChild(novaTarefa) 
    //comando pra limpar a caixa
    tarefa.value = ""
    
    //riscar as li's
    novaTarefa.addEventListener('dblclick', riscaTarefa)
}
botao.addEventListener('click', adicionarTarefa)

//trocar cor da tarefa selecionada - sendo apenas 1
function alteraFundo(event) {
    let lista = document.querySelectorAll('li')
    for (i = 0; i < lista.length; i +=1) {
        lista[i].style.removeProperty("background-color")
    }
    event.target.style.backgroundColor = 'rgb(128,128,128)'
}

listaTarefa.addEventListener('click', alteraFundo)

//risco duplo - riscar li's
function riscaTarefa(event) {    
    if (document.querySelector('.completed')) {
        event.target.classList.remove("completed")
    } else {
        event.target.classList.add("completed")
    }
}

