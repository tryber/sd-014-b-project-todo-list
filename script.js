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