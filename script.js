const button = document.getElementById('criar-tarefa')
const listaTarefas = document.getElementById('lista-tarefas')
const input = document.getElementById('texto-tarefa')




button.addEventListener('click',criarTarefas)


function trocarCor(event){
    let selected = document.querySelector('.selected')
    if (selected){
        selected.classList.remove('selected');
    }
    event.target.classList.add('selected');
}
    


function criarTarefas(){
    let li = document.createElement('li');
    li.innerText = input.value;
    listaTarefas.appendChild(li);
    clear = document.getElementById('texto-tarefa').value = ""
    li.addEventListener('click',trocarCor);
  // Trocar a cor de fundo 
}

    
    


