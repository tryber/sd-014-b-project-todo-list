window.onload = () => {
    let listaSalva = localStorage.getItem('Lista')
    let savedList = document.getElementById('lista-tarefas');
    savedList.innerHTML = listaSalva;
}

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

/* Requisito 7 / 8*/
/* Ajudinha do colega Esdras da turma 14 tribo B */
function pintarSelecionado (event) {
    let listaTarefas = document.getElementsByClassName('lista')
    for (let index = 0; index < listaTarefas.length;index += 1) {
    listaTarefas[index].style.backgroundColor = ''
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    event.target.classList.add('selecionado')
}
addItemList.addEventListener('click', pintarSelecionado)




/* Requisito 9 */
/* toggle -> https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList */
let teste = document.getElementById('lista-tarefas');
teste.addEventListener('dblclick', riscarSelecionado);
function riscarSelecionado (event) {
    event.target.classList.toggle('completed')
}

/* Requisito 10 */

/* Pesquisei e encontrei várias alternativas de como apagar os nós, inclusive no proprio corse, pos você acredita que eu coloquei a função no botão errado? kkk mas deu certo, o link de onde eu peguei é esse aqui -> https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild */
let elemento = document.querySelector('#lista-tarefas');
function apagaTudo() {
    let elemento = document.getElementById('lista-tarefas');
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

/* Gambiarra é o que vemos aqui meu caro amigo */
/* Requisito 11 */
let botaoClear = document.getElementById('remover-finalizados')
botaoClear.addEventListener('click', apagaFinalizados)
let paisao = document.getElementById('lista-tarefas').children
function apagaFinalizados() {
    let classeCompleted = document.getElementsByClassName('completed')
    for(let index = 0; index < classeCompleted.length; index += 0) {
        if(classeCompleted[index].classList.contains('completed')){
            classeCompleted[index].remove()
        }
    }
} 

/* Requisito 12 */

let salvarLista = document.getElementById('salvar-tarefas');
salvarLista.addEventListener('click', salvaLista);

function salvaLista() {
    let setItem = localStorage.setItem('Lista', document.getElementById('lista-tarefas').innerHTML)
}




/* Requisito 14 */

let botaoRemoveSelected = document.getElementById('remover-selecionado');
botaoRemoveSelected.addEventListener('click', removerSelecionado);
function removerSelecionado() {
    document.querySelector('.selecionado').remove();
}