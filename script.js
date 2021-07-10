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
function pintaOItem(evento){    
    console.log(evento.srcElement)  // olhando o inspecionar, vi que o src era o elemento 
    let tamanhoLista = document.getElementsByClassName('itensLista');
    if (document.querySelector('.corDoItem')) { // Ajuda pelo slack do Victor Martins
        document.querySelector('.corDoItem').classList.remove('corDoItem') 
    }
    let eventoClique = evento.srcElement
    eventoClique.classList.add('corDoItem')
}

let botaoRiscarOItem = document.querySelector('#lista-tarefas');
botaoRiscarOItem.addEventListener('dblclick', riscaOItem);
function riscaOItem(evento){
        let clicado = evento.srcElement
        if(clicado === document.querySelector('.completed')){
            clicado.classList.remove('completed')
        }else{
       clicado.classList.add('completed')}     
}

   

    