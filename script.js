function adicionar() {
    let tar = document.getElementById('texto-tarefa').value;
    let lista = document.getElementById('lista-tarefas').innerHTML;
    lista += "<li>" + tar + "</li>";

    document.getElementById('lista-tarefas').innerHTML = lista
    document.getElementById('texto-tarefa').value = ''
}