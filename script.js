const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const cleanEveryone = document.querySelector('#apaga-tudo');
const cleanCompleted = document.querySelector('#remover-finalizados');
const save = document.querySelector('#salvar-tarefas');
const allTasks = document.getElementsByClassName('item');
const up = document.querySelector('#mover-cima');
const down = document.querySelector('#mover-baixo');
const removeAll = document.querySelector('#remover-selecionado');
const answer = document.querySelector('#texto-tarefa');

// Requisito 7 e 8
// Seleciona um item da lista
function change() {
  for (let index = 0; index < allTasks.length; index += 1) {
    allTasks[index].addEventListener('click', (event) => {
      for (let index2 = 0; index2 < allTasks.length; index2 += 1) {
        allTasks[index2].classList.remove('changeBg');
        event.target.classList.add('changeBg');
      }
    });
  }
}

// Requisito 5 e 6
// Cria um item e adiciona na lista com um valor digitado
function createTask() {
  const newtask = document.createElement('li');
  newtask.className = 'item';
  if (answer.value === false) {
    alert('ERRO! DIGITE UMA TAREFA.');
  } else {
    newtask.innerText = answer.value;
    list.appendChild(newtask);
    answer.value = '';
  }
  change();
}

button.addEventListener('click', createTask);
answer.addEventListener('keypress', (event) => {
  if (event.keyCode === 13) {
    createTask();
  }
});

// Requisito 9
// Ao clicar duas vezes o item é marcado como feito
list.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

// Requisito 10
// Apaga todos os itens da lista
cleanEveryone.addEventListener('click', () => {
  list.innerHTML = '';
  localStorage.clear();
});

// Requisito 11
// Apaga itens maracados como completos
cleanCompleted.addEventListener('click', () => {
  const removeCompleted = document.getElementsByClassName('completed');
  for (let index = 0; index < removeCompleted.length; index += 0) {
    removeCompleted[index].remove();
  }
});

// Requisito 12
// Salva a lista, toda vez que carregar a página a lista salva é carregada
save.addEventListener('click', () => {
  const listHtml = list.innerHTML;
  localStorage.setItem('list', listHtml);
});

window.onload = () => {
  const saves = localStorage.getItem('list');
  list.innerHTML = saves;
  change();
};

// Requisito 13
// Sobe item selecionado
up.addEventListener('click', () => {
  const selected = document.querySelector('.changeBg');
  if (selected) {
    if (selected === allTasks[0]) {
      alert('Tarefa já está no topo!');
    } else {
      selected.parentNode.insertBefore(selected, selected.previousElementSibling);
    }
  }
});
// Desce intem selecionado
down.addEventListener('click', () => {
  const selected = document.querySelector('.changeBg');
  if (selected === null) {
    alert('Esse item não pode descer mais!');
  } else if (selected !== list.children[list.children.length - 1]) {
    selected.parentNode.insertBefore(selected.nextElementSibling, selected);
  } else {
    alert('Esse item já está na última posição!');
  }
});

// Requisito 14
// Remove item selecionado
removeAll.addEventListener('click', () => {
  const selected = document.querySelector('.changeBg');
  selected.remove();
});
