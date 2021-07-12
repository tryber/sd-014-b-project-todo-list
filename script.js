let addTask = document.querySelector('#criar-tarefa');
let textInput = document.querySelector('#texto-tarefa');
let ols = document.querySelector('#lista-tarefas')

addTask.addEventListener('click',function () {
    let text = textInput.value;

    if (text != '') {
       let createLi = document.createElement('li');
       createLi.innerText = text;
       ols.appendChild(createLi);
    }
    textInput.value = '';
});