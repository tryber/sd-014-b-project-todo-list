function listaDeTarefa() {
    const paiDaLi = document.querySelector('#lista-tarefas')
    const listaDeTarefa = document.createElement('li');
    const input = document.querySelector('input');
    listaDeTarefa.innerText = input.value;
    paiDaLi.appendChild(listaDeTarefa);
    input.value = '';
}
const button = document.querySelector('button');
button.addEventListener('click', listaDeTarefa);