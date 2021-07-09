const root = document.querySelector('.root');
const toDoList = document.querySelector('#lista-tarefas');
const input = document.querySelector('#texto-tarefa');
const taskDone = document.querySelector('.completed');

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

toDoList.addEventListener('dblclick', function (event) {
    if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
    } else {
    event.target.classList.add('completed');
    }
});
