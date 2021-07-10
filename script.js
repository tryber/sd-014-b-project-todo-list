// Ao clicar no botão 'Adicionar' um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
const createTask = document.querySelector('#criar-tarefa'); // button

createTask.addEventListener('click', () => {
  const listTask = document.querySelector('#lista-tarefas'); // pega ol
  const input = document.querySelector('#texto-tarefa'); // texto input
  const listItem = document.createElement('li'); // cria li

  if (input.value === '') alert('Campo vazio, adicione uma tarefa!');
  listItem.innerText = input.value;
  listTask.appendChild(listItem);

  input.value = '';
});
