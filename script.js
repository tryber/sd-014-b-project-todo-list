let addButton = document.getElementById('criar-tarefa');

function generateTask(){
    let li = document.createElement('li');
    let list = document.getElementById('lista-tarefas');
    let inputValue = document.getElementById('texto-tarefa').value;
    let deletedInput = document.getElementById('texto-tarefa');
    li.innerText = inputValue;
    list.appendChild(li);
    let inputSection = document.getElementById('inputSection');
   inputSection.removeChild(deletedInput);
   let newInput = document.createElement('input');
   newInput.id ="texto-tarefa";
    inputSection.appendChild(newInput);

}

addButton.addEventListener('click', generateTask);