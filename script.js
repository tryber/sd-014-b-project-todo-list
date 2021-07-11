//---------------------------------------------------------------------
let caixaTexto = document.getElementById("texto-tarefa");
let btnAdiciona = document.querySelector('#criar-tarefa');
let listagem = document.querySelector('#lista-tarefas');
let liLocal = document.getElementsByTagName('li');
//---------------------------------------------------------------------

function adicionar() {
    let item = document.createElement('li');
    let inserirValor = document.principal.texto.value;
    let inserirTexto = document.createTextNode(inserirValor);

    item.appendChild(inserirTexto);
    listagem.appendChild(item);
    document.principal.texto.value = "";

};

//---------------------------------------------------------------------

listagem.addEventListener('click', function(event) {

    for (let index = 0; index < liLocal.length; index += 1) {
        liLocal[index].style.backgroundColor = '';

    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
});

//---------------------------------------------------------------------

listagem.addEventListener('dblclick', function(event) {


    if (event.target.className === "completed") {
        event.target.className = "";
    } else { event.target.className += "completed"; }

});

//---------------------------------------------------------------------
let umaLista = document.getElementsByTagName('ol')[0];
let umItem = umaLista.getElementsByTagName('li');

function apagaTudo() {
    for (index = liLocal.length - 1; index >= 0; index -= 1) {
        umaLista.removeChild(umItem[index]);

    }

}

//---------------------------------------------------------------------
let localizaRiscados = umaLista.getElementsByClassName('completed');

function apagaFinalizados() {
    for (index = localizaRiscados.length - 1; index >= 0; index -= 1) {
        umaLista.removeChild(localizaRiscados[index]);

    }

}
//---------------------------------------------------------------------