window.onload = function (){

    let getButton = document.querySelector('#criar-tarefa');
    let getList = document.querySelector('#lista-tarefas');
    let getInput = document.querySelector('#texto-tarefa');

    getButton.addEventListener('click', createNewTask);

    function createNewTask (){
        let listItem = document.createElement('li');
        listItem.className = 'newTask'
        listItem.innerHTML = getInput.value;
        getList.appendChild(listItem);
        getInput.value = '';
    }

  
}

