const button = document.querySelector('#criar-tarefa')
let lista = document.querySelector('#lista-tarefas');
let input = document.querySelector('#texto-tarefa')

function addTask() {
    let newItem = document.createElement('li');
    newItem.innerText = input.value;
    lista.appendChild(newItem)
    input.value = '';
    
}
button.addEventListener('click', addTask);

   

    

