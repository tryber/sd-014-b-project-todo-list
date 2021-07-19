window.onload = function () {
  const AddButton = document.querySelector('#criar-tarefa');
  const AddTask = document.querySelector('#lista-tarefas');
  // Adicionar tarefa ao clicar no botão
  AddButton.addEventListener('click', () => {
    const input = document.querySelector('#texto-tarefa');
    const AddList = document.createElement('li');
    if (input.value === '') alert('Adicione uma tarefa');
    AddList.innerText = input.value;
    AddTask.appendChild(AddList);
    input.value = '';
  });
};
