//insert
let insert = document.getElementById('criar-tarefa');
insert.addEventListener('click', function(){
    let li = document.createElement('li');
    li.innerText = document.getElementById('texto-tarefa').value;
    document.getElementById('lista-tarefas').appendChild(li);
    document.getElementById('texto-tarefa').value = '';
});