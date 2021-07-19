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
  for (const index of listItem) {
    index.style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
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
  const listaOrdenada = document.querySelector('ol');
  listaOrdenada.innerHTML = '';
}
const buttonApaga = document.querySelector('#apaga-tudo');
buttonApaga.addEventListener('click', apagaTudo);

/* Requisito 11 */
function removeFinalizado() {
  const apagaFinalizado = document.querySelectorAll('li');
  const listaOrdenada = document.querySelector('ol');
  for (let index of apagaFinalizado) {
    if (index.classList.contains('completed')) {
      listaOrdenada.removeChild(index);
    }
  }
}
const buttonFinaliza = document.querySelector('#remover-finalizados');
buttonFinaliza.addEventListener('click', removeFinalizado);
