//creating const to recieve the HTML tag input
const textTask = document.querySelector('#texto-tarefa');
//creating const to recieve ordered list
const taskList = document.querySelector('#lista-tarefas');
//creating cost to recieve button
const buttonSend = document.getElementById('criar-tarefa');
//adding Event Listener for when it click the button, calls the function
buttonSend.addEventListener('click', sendTask);

function sendTask() {
  //creating list item
  let line = document.createElement('li');
  //atributing textTask's value to list item's html
  line.innerHTML = textTask.value;
  //appending list item to ordered list
  taskList.appendChild(line);
  textTask.value = '';
}
