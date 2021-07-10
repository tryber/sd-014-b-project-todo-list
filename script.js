//insert
let insert = document.getElementById('criar-tarefa');
insert.addEventListener('click', function(){
    let li = document.createElement('li');
    //li.id('tasks');
    li.innerText = document.getElementById('texto-tarefa').value;
    document.getElementById('lista-tarefas').appendChild(li);
    task = document.getElementById('lista-tarefas').appendChild(li);
    //update color
    task.addEventListener('click', updateColor);
    //toggle line through
    task.addEventListener('dblclick', doubleClick);
    document.getElementById('texto-tarefa').value = '';
});
//update color
function updateColor(event){
    selected = document.querySelectorAll('li');
    selected.forEach(element => {
        element.classList.remove('selected');
    });
    event.target.classList.add('selected');
};
//toggle line through
function doubleClick(event){ 
    event.target.classList.toggle('completed');
};

//delete all tasks
let del = document.getElementById('apaga-tudo');
del.addEventListener('click', function () {
    let tasks = document.querySelectorAll('li');
    tasks.forEach(element => {
        element.remove();
    });
});