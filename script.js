const adicionaItemNaLista = document.getElementById('criar-tarefa');
const textoDigitado = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');

function adicionaItem() {
  const elementoDaLista = document.createElement('li');
  elementoDaLista.innerHTML = textoDigitado.value;
  lista.appendChild(elementoDaLista);
  textoDigitado.value = '';
}
adicionaItemNaLista.addEventListener('click', adicionaItem);

function apaga() {
  lista.innerHTML = '';
}
const botaoDeApagar = document.getElementById('apaga-tudo');
botaoDeApagar.addEventListener('click', apaga);
