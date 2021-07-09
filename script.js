function createItem(){
    let input = document.getElementById('texto-tarefa');
    let ol = document.querySelector('ol');
    let li = document.createElement('li');
    li.innerText = input.value;
    ol.appendChild(li);
    input.value = '';
    };

let button = document.getElementById('criar-tarefa');
button.addEventListener('click', createItem);
