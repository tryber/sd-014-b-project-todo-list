/* VINICIUS SANTANA */
const addButton = document.getElementById('criar-tarefa'); // 5-
const input = document.getElementById('texto-tarefa'); // 5-
const ol = document.getElementById('lista-tarefas'); // 5-

// requisito #5
function criaTarefa () {
    const criaItem = document.createElement('li'); // 2-cria li
    criaItem.innerHTML = input.value; // 3-adiciona texto na li
    ol.appendChild(criaItem); // 4-adiciona li na ol
    input.value = ''; // 5-Apaga o conteúdo do input
}
addButton.addEventListener('click', criaTarefa); // 1 - Ao clicar inicia função
