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
