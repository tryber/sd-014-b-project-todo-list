const inputText = document.querySelector('#texto-tarefa');
const buttonAdd = document.querySelector('#criar-tarefa');
const fatherOfList = document.getElementById('lista-tarefas');


buttonAdd.addEventListener('click', function() {
    let childOfList = document.createElement('li');
    if (inputText.value !== ''){
    childOfList.innerText = inputText.value;
    childOfList.className = 'listItemOfTask';
    childOfList.addEventListener('click', function (event){
        const currentColor = event.target.style.backgroundColor;
        if (currentColor !== 'rgb(128, 128, 128)') {
            event.target.style.backgroundColor = 'rgb(128, 128, 128)';
        }
        else if (currentColor ==='rgb(128, 128, 128)') {
            event.target.style.backgroundColor = 'white';
        };
        const currentItems = [];
        for (let index =0; index < document.getElementsByTagName('li').length; index += 1) {
            currentItems.push(document.getElementsByTagName('li')[index]);
        }
        for (let index =0; index < currentItems.length; index += 1) {
            if(currentItems[index] !== event.target) {
                currentItems[index].style.backgroundColor = 'white';
            }
        }
    })
    childOfList.addEventListener('dblclick', function(event){
        const currentSetItem = event.target.style.textDecoration;
        if (currentSetItem !== 'line-through solid rgb(0, 0, 0)') {
            event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
            event.target.classList.add('completed');
        }
        else if (currentSetItem === 'line-through solid rgb(0, 0, 0)'){
            event.target.style.textDecoration = 'none';
            event.target.classList.remove('completed');
        }
    })
    fatherOfList.appendChild(childOfList);
    }
    inputText.value = '';
});

//---------------------------------------------------------------------------------------

