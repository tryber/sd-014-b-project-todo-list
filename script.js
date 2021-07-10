function adicionar() {
    let tar = document.getElementById('texto-tarefa').value;
    let lista = document.getElementById('lista-tarefas').innerHTML;
    lista += "<li class='list' onclick='blk()'>" + tar + "</li>";

    document.getElementById('lista-tarefas').innerHTML = lista
    document.getElementById('texto-tarefa').value = ''
}

function blk() {
    let allPixels = document.querySelectorAll('.list');

    for (let index = 0; index < allPixels.length; index++) {
        // allPixels[index].addEventListener('click', function() 
        if (allPixels[index].style.backgroundColor != 'rgb(128, 128, 128)') {
            allPixels[index].style.backgroundColor = 'rgb(128, 128, 128)';
        };

    }
}