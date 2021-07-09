let botao = document.querySelector('#criar-tarefa').addEventListener ('click', clique)
let tarefas = document.querySelector('#texto-tarefa') // caixa de texto onde se escreve a tarefa
let lista = document.querySelector('#lista-tarefas') // lista ordenada (inicialmente vazia, sem <li>,)

function clique() {
   let li = document.createElement('li') // cria uma <li>
   li.innerText = tarefas.value // recupera o valor (txt) de `tarefas`[linha 2]
   lista.appendChild(li) // adiciona <li> em `lista` [linha 3]
   tarefas.value = '' // apaga o valor no campo (txt) `tarefas` [linha 2]
}

lista.addEventListener('click', function (event) {
    setTimeout(function () { event.target.style.backgroundColor = 'rgb(128, 128, 128)'
    },10);

    for (let index = 0; index < lista.children.length; index += 1) {
        lista.children[index].style.backgroundColor = 'white'
    }
})
