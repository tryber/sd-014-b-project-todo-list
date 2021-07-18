window.onload=function(){
    const buttonAddTask= document.querySelector("#criar-tarefa");
    const listTask =document.getElementById('lista-tarefas');
    function addItem(){
        let addTask=document.getElementById('texto-tarefa').value;
        let additem=document.createElement('li');
        additem.innerText=addTask;
        listTask.appendChild(additem);
        document.querySelector('#texto-tarefa').value = '';
    }
    buttonAddTask.addEventListener('click',addItem)

}