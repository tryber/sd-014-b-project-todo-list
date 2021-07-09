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

  // Função RemoverSelecao
  btnRemoveSelecao.addEventListener('click', () => {
    const tarefaSelecionada = document.querySelectorAll('.selecionado');
    for (let i = 0; i < tarefaSelecionada.length; i++) {
      tarefaSelecionada[i].remove();
    }
  });

  // Função Mover

  btnMoverCima.addEventListener('click', () => {
    if (document.querySelector('.selecionado') === null) {
      return;
    }
    const parent = document.querySelector('.selecionado').parentNode;
    const previous = document.querySelector('.selecionado').previousElementSibling;
    const current = document.querySelector('.selecionado');

    if (previous === null) {
      alert('Fim da lista.');
    } else {
      parent.insertBefore(current, previous);
    }
  });

  // Mover elemento para baixo
  btnMoverBaixo.addEventListener('click', () => {
    if (document.querySelector('.selecionado') === null) {
      return;
    }
    const parent = document.querySelector('.selecionado').parentNode;
    const next = document.querySelector('.selecionado').nextElementSibling;
    const current = document.querySelector('.selecionado');

    if (next === null) {
      alert('Fim da lista.');
    } else {
      parent.insertBefore(next, current);
    }
  });
};

// Função de mudar a cor ao clicar
listaOrdenada.addEventListener('click', (event) => {
    const selecao = document.querySelectorAll('.selecionado');
    for (let i = 0; i < selecao.length; i++) {
      selecao[i].classList.remove('selecionado');
      selecao[i].style.backgroundColor = '';
    }
    event.target.classList.add('selecionado');
    const cinza = document.querySelector('.selecionado');
    cinza.style.backgroundColor = 'rgb(128, 128, 128)';
  });
  