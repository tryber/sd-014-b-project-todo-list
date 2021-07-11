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

listagem.addEventListener('click', (event) => {
    const preSelected = document.querySelector('.selected');
    if (preSelected != null) {
        preSelected.style.backgroundColor = '';
        preSelected.classList.remove('selected');
    }
    event.target.classList.add('selected');
});

//---------------------------------------------------------------------

listagem.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
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
const saveBtn = document.getElementById('salvar-tarefas');

saveBtn.addEventListener('click', function() {
    localStorage.setItem('List', listagem.innerHTML);
})
listagem.innerHTML = localStorage.getItem('List');
//---------------------------------------------------------------------
// Fonte de pesquisa variada!!!
// Sites recomendados e adicionais no Google!
// Projeto foi reformulado uma porrada de vez kkkkk