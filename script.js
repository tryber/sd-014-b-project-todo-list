// Requisito 5 e 6

function removeInputText() {
  let input = document.querySelector('#texto-tarefa');
  input.value = '';
}

function changeColor (event) {
  let lis = document.getElementsByClassName('tarefa');
  for (let index = 0; index <= lis.length; index += 1) {
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    // lis[index].style.backgroundColor = 'white';
  }
}

function addTextList() {
  let input = document.querySelector('#texto-tarefa');
  let li = document.createElement('li');
  li.className = 'tarefa';
  li.innerHTML = input.value;
  document.querySelector('#lista-tarefas').appendChild(li);
  li.addEventListener('click', changeColor);
  removeInputText();
}

let button = document.getElementById('criar-tarefa');
button.addEventListener('click', addTextList);
