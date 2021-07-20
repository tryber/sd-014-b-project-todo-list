const inputText = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');

// https://www.horadecodar.com.br/2020/12/15/como-pegar-valor-de-input-com-javascript/ referencia

function criarTarefa() {
  buttonAdd.addEventListener('click', (evento) => {
    const text = inputText.value;
    const li = document.createElement('li');
    li.innerText = text;
    li.addEventListener('click', mudarCor);
    li.addEventListener('dblclick', riscarTarefa);
    ol.appendChild(li);
    inputText.value = '';
  });
}
criarTarefa();

function mudarCor(event) {
  const tarefasCriadas = document.getElementsByTagName('li');
  for (const i of tarefasCriadas) {
    i.style.removeProperty('background-color');
  }
  let li = event.srcElement;
  li.style.backgroundColor = 'rgb(128, 128, 128)';
}

function riscarTarefa(event) {
  let li = event.srcElement;
  if (li.classList.contains('completed')) {
    li.style.textDecoration = 'none';
    li.classList.remove('completed');
  } else {
    li.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    li.classList.add('completed');
  }
}

function removerFinalizados() {
  const botaoLimpar = document.getElementById('remover-finalizados');
  botaoLimpar.addEventListener('click', () => {
    const lis = document.querySelectorAll('li');
    for (let li of lis) {
      if (li.classList.contains('completed')) {
        li.remove();
      }
    }
  });
}
removerFinalizados();

function limpartodastarefas() {
  const botaoDeleteAll = document.getElementById('apaga-tudo');

  botaoDeleteAll.addEventListener('click', (event) => {
    const lis = document.querySelectorAll('li');
    for (let i = 0; i < lis.length; i += 1) {
      const listadTarefas = lis[i];
      listadTarefas.remove();
    }
  });
}
limpartodastarefas();
