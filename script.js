const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const cleanEveryone = document.querySelector('#apaga-tudo');
const cleanCompleted = document.querySelector('#remover-finalizados');

// Requisito 5 e 6
button.addEventListener('click', () => {
  const answer = document.querySelector('#texto-tarefa');
  const newtask = document.createElement('li');

  // Requisito 7 e 8
  newtask.addEventListener('click', () => {
    // eslint-disable-next-line no-restricted-syntax
    for (const index of list.children) {
      if (index.className === 'item changeBg') {
        index.classList.remove('changeBg');
      }
      newtask.classList.add('changeBg');
    }
  });
  newtask.className = 'item';
  newtask.innerText = answer.value;
  list.appendChild(newtask);
  answer.value = '';
});

// Requisito 9
list.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

// Requisito 10
cleanEveryone.addEventListener('click', () => {
  list.innerHTML = '';
});

// Requisito 11
cleanCompleted.addEventListener('click', () => {
  const removeCompleted = document.getElementsByClassName('completed');
  for (let index = 0; index < removeCompleted.length; index += 0) {
    removeCompleted[index].remove();
  }
});
