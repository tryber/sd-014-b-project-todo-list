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

// https://developer.mozilla.org/
// en-US/docs/Web/API/Element/dblclick_event

document.addEventListener('dblclick', (event) => {
  if (event.target.classList.value.includes('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});
