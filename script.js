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

        li.addEventListener('dblclick', function () {
            if (li.className === 'completed') {
                li.classList.remove('completed')
            } else {
                li.classList.add('completed')
            }
        })


        li.innerText = input.value;
        listaOrdenada.appendChild(li);
        input.value = '';
    })

    let buttonApagaTudo = document.querySelector('#apaga-tudo');

    buttonApagaTudo.addEventListener('click', function () {
        let lis = document.querySelectorAll('li');

        for (let i = 0; i < lis.length; i += 1) {
            listaOrdenada.removeChild(lis[i])
        }
    })

    let buttonRemoveFinalizados = document.querySelector('#remover-finalizados')

    buttonRemoveFinalizados.addEventListener('click', function() {
        let completedTasks = document.querySelectorAll('.completed');

        for (element of completedTasks) {
            listaOrdenada.removeChild(element);
        }
    })
}