let buttonAddTask = document.querySelector('#criar-tarefa');

let listParent = document.querySelector('#lista-tarefas');
console.log(buttonAddTask);


buttonAddTask.addEventListener('click', criarTarefa);

function criarTarefa() {
  let novaTarefa = document.createElement('li');
  let input = document.querySelector('#texto-tarefa');
  let inputValue = input.value;
  novaTarefa.innerText = inputValue;
  listParent.appendChild(novaTarefa);
  document.querySelector('#texto-tarefa').value ='';
  console.log(input);
  console.log(inputValue);
}