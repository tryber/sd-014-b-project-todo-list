function marcarTarefa() {
  if (!this.classList.contains('tarefa-marcada')) {
    const atual = document.querySelector('.tarefa-marcada');
    if (atual) {
      atual.classList.remove('tarefa-marcada');
    }
    this.classList.add('tarefa-marcada');
  }
}
function tarefaConcluida() {
  if (!this.classList.contains('completed')) {
    this.classList.add('completed');
    return;
  }
  this.classList.remove('completed');
}

function limparTarefas() {
  const lista = document.querySelector('#lista-tarefas');
  lista.innerText = '';
}

function limparSelecionados() {
  const remover = document.querySelectorAll('.completed');
  for (let index = 0; index < remover.length; index += 1) {
    remover[index].remove();
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
  li.addEventListener('dblclick', tarefaConcluida);
  lista.appendChild(li);
  input.value = '';
}
const criarTarefa = document.querySelector('#criar-tarefa');
criarTarefa.addEventListener('click', adicionaTarefa);
document.querySelector('#apaga-tudo').addEventListener('click', limparTarefas);
document.querySelector('#remover-finalizados').addEventListener('click', limparSelecionados);
