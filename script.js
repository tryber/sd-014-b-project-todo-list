
/* 
addTask.addEventListener('click',function () {
    let text = textInput.value;

    if (text != '') {
        let createLi = document.createElement('li');
        createLi.innerText = text;
        ols.appendChild(createLi);

        createLi.addEventListener('click', function () {
            let liItem = document.querySelectorAll('li');
            for(let index = 0; index < liItem)
        });
    }
    
    textInput.value = '';
});  */
let button = document.querySelector('#criar-tarefa');
let ol = document.querySelector('#lista-tarefas');

function createLi () {
    let textInput = document.querySelector('#texto-tarefa');
    let text = textInput.value;
    let createElementLi = document.createElement('li');
    
    createElementLi.innerText = text;
    ol.appendChild(createElementLi);
    textInput.value = '';
// abaixo é verificado se o elemento possui a classe cor-de-fundo
    createElementLi.addEventListener('click' , function (event) {
        let liItem = document.querySelectorAll('li');

        for(let index = 0; index < liItem.length; index += 1) {
            liItem[index].style.backgroundColor = 'white';
        }
        event.target.style.backgroundColor = 'rgb(128,128,128)';
    });
}
button.addEventListener('click' , createLi);









