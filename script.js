const createTaskButton = document.getElementById('criar-tarefa');
const orderedList = document.getElementById('lista-tarefas');
const textTask = document.querySelector('#texto-tarefa');

// 5 - Ao clicar no botão com id="criar-tarefa", o texto do input  será criado ao final da lista e o texto será limpo.
// 6 - Ordene os itens da lista de tarefas por ordem de criação - esse requisito é suprido pela tag da lista ordenada.

const clearText = () => {
  textTask.value = '';
};

const newTask = () => {
  const newLi = document.createElement('li');
  newLi.innerText = textTask.value;
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
// Referência: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/childNodes
// sintaxe: noReferencia.childNodes - sons é uma coleção ordenada de objetos node que são filhos do elemento corrente, após recuperá-los passam por um loop para definir o que fazem.
orderedList.addEventListener('click', (event) => {
  const silverColor = event.target;
  const sons = orderedList.childNodes;
  // a const sons captura os nós filhos da ol
  for (let i = 0; i < sons.length; i += 1) {
    const tasks = sons[i];
    tasks.style.backgroundColor = 'white';
  }
  silverColor.style.backgroundColor = 'rgb(128, 128, 128)';
});
