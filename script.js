const button = document.getElementById('criar-tarefa')
const listaTarefas = document.getElementById('lista-tarefas')
const input = document.getElementById('texto-tarefa')



button.addEventListener('click',criarTarefas)

function criarTarefas(){
    let li = document.createElement('li');
    li.innerText = input.value
    listaTarefas.appendChild(li);
    clear = document.getElementById('texto-tarefa').value = ""
    
}

