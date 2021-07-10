let botao = document.querySelector('#criar-tarefa').addEventListener ('click', clique)
let tarefas = document.querySelector('#texto-tarefa') // caixa de texto onde se escreve a tarefa
let lista = document.querySelector('#lista-tarefas') // lista ordenada (inicialmente vazia, sem <li>,)

for (let index = 0; index < localStorage.length; index += 1) {
    let li = document.createElement('li')
    li.innerText = localStorage[index]
    lista.appendChild(li)
}
function clique() {
   let li = document.createElement('li') // cria uma <li>
   li.innerText = tarefas.value // recupera o valor (txt) de `tarefas`[linha 2]
   lista.appendChild(li) // adiciona <li> em `lista` [linha 3]
   tarefas.value = '' // apaga o valor no campo (txt) `tarefas` [linha 2]
}
lista.addEventListener('click', function (event) { // cria o evento de click na `lista` [linha 3]
    for (let index = 0; index < lista.children.length; index += 1) {
        lista.children[index].style.backgroundColor = '#373737'
    } //ao clickar em qualquer item da lista, o for percorre todos os itens da lista e seta a cor do background como `white`
    setTimeout(function () { event.target.style.backgroundColor = '#121212'
    },10) // setTimeout de 10ms ao clickar em um item da lista seta a cor do background como `rgb(128, 128, 128`
})
lista.addEventListener('dblclick', function (event) { // adiciona o evento double click   
    if (event.target.style.textDecoration === 'line-through solid rgb(0, 0, 0)'){
        event.target.style.textDecoration = ''
        event.target.classList.remove ('completed')
    }else{
        event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)'
        event.target.className = 'completed'
    }
    // se o texto derocation for igual `line-through solid rgb(0, 0, 0)` entao atribui ao text docoration `''`(vazio) e remove a classe `completed`. Se nao, adicionar ao text decoration `line-through solid rgb(0, 0, 0)` e adiciona a classe completed 
})
document.querySelector('#apaga-tudo').addEventListener ('click', function() {
    const contador = lista.children.length
      for (let index = 0; index < contador ; index +=1) {
        lista.removeChild(document.querySelector('li'))
    }
})
document.querySelector('#remover-finalizados').addEventListener ('click', function() {
    const completos = document.querySelectorAll('.completed')
    for (let index = 0; index < completos.length ; index +=1) {
        lista.removeChild(document.querySelector('.completed'))
    }
})

let save = document.querySelector('#salvar-tarefas').addEventListener('click', function() {
    for (let index = 0; index < lista.children.length; index += 1) {
        localStorage.setItem(index,lista.children[index].innerText)
    }
})

    