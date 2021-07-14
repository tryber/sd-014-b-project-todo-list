const textoTarefa = document.getElementById('texto-tarefa');
const listOr = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');


function adcionarLiCompleto() {
    function adcionaLi() {
        const creatLi = document.createElement('li');
        creatLi.innerText = textoTarefa.value;
        creatLi.className = 'list';
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


function addBackgroundColorFulll() {
    function addBackgroundColor() {
        const list = document.querySelectorAll('.list');
        function addSelec(event) {
        for (let index = 0; index < list.length; index += 1) {
            if (list[index].classList.contains('selected')) {
                list[index].classList.remove('selected');
            }
        }
        event.target.classList.add('selected');
        }
        const li = document.querySelectorAll('li');
        for (let i = 0; i < li.length; i += 1) {
            li[i].addEventListener('click', addSelec);
        }
    }
    button.addEventListener('click', addBackgroundColor);
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addBackgroundColor();
        }
    })
}


function addLineThroughFull() {
    let contador = 0;
    function addLineThrough() {

        function addComple(event) {
            if (event.target.classList.contains('completed')) {
                event.target.classList.remove('completed');
            } else {
                event.target.classList.add('completed');
            }
        }

        const li = document.querySelectorAll('.list');
        for (let i = contador; i < li.length; i += 1) {
            li[i].addEventListener('dblclick', addComple);
            contador += 1;
        }
    }
    button.addEventListener('click', addLineThrough);
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addLineThrough();
        }
    })
}


function removeAllFull() {
    function removeAll(){
        const li = document.querySelectorAll('.list');

        for (let index = 0; index < li.length; index += 1) {
            li[index].parentNode.removeChild(li[index]);
        }
    }
    document.getElementById('apaga-tudo').addEventListener('click', removeAll);
}


function removeCompleted() {
    function removeCompleted(){
        const li = document.querySelectorAll('.list');

        for (let index = 0; index < li.length; index += 1) {
            if (li[index].classList.contains('completed')) {
                li[index].parentNode.removeChild(li[index]);
            }
        }
    }
    document.getElementById('remover-finalizados').addEventListener('click', removeCompleted);
}


adcionarLiCompleto();
addBackgroundColorFulll();
addLineThroughFull();
removeAllFull();
removeCompleted();