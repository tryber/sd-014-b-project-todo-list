/* Requisito 5 e 6 */
function createListaDeTarefa() {
  const paiDaLi = document.querySelector('#lista-tarefas');
  const listaDeTarefa = document.createElement('li');
  const input = document.querySelector('input');
  listaDeTarefa.innerText = input.value;
  paiDaLi.appendChild(listaDeTarefa);
  input.value = '';
}
const button = document.querySelector('button');
button.addEventListener('click', createListaDeTarefa);

/* Requisito 7 e 8 */

const listaOrdenada = document.querySelector('ol');
function colorirLista(event) {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    listItem[index].style.backgroundColor = 'white';
  }
  const evento = event.target;
  evento.style.backgroundColor = 'rgb(128,128,128)';
}
listaOrdenada.addEventListener('click', colorirLista);

/* Requisito 9 */
/* Uso do .toggle (Bel Alburquerque, 2021) */
function riscado(event) {
  event.target.classList.toggle('completed');
}
listaOrdenada.addEventListener('dblclick', riscado);

/* Requisito 10 */
function apagaTudo() {
  const ordenadaLista = document.querySelector('ol');
  ordenadaLista.innerHTML = '';
}
const buttonApaga = document.querySelector('#apaga-tudo');
buttonApaga.addEventListener('click', apagaTudo);

/* Requisito 11 */
function removeFinalizado() {
  const apagaFinalizado = document.querySelectorAll('li');
  const orderedList = document.querySelector('ol');
  for (let index = 0; index < apagaFinalizado.length; index += 1) {
    if (apagaFinalizado[index].classList.contains('completed')) {
      orderedList.removeChild(apagaFinalizado[index]);
    }
  }
}
const buttonFinaliza = document.querySelector('#remover-finalizados');
buttonFinaliza.addEventListener('click', removeFinalizado);

/* Requisito 12 */

const saveButton = document.querySelector('#salvar-tarefas');

function saveTasks() {
  const taskList = document.querySelector('ol').innerHTML;
  localStorage.setItem('save', taskList);
}

window.onload = () => {
  const taskList = document.querySelector('ol');
  taskList.innerHTML = localStorage.getItem('save');
};

saveButton.addEventListener('click', saveTasks);

/* Requisito 13 */
const moveUpButton = document.querySelector('#mover-cima');
function moveListItemUp() {
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    if (listItem[index].previousElementSibling && listItem[index].style.backgroundColor === 'rgb(128,128,128)') {
      listItem[index].parentElement.insertBefore(listItem[index], listItem[index].previousElementSibling);
    }
  }
}

moveUpButton.addEventListener('click', moveListItemUp);

const moveDownButton = document.querySelector('#mover-baixo');
function moveListItemDown() {
  const listItems = document.querySelectorAll('li');
  for (let index = 0; index < listItems.length; index += 1) {
    if (listItems[index].previousElementSibling && listItems[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      listItems[index].parentElement.insertBefore(listItems[index], listItems[index + 1].nextElementSibling);
    }
  }
}

moveDownButton.addEventListener('click', moveListItemDown);

/* Requisito 13 */
function deleteTaskSelect() {
  const selectedTask = document.querySelectorAll('li');
  for (let index = 0; index < selectedTask.length; index += 1) {
    if (selectedTask[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      selectedTask[index].remove();
    }
  }
}
const deleteBtn = document.querySelector('#remover-selecionado');
deleteBtn.addEventListener('click', deleteTaskSelect);
