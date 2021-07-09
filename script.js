window.onload = function () {
    let buttonAdd = document.querySelector('#criar-tarefa');
    let listaOrdenada = document.querySelector('#lista-tarefas');
    let input = document.querySelector('#texto-tarefa');

    buttonAdd.addEventListener('click', function () {
        let li = document.createElement('li')

        li.addEventListener('click', function() {
            for (element of listaOrdenada.children) {
                if (element.style.backgroundColor = 'rgb(128, 128, 128)') {
                    element.style.backgroundColor = 'white';
                }
                li.style.backgroundColor = 'rgb(128, 128, 128)';
            }
        })

        li.innerText = input.value;
        listaOrdenada.appendChild(li);
        input.value = '';
    })
}