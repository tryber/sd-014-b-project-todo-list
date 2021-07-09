const button = document.querySelector('#criar-tarefa');

button.addEventListener('click', () => {
  const inputValue = document.querySelector('input');
  const listItem = document.createElement('li');
  const list = document.querySelector('#lista-tarefas');
  if (inputValue.value == false) {
    alert('Insira um valor, por favor.');
  } else {
    listItem.innerText = inputValue.value;
    list.appendChild(listItem);
  }
  inputValue.value = '';
});
