const clicarBotao = document.getElementById('criar-tarefa');
const textoDigitado = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');

function recebeClick() {
  const elementoDaLista = document.createElement('li');
  elementoDaLista.innerHTML = textoDigitado.value;
  lista.appendChild(elementoDaLista);
  textoDigitado.value = '';
}
clicarBotao.addEventListener('click', recebeClick);
