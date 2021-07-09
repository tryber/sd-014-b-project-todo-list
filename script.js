//insert
let insert = document.getElementById('criar-tarefa');
insert.addEventListener('click', function(){
    let li = document.createElement('li');
    //li.id('tasks');
    li.innerText = document.getElementById('texto-tarefa').value;
    document.getElementById('lista-tarefas').appendChild(li);
    task = document.getElementById('lista-tarefas').appendChild(li);
    task.addEventListener('click', updateColor);
    document.getElementById('texto-tarefa').value = '';
});

function updateColor(event){
    
    event.target.classList.add('selected');
    console.log(event.target);
}
