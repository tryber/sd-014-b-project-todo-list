const button = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const buttonApagaTudo = document.getElementById('apaga-tudo');
const removerFinalizado = document.getElementById('remover-finalizados');
const buttonSalvar = document.getElementById('salvar-tarefas');
const buttonRemover = document.getElementById('remover-selecionado')
const buttonCima = document.getElementById('mover-cima');
const buttonBaixo = document.getElementById('mover-baixo');

window.onload = () => {
    
    listaTarefas.innerHTML = localStorage.getItem("Lista");
    for (let cont=0;cont < document.querySelectorAll("li").length;cont+=1){

        document.querySelectorAll("li")[cont].addEventListener('click',trocarCor);
        document.querySelectorAll("li")[cont].addEventListener('dblclick',linhaRiscada);
    } 
}


button.addEventListener('click',criarTarefas)

function linhaRiscada (event){
        event.target.classList.toggle('completed');
   
}

function trocarCor(event){
    let selected = document.querySelector('.selected')
    if (selected){
        selected.classList.remove('selected');
    }
        event.target.classList.add('selected');
    
}


function criarTarefas(){
    if(input.value != ''){
    let li = document.createElement('li');
    li.innerText = input.value;
    listaTarefas.appendChild(li);
    document.getElementById('texto-tarefa').value = ""
    li.addEventListener('click',trocarCor);
    li.addEventListener('dblclick',linhaRiscada);
    }else {
        alert('Coloque sua tarefa');
    }
  // Trocar a cor de fundo 
}

function clearTarefas(){
   let li = document.querySelector('ol')
   li.innerHTML = "";
}    

function removerFinalizados(){
let finalizados = document.querySelectorAll('.completed')
    for (let cont = 0; cont < finalizados.length; cont+=1){
        finalizados[cont].remove();
    }
}
    
buttonApagaTudo.addEventListener('click',clearTarefas);

removerFinalizado.addEventListener('click',removerFinalizados);

buttonSalvar.addEventListener('click',salvarTarefas);

buttonRemover.addEventListener('click',removerSelecionado)

buttonCima.addEventListener('click',moverParaCima);

buttonBaixo.addEventListener('click',moverParaBaixo);

// buttonCima.addEventListener('click',moverParaCima);

function salvarTarefas(){
  let lista = listaTarefas.innerHTML;
    
    localStorage.setItem("Lista",lista);
}



function moverParaCima(){
    let no = document.querySelector('.selected');
    if (no == listaTarefas.firstElementChild){
        alert('ERRO')
    }else if(no){
        listaTarefas.insertBefore(no, no.previousElementSibling)
    }
}


function moverParaBaixo(){
    let no = document.querySelector('.selected');
    if (no == listaTarefas.lastElementChild){
        alert('ERRO')
    }else if(no){
        listaTarefas.insertBefore(no.nextElementSibling, no)
    }
}


function removerSelecionado(){
    let selecionado = document.querySelector('.selected')
    if (selecionado){
        selecionado.remove();
    }else{
    alert('Selecione para remover')
    }

}
