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
  //atributing class name
  line.classList.add('item');
  //appending list item to ordered list
  taskList.appendChild(line);
  //"blanking" text input
  textTask.value = '';
};

taskList.addEventListener('click', alterBackground);
function alterBackground(evento) {
  let items = document.querySelectorAll('.item');
  //removing class "selected" from all items
  for (let index = 0; index < items.length; index++) {
    items[index].classList.remove('selected');
  }
  //adding class selected to clicked item
  evento.target.classList.add('selected');
};

taskList.addEventListener('dblclick', lineThrough);
function lineThrough(evento) {
  //adding class completed to clicked item
  evento.target.classList.add('completed');
};

//atributes the button "apaga-tudo" to "clearItAll"
const clearItAll = document.querySelector('#apaga-tudo');
//calls the function when clicks the button
clearItAll.addEventListener('click', clearAll);

function clearAll() {
  //verifying if it still has a last element
  while (taskList.lastElementChild) {
    //removes the last element of "taskList"
    taskList.removeChild(taskList.lastElementChild);
  };
};

//atributes the button "apaga-tudo" to "clearItAll"
const removeComplete = document.querySelector('#remover-finalizados');
//calls the function when clicks the button
removeComplete.addEventListener('click', removeCompleted);

function removeCompleted() {
  let items = document.querySelectorAll('.completed');

  for (let i = 0; i < items.length; i++) {
    items[i].parentNode.removeChild(items[i]);
  };
};
