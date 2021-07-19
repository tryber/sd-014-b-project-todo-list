const inputText = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');

function criarTarefa() {
  buttonAdd.addEventListener('click', (evento) => {
    const text = inputText.value;
    const li = document.createElement('li');
    li.innerText = text;
    ol.appendChild(li);
    inputText.value = '';
  });
}
criarTarefa();

function doisclicks(valor) {
  valor.target.classlist.toggle('completed');
}

ol.addEventListener('dblclick', doisclicks);

function mudarCorFundo() {
  const tarefasCriadas = document.getElementsByTagName('li');
  const listaOrdenada = document.querySelector('ol');
  listaOrdenada.addEventListener('click', (evento) => {
    for (let index = 0; index < tarefasCriadas.length; index += 1) {
      const li = tarefasCriadas[index];
      li.style.backgroundColor = 'rgb(128, 128, 128)';
      li.style.backgroundColor = '';
    }
    evento.target.style.backgroundColor = 'rgb(128, 128, 128)';
    evento.target.style.height = 'auto';
    evento.target.style.width = 'auto';
  });
}
mudarCorFundo();

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
