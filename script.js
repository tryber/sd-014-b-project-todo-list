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
 // Função Apagar tudo
 btnApagar.onclick = function () {
    listaOrdenada.innerHTML = null;
  };

   // Função Remover Completos
   btnRemover.onclick = function () {
    const tarefaCompleta = document.querySelectorAll('.completed');
    for (let i = 0; i < tarefaCompleta.length; i++) {
      tarefaCompleta[i].remove();
    }
  };
  // Função Salvar
  btnSalvar.addEventListener('click', () => {
    const listagem = listaOrdenada.innerHTML;
    localStorage.setItem('listaSalva', listagem);
    alert('Sua lista foi salva!');
  });

  function recuperar() {
    listaOrdenada.innerHTML = localStorage.getItem('listaSalva');
  }

  recuperar();

}  