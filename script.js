let botaoAdicionar = document.querySelector('#criar-tarefa');
let listaDeTarefas = document.querySelector('#lista-tarefas');
let tarefaParaAdicionar = document.querySelector('#texto-tarefa');
let valor = tarefaParaAdicionar.nodeValue
botaoAdicionar.addEventListener("click", adicionaTarefa);
function adicionaTarefa(){
    tarefaParaAdicionar = document.querySelector('#texto-tarefa');
    let criandoItem = document.createElement('li');
    criandoItem.className = 'itensLista';
    criandoItem.innerHTML = tarefaParaAdicionar.value; //copiando o valor da caixa tarefa adc e passando para a li
    listaDeTarefas.appendChild(criandoItem);
    tarefaParaAdicionar.value = ''; //apagando o valor da caixa
}

let botaoPintarOitem = document.querySelector('#lista-tarefas');
botaoPintarOitem.addEventListener("click", pintaOItem);
function pintaOItem(){    
    let itensLi = document.querySelectorAll('li');
    for(index = 0; index <itensLi.length; index +=1){
        itensLi[index].classList.remove('corDoItem')
    }
    let itensDaLista = document.querySelector('.itensLista');;
    itensDaLista.className = 'corDoItem'
}