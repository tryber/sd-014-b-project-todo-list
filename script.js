const button = document.getElementById('criar-tarefa');
const inputTarefa = document.getElementById('texto-tarefa');
const listTarefa = document.getElementById('lista-tarefas');
// adicionando consts
function addIten() {
  const listItens = document.createElement('li'); // vai criar uma 'li' para cada novo elemento.
  listTarefa.appendChild(listItens); // vai adicionar os valores como filhos.
  listItens.innerHTML = inputTarefa.value; // adiciona os valores que foram colocados no input
  inputTarefa.value = ''; // valor no campo de input
}

button.addEventListener('click', addIten);
// onde declaro meu evento, ou seja quando ocorre um click um item é adicionado
// as funcionalidades de addIten serão adicionadas na função abaixo

function corLi(evento) {
  const li = document.querySelectorAll('li');
  for (const index of li) {
    index.style.backgroundColor = 'white';
  }
  evento.target.style.backgroundColor = 'rgb(128,128,128)';
}
const ol = document.querySelector('#lista-tarefas');
ol.addEventListener('click', corLi);


listTarefa.addEventListener('dblclick', (evento) => {
  evento.target.classList.toggle('completed');
});
