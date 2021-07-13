const textoTarefa = document.getElementById('texto-tarefa');
const listOr = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');


function adcionarLiCompleto() {
    function adcionaLi() {
        const creatLi = document.createElement('li');
        creatLi.innerText = textoTarefa.value;
        listOr.appendChild(creatLi);
        textoTarefa.value = null;
    }
    button.addEventListener('click', adcionaLi);
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            adcionaLi();
        }
    })
}
adcionarLiCompleto();

function addBackgroundColor() {
    const li = document.querySelectorAll('li');

    for (let index in li) {
        li[index].addEventListener('click', function (event) {
            for (let secondIndex = 0; secondIndex < li.length; secondIndex += 1) {
                if (li[secondIndex].classList.contains('selected')) {
                    li[secondIndex].classList.remove('selected');
                }
            }
            event.target.classList.add('selected');
        });
    }
}
button.addEventListener('click', addBackgroundColor);
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addBackgroundColor();
        }
    })

function addLineThrough() {
    const li = document.querySelectorAll('li');

    for (let index in li) {
        li[index].addEventListener('dblclick', function (event) {
            event.target.classList.add('completed');
            if (li[index].classList.contains('completed')) {
                li[index].addEventListener('dblclick', function (event) {
                    event.target.classList.remove('completed');
                })
            }
        });
    }
}
button.addEventListener('click', addLineThrough);
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addLineThrough();
        }
    })

function removeAll(){
    const li = document.querySelectorAll('li');

    for (let index in li) {
        li[index].parentNode.removeChild(li[index]);
    }
}
document.getElementById('apaga-tudo').addEventListener('click', removeAll);

function removeAll(){
    const li = document.querySelectorAll('li');

    for (let index in li) {
        if (li[index].classList.contains('completed')) {
         li[index].parentNode.removeChild(li[index]);
        }
    }
}
document.getElementById('remover-finalizados').addEventListener('click', removeAll);