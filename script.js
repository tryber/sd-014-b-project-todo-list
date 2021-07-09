const createTaskButton = document.getElementById('criar-tarefa');
const orderedList = document.getElementById('lista-tarefas');
const textTask = document.querySelector('#texto-tarefa');
const buttonContainer = document.querySelector('.buttons-container');

// 5 - Ao clicar no botão com id="criar-tarefa", o texto do input  será criado ao final da lista e o texto será limpo.
// 6 - Ordene os itens da lista de tarefas por ordem de criação - esse requisito é suprido pela tag da lista ordenada.

const clearText = () => {
  textTask.value = '';
};

const newTask = () => {
  const newLi = document.createElement('li');
  newLi.innerText = textTask.value;
  newLi.classList.add('task');
  newLi.style.backgroundColor = 'white';
  orderedList.appendChild(newLi);
};

createTaskButton.addEventListener('click', () => {
  if (textTask.value.length > 0) {
    newTask();
    clearText();
  } else {
    alert('Error: Digite ao menos 1 caractere.');
  }
});

textTask.addEventListener('keyup', (event) => {
  if (event.keyCode === 13 && textTask.value.length > 0) {
    newTask();
    clearText();
  }
});

// 7 - Clicar em um item da lista altera sua cor de fundo para cinza rgb(128,128,128)
// 8 - Não é possível selecionar mais de um elemento da lista ao mesmo tempo.
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/childNodes
// sintaxe: noReferencia.childNodes - sons é uma coleção ordenada de objetos node que são filhos do elemento corrente, após recuperá-los passam por um loop para definir o que fazem.
orderedList.addEventListener('click', (event) => {
  const silverColor = event.target;
  const sons = orderedList.childNodes;
  // a const sons captura os nós filhos da ol
  for (let i = 0; i < sons.length; i += 1) {
    const tasks = sons[i];
    tasks.style.backgroundColor = 'white';
    if (tasks.style.backgroundColor === 'white') {
      tasks.classList.remove('selected');
    }
  }
  silverColor.style.backgroundColor = 'rgb(128, 128, 128)';
  silverColor.classList.add('selected');
});

// 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. É possível desfazer essa ação clicando novamente duas vezes no item.
orderedList.addEventListener('dblclick', (event) => {
  const itemCompleted = event.target;
  itemCompleted.classList.toggle('completed');
});

// 10 - Adiciona um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista.
function createRemoveAllButton(buttonName) {
  const newButton = document.createElement('button');

  newButton.innerHTML = buttonName;
  newButton.id = 'apaga-tudo';
  buttonContainer.appendChild(newButton);
}
createRemoveAllButton('Apagar tarefas');

const removeAll = document.getElementById('apaga-tudo');

removeAll.addEventListener('click', () => {
  const task = document.querySelectorAll('.task');
  for (let li = 0; li < task.length; li += 1) {
    task[li].remove();
  }
});

// 11 - Adiciona botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da lista
function createRemoveSelectedButton(buttonName) {
  const newButton = document.createElement('button');

  newButton.innerHTML = buttonName;
  newButton.id = 'remover-finalizados';
  buttonContainer.appendChild(newButton);
}
createRemoveSelectedButton('Remove tarefa finalizada');

const removeCompleted = document.getElementById('remover-finalizados');

removeCompleted.addEventListener('click', () => {
  const position = document.querySelectorAll('.completed');
  for (let i = 0; i < position.length; i += 1) {
    position[i].remove();
  }
});

// 13 - Adiciona dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitem mover o item selecionado para cima ou para baixo na lista de tarefas
function createMoveUpButton(buttonName) {
  const newButton = document.createElement('button');

  newButton.innerHTML = buttonName;
  newButton.id = 'mover-cima';
  buttonContainer.appendChild(newButton);
}
createMoveUpButton('Move tarefa para cima');

const buttonMoveUp = document.querySelector('#mover-cima');

buttonMoveUp.addEventListener('click', () => {
  const moveTaskUp = document.querySelectorAll('.task');
  for (let i = 0; i < moveTaskUp.length; i += 1) {
    const liUp = moveTaskUp[i];
    if (liUp.style.backgroundColor === 'rgb(128, 128, 128)') {
      liUp.parentNode.insertBefore(liUp, liUp.previousElementSibling);
    }
  }
});

function createMoveLowButton(buttonName) {
  const newButton = document.createElement('button');

  newButton.innerHTML = buttonName;
  newButton.id = 'mover-baixo';
  buttonContainer.appendChild(newButton);
}
createMoveLowButton('Mover tarefa para baixo');

const buttonMoveLow = document.getElementById('mover-baixo');

buttonMoveLow.addEventListener('click', () => {
  const moveTaskLow = document.querySelectorAll('.task');
  for (let i = 0; i < moveTaskLow.length; i += 1) {
    const liLow = moveTaskLow[i];
    if (liLow.style.backgroundColor === 'rgb(128, 128, 128)') {
      liLow.parentNode.insertBefore(liLow.nextElementSibling, liLow);
    }
  }
});

// 14 - Adiciona um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado
function removeSelectedButton(buttonName) {
  const newButton = document.createElement('button');

  newButton.innerHTML = buttonName;
  newButton.id = 'remover-selecionado';
  buttonContainer.appendChild(newButton);
}
removeSelectedButton('Remover tarefa selecionada');

const removeSelected = document.getElementById('remover-selecionado');

removeSelected.addEventListener('click', () => {
  const selected = document.querySelector('.selected');
  selected.remove();
});
// removeSelected.addEventListener('click', () => {
//   const selected = document.querySelectorAll('.selected');
//   for (let i = 0; i < selected.length; i += 1) {
//     if (selected[i].classList.contains('selected')) {
//       selected[i].remove();
//     }
//   }
// });
