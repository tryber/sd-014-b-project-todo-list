const addButton = document.querySelector('#criar-tarefa');
const inputText = document.querySelector('#texto-tarefa');
const taskList = document.querySelector('#lista-tarefas');
const clsButton = document.querySelector('#apaga-tudo');
const buttonX = document.querySelector('#remover-finalizados');

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

// Uso do .toggle Referência https://pt.stackoverflow.com/
function riskText(event) {
  event.target.classList.toggle('completed');
}
taskList.addEventListener('dblclick', riskText);

function selectCls() {
  for (let index = taskList.children.length - 1; index >= 0; index -= 1) {
    taskList.children[index].remove();
  }
}

clsButton.addEventListener('click', selectCls);

function removeTask(event) {
  let list = document.querySelectorAll("li");
  let fatherLIst = document.querySelector('ol');
  for (let index of list) {
    if (index.classList.contains('completed')) {
      fatherLIst.removeChild(index);
    }
  }
}  

buttonX.addEventListener("click", removeTask);
