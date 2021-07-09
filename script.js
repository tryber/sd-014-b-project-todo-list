function marcarTarefa() {
  if (!this.classList.contains('.tarefa-marcada')) {
    const atual = document.querySelector('.tarefa-marcada');
    if (atual) {
      atual.classList.remove('tarefa-marcada');
    }
    this.classList.add('tarefa-marcada');
  }
}
function adicionaTarefa() {
  let input = document.getElementById('texto-tarefa');
  let lista = document.querySelector('#lista-tarefas');
  let li = document.createElement('li');
  li.classList.add('item-li');
  let texto = document.createTextNode(input.value);
  li.appendChild(texto);
  li.addEventListener('click', marcarTarefa);
  lista.appendChild(li);
  input.value = '';
}
const criarTarefa = document.querySelector('#criar-tarefa');
criarTarefa.addEventListener('click', adicionaTarefa);

