const listaOrdenada = document.getElementById('lista-tarefas');
const string = '';


window.onload = function () {
    const btnEnviar = document.getElementById('criar-tarefa');
    const novaTarefa = document.getElementById('texto-tarefa');
    const btnApagar = document.getElementById('apaga-tudo');
    const btnMoverCima = document.getElementById('mover-cima');
    const btnMoverBaixo = document.getElementById('mover-baixo');
    const btnSalvar = document.getElementById('salvar-tarefas');
    const btnRemoveSelecao = document.getElementById('remover-selecionado');
    const btnRemover = document.getElementById('remover-finalizados');
    const selecao = document.querySelectorAll('.selecionado');

      // Função Criar
  btnEnviar.onclick = function () {
    if (novaTarefa.value.length > 0) {
      const lista = document.createElement('li');
      lista.innerHTML += novaTarefa.value;
      listaOrdenada.appendChild(lista);
      novaTarefa.value = string;
    } else {
      alert('Você precisa digitar uma tarefa!');
    }
  };

  
}  