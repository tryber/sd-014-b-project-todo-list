/* VINICIUS SANTANA */
const addButton = document.getElementById('criar-tarefa'); // #5-
const input = document.getElementById('texto-tarefa'); // #5-
const ol = document.getElementById('lista-tarefas'); // #5-

// Requisito #7
function backgroundList (event) {
    const evento = event.target;
    // 1 se (sem cor)>pintar e apagar restante 2.se(cor) nada a fazer
    const coloredItem = document.querySelector('.select');
    if (coloredItem === null) {
        evento.style.backgroundColor = 'rgb(128, 128, 128)';
        evento.classList.add('select');
    } else {
        coloredItem.style.backgroundColor = '';
        coloredItem.classList.remove('select');
        evento.style.backgroundColor = 'rgb(128, 128, 128)';
        evento.classList.add('select');
    }

}

function listEvent () {
    const list = document.querySelectorAll('.item-lista');
    console.log(list);
    for (let index = 0; index < list.length; index += 1) {
        list[index].addEventListener('click', backgroundList); // [#7]adiciona eventos a li
    }
}

// requisito #5
function criaTarefa () {
    const criaItem = document.createElement('li'); // 2-cria li
    criaItem.innerHTML = input.value; // 3-adiciona texto na li
    criaItem.classList.add('item-lista'); // [requisito #7] adiciona class para usar em outro requisito
    ol.appendChild(criaItem); // 4-adiciona li na ol
    listEvent (); // [requisito #7] adiciona evento ao li
    input.value = ''; // 5-Apaga o conteúdo do input
}
addButton.addEventListener('click', criaTarefa); // 1 - Ao clicar inicia função já declarada



