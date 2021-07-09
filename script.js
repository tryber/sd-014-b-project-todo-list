// Requisito 2
const instructions = document.createElement('p');
instructions.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
document.getElementById('header').appendChild(instructions);

// Requisito 3

const input = document.querySelector('.input-task'); // seleciona o local de append child
const inputTask = document.createElement('input');
inputTask.type = 'text';
inputTask.id = 'texto-tarefa';
input.appendChild(inputTask);

// Requisito 4

const task = document.querySelector('.task-list'); // seleciona o local de append child 
const taskList = document.createElement('ol');
taskList.id = 'lista-tarefas';
task.appendChild(taskList);

// Requisito 5

const button = document.querySelector('.button-input-task'); // seleciona o local de append child 
const buttonInput = document.createElement('button');
button.id = 'criar-tarefa';
buttonInput.innerText = "Adicionar tarefa";
button.appendChild(buttonInput);

function addAnotherTask() {
  const text = inputTask.value; // define uma variável para armazenar p valor do input 
  if (text === '') {
    alert('Insira uma tarefa!');
  }
  const ol = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  li.classList.add('taskItem');
  li.id = 'task-item';
  li.innerText = text; // aqui retorna o valor do input para adicionar na lista
  ol.appendChild(li);
  document.getElementById('myForm').reset(); // https://www.w3schools.com/Jsref/met_form_reset.asp
}

buttonInput.addEventListener('click', addAnotherTask);
