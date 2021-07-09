const button = document.getElementById('criar-tarefa')
const listaTarefas = document.getElementById('lista-tarefas')
const input = document.getElementById('texto-tarefa')




button.addEventListener('click',criarTarefas)

function linhaRiscada (event){
    let completed = document.querySelector('.completed')
    if (completed){
        completed.classList.remove('completed');
    }else {
        event.target.classList.add('completed');
    }

}


function trocarCor(event){
    let selected = document.querySelector('.selected')
    if (selected){
        selected.classList.remove('selected');
    }
        event.target.classList.add('selected');
    

    //event.target.classList.add('selected');
}


function criarTarefas(){
    if(input.value != ''){
    let li = document.createElement('li');
    li.innerText = input.value;
    listaTarefas.appendChild(li);
    let clear = document.getElementById('texto-tarefa').value = ""
    li.addEventListener('click',trocarCor);
    li.addEventListener('dblclick',linhaRiscada);
    }else {
        alert('Coloque sua tarefa');
    }
  // Trocar a cor de fundo 
}

    
    


