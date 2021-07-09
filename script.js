const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const taskList = document.querySelector('#lista-tarefas');

// criando tarefa (elemento li)
function addTask() {
  const li = document.createElement('li');
  li.innerText = input.value;
  li.className = 'classLi'
  taskList.appendChild(li);
  input.value = '';
};

button.addEventListener('click', addTask);

// colorindo a tarefa (li especificada)
function liGetColor(event) {
  const qtdLi = document.querySelectorAll('.classLi');
    
  // all li become white
  for (let index = 0; index < qtdLi.length; index += 1) {
    qtdLi[index].classList.remove('colorGray');
  }
 
  // clicked li become gray
  event.target.classList.add('colorGray');
}

taskList.addEventListener('click', liGetColor);
