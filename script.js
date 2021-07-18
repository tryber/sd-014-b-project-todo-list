const criarbtn = document.getElementById('criar-tarefa');
const texto = document.getElementById('lista-tarefas');

criarbtn.addEventListener('click', () => {
  const content = document.getElementById('texto-tarefa').value;
  const listatual = document.createElement('li');
  listatual.innerText = content;
  texto.append(listatual);
  document.querySelector('#texto-tarefa').value = '';
});

document.addEventListener('click', (event) => {
  if (document.querySelector('.selected') != null) {
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.classList.add('selected');
});
