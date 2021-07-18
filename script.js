window.onload=function(){
    const buttonAddTask= document.querySelector("#criar-tarefa");
    let listTask =document.getElementById('lista-tarefas');

    function addItem(){
        let addTask=document.getElementById('texto-tarefa').value;
        let additem=document.createElement('li');
        additem.innerText=addTask;
        listTask.appendChild(additem);
        document.querySelector('#texto-tarefa').value = ''; 
    }

    buttonAddTask.addEventListener('click',addItem);

    function select(event){
        if (document.querySelector('.selected') != null) {
            document.querySelector('.selected').classList.remove('selected');
            }
            event.target.classList.add('selected');
    }

    function complet(){

    }
    if(listTask.childNodes!=null){
        var lista =listTask.childNodes;
        listTask.addEventListener('click',select);
        listTask.addEventListener('dblclick',complet);
       
      }

}