function init() {
    if(JSON.parse(localStorage.getItem('li'))) {
    let text = JSON.parse(localStorage.getItem('li'));
    text.forEach(element => {
        if(element.style)
        {
            let li = document.createElement('li');
            let tasks = document.getElementById('lista-tarefas').appendChild(li);
            tasks.innerText = element.text;
            tasks.classList.add('completed');
            //update color + function bellow
            tasks.addEventListener('click', updateColor);
            //toggle line through + function bellow
            tasks.addEventListener('dblclick', doubleClick);
        } else {
            let li = document.createElement('li');
            let tasks = document.getElementById('lista-tarefas').appendChild(li);
            tasks.innerText = element.text;
            //update color + function bellow
            tasks.addEventListener('click', updateColor);
            //toggle line through + function bellow
            tasks.addEventListener('dblclick', doubleClick);
        }
    })}
};
init();
//insert task
let insert = document.getElementById('criar-tarefa');
insert.addEventListener('click', function(){
    let li = document.createElement('li');
    li.innerText = document.getElementById('texto-tarefa').value;
    document.getElementById('lista-tarefas').appendChild(li);
    let task = document.getElementById('lista-tarefas').appendChild(li);
    //update color + function bellow
    task.addEventListener('click', updateColor);
    //toggle line through + function bellow
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

//delete complete tasks
let delCompleted = document.getElementById('remover-finalizados');
delCompleted.addEventListener('click', function() {
    let completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(element => {
        element.remove();
    });
});

//save tasks
let saveTasks = document.getElementById('salvar-tarefas');
saveTasks.addEventListener('click', function () {
    let tasks = document.querySelectorAll('li');
    localStorage.clear();
    let li = [];
    tasks.forEach(element => {
        let text = element.innerText;
        let style = false;
        if (element.classList.contains("completed"))
        {
            style = true;
            li.push({'text':text, "style": style});
        } else
        { 
            li.push({'text':text, "style": style});
        }
    });
    localStorage.setItem('li', JSON.stringify(li));
})
