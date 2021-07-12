// Ao clicar no botão 'Adicionar' um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo. *Help do Henrique Almeida para limpar input*
// Ordena os itens da lista de tarefas por ordem de criação
const createTask = document.querySelector('#criar-tarefa'); // button
const listItem = document.querySelectorAll('li');
const listTask = document.querySelector('#lista-tarefas'); // pega <ol>

createTask.addEventListener('click', () => {
  const input = document.querySelector('#texto-tarefa'); // <input>
  const createListItem = document.createElement('li'); // cria <li>

  if (input.value === '') alert('Campo vazio, adicione uma tarefa!');
  createListItem.innerText = input.value;
  listTask.appendChild(createListItem);

  input.value = '';
});

// Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
// .style.backgroundColor = 'rgb(128,128,128)';
listTask.addEventListener('click', (event) => {
  // for (let key = 0; key < listItem.length; key += 1) {
  //   listItem[key].style.backgroundColor = 'white';
  // }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
});
