/* Criando uma adição na lista */
let addItemList = document.querySelector('#lista-tarefas');
function adicionaTarefa () {
    if(document.getElementById('texto-tarefa').value !== "") {
        let criaItem = document.createElement('li');
        criaItem.innerHTML = document.getElementById('texto-tarefa').value
        criaItem.classList.add('lista')
        addItemList.appendChild(criaItem)
    }
    document.getElementById('texto-tarefa').value = ""
}

/* Obtive ajuda no Stackoverflow no link https://pt.stackoverflow.com/questions/455158/estou-treinando-o-b%c3%a1sico-do-javascript-e-preciso-de-ajuda-numa-to-do-list */

/* Requisito 7 */

function pintarSelecionado (event) {
    let listaTarefas = document.getElementsByClassName('lista')
    for (let index = 0; index < listaTarefas.length;index += 1) {

    event.target.style.backgroundColor = 'rgb(128, 128, 128)'

    if(event.target.style.backgroundColor === 'rgb(12, 128, 128)') {
        event.target.style.backgroundColor = 'white';
    }
    }
}
addItemList.addEventListener('click', pintarSelecionado)