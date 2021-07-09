/* Criando uma adição na lista */
let addItemList = document.querySelector('#lista-tarefas');
function adicionaTarefa () {
    if(document.getElementById('texto-tarefa').value !== "") {
        let criandoLi = document.createElement('li');
        criandoLi.innerHTML = document.getElementById('texto-tarefa').value;
        addItemList.appendChild(criandoLi)
    }
    document.getElementById('texto-tarefa').value = "";
}
/* Obtive ajuda no Stackoverflow no link https://pt.stackoverflow.com/questions/455158/estou-treinando-o-b%c3%a1sico-do-javascript-e-preciso-de-ajuda-numa-to-do-list */

