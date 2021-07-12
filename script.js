const addTask = document.querySelector('#criar-tarefa');
const textInput = document.querySelector('#texto-tarefa');
const ols = document.querySelector('#lista-tarefas')

addTask.addEventListener('click',  function () {
    let text = textInput.value;

    if (text != '') {
       let createLi = document.createElement('li');
       createLi.innerText = text;
       ols.appendChild(createLi);

        createLi.addEventListener('click',  function() {
        createLi.className = 'cor-de-fundo'
    });
    }
    
    textInput.value = '';
});
