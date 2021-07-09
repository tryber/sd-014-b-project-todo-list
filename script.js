const inputText = document.querySelector('#texto-tarefa');
const buttonAdd = document.querySelector('#criar-tarefa');
const fatherOfList = document.getElementById('lista-tarefas');


buttonAdd.addEventListener('click', function() {
    let childOfList = document.createElement('li');
    if (inputText.value !== ''){
    childOfList.innerText = inputText.value;
    childOfList.className = 'listItemOfTask';
    fatherOfList.appendChild(childOfList);
    }
    inputText.value = '';
})
