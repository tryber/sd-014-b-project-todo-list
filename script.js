const inputText = document.querySelector('#texto-tarefa');
const buttonAdd = document.querySelector('#criar-tarefa');
let fatherOfList = document.getElementById('lista-tarefas');


buttonAdd.addEventListener('click', function() {
    let childOfList = document.createElement('li');
    if (inputText.value !== ''){
    childOfList.innerText = inputText.value;
    childOfList.className = 'listItemOfTask';
    childOfList.style.fontSize = '12px';
    childOfList.addEventListener('click', function (event){
        const currentColor = event.target.style.backgroundColor;
        if (currentColor !== 'rgb(128, 128, 128)') {
            event.target.style.backgroundColor = 'rgb(128, 128, 128)';
        }
        else if (currentColor ==='rgb(128, 128, 128)') {
            event.target.style.backgroundColor = 'rgb(117, 181, 206)';
        };
        const currentItems = [];
        for (let index =0; index < document.getElementsByTagName('li').length; index += 1) {
            currentItems.push(document.getElementsByTagName('li')[index]);
        }
        for (let index =0; index < currentItems.length; index += 1) {
            if(currentItems[index] !== event.target) {
                currentItems[index].style.backgroundColor = 'rgb(117, 181, 206)';
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

const divInput = document.getElementById('inputAndButton');

function createButton () {
    const buttonCreated = document.createElement('button');
    buttonCreated.innerText = 'Apagar todos os itens da lista';
    buttonCreated.id = 'apaga-tudo';
    divInput.appendChild(buttonCreated);
    buttonCreated.addEventListener('click', function () {
    let deleteWithClick = document.querySelectorAll('.listItemOfTask');
        for (let index = 0; index < deleteWithClick.length; index += 1){
            deleteWithClick[index].parentNode.removeChild(deleteWithClick[index]);
            }
    })
}
createButton();

//------------------------------------------------------------------------------------------------

const apagarFinalizados = document.getElementById('remover-finalizados');

apagarFinalizados.addEventListener('click', function () {
    let deletarCompletado = document.querySelectorAll('.completed');
    for (index = 0; index < deletarCompletado.length; index += 1) {
            deletarCompletado[index].parentNode.removeChild(deletarCompletado[index]);
    }
});