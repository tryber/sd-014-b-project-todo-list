const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', function(){
    const list = document.querySelector('#lista-tarefas');
    const input = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    list.appendChild(li);
    li.innerText = input.value;
    input.value = ""
})
