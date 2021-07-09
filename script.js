const root = document.querySelector('.root');
const toDoList = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');

let button = document.createElement('button');
button.id = 'criar-tarefa';
toDoList.appendChild(button);

button.addEventListener('click', function () {
  let riseMyGloriousCreation = document.createElement('li');
  riseMyGloriousCreation.innerText = input.value;
  riseMyGloriousCreation.classList.add('li');
  toDoList.appendChild(riseMyGloriousCreation);
  input.value = '';
});

toDoList.addEventListener('click', function (event) {
  for (let value of toDoList.children) {
    if (value.style.backgroundColor === 'rgb(128, 128, 128)') {
      value.style.backgroundColor = 'white';
    }
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
});

