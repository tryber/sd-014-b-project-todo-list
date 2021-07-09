debugger;

function adicionaTarefa() {
  let input = document.getElementById('texto-tarefa');
  let lista = document.querySelector('#lista-tarefas');
  let li = document.createElement('li');
  let texto = document.createTextNode(input.value);
  li.appendChild(texto);
  lista.appendChild(li);
  input.value = '';
}
let criarTarefa = document.querySelector('#criar-tarefa');
criarTarefa.addEventListener('click',adicionaTarefa);