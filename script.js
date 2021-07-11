const addButton = document.querySelector('#criar-tarefa');
const insertText = document.querySelector('#texto-tarefa');
const taskList = document.getElementById('lista-tarefas');

addButton.addEventListener('click', function() {
    let createList = document.createElement('li');
    if (insertText.value !== '') {
        createList.innerText = insertText.value;
        createList.className = 'listTask';
        createList.addEventListener('click', function(){
            if (createList.style.backgroundColor !== 'rgb(128, 128, 128)') {
                createList.style.backgroundColor = 'rgb(128, 128, 128)';
            }
        });
        taskList.appendChild(createList);
    }    
    insertText.value = ''; 
});
   