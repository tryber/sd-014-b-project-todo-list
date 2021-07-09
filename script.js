window.onload = function () {
    let buttonAdd = document.querySelector('#criar-tarefa');
    let listaOrdenada = document.querySelector('#lista-tarefas');
    let input = document.querySelector('#texto-tarefa');

    buttonAdd.addEventListener('click', function () {
        let li = document.createElement('li')
        li.innerText = input.value;
        listaOrdenada.appendChild(li);
        input.value = '';
    })
    
}

let listaOrdenada = document.querySelector('#lista-tarefas');

listaOrdenada.addEventListener('click', function(event) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
})