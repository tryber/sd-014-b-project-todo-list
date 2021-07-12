const addButton = document.querySelector('#criar-tarefa');
const inputText = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');

addButton.addEventListener('click', function() {
  const createList = document.createElement('li');
  const liBckgdColor = taskList.appendChild(createList);
  liBckgdColor.innerText = inputText.value;
  liBckgdColor.style.backgroundColor = 'transparent';
  inputText.value = '';
});

function selection(event) {
  const selec = event;
  for (let index = 0; index < taskList.children.length; index += 1) {
    if (selec.target.parentElement.children[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      selec.target.parentElement.children[index].style.backgroundColor = 'transparent';
    }
    if (selec.target.style.backgroundColor === 'transparent') {
      selec.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  }
}

taskList.addEventListener('click', selection);

