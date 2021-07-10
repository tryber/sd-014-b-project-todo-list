// Requisito 5 e 6

function removeInputText() {
  let input = document.querySelector('#texto-tarefa');
  input.value = '';
}

function changeColor (event) {
  let lis = document.getElementsByClassName('tarefa');
  for (let index of lis) {
    index.style.backgroundColor = 'white';  
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}

function teskDone(event) {
  let lis = document.getElementsByClassName('tarefa');
  if (event.target.className.includes('completed')) {
    for (let index = 0; index <= lis.length; index += 1) {
      event.target.classList.remove('completed')
    }
  } else {
    for (let index = 0; index <= lis.length; index += 1) {
      event.target.classList.add('completed');
    }
  }
}

function addTextList() {
  let input = document.querySelector('#texto-tarefa');
  let li = document.createElement('li');
  li.className = 'tarefa';
  li.style.backgroundColor = 'white';
  li.innerHTML = input.value;
  document.querySelector('#lista-tarefas').appendChild(li);
  li.addEventListener('click', changeColor);
  li.addEventListener('dblclick', teskDone);
  removeInputText();
}

let buttonAdd = document.getElementById('criar-tarefa');
buttonAdd.addEventListener('click', addTextList);

function removeList() {
  let lis = document.getElementsByClassName('tarefa');
  while (lis.length > 0) { // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
    for (let index of lis) {
      index.parentNode.removeChild(index);
    }
  }
}

let buttonRemoveAll = document.getElementById('apaga-tudo');
buttonRemoveAll.addEventListener('click', removeList);

function removeCheck() {
  let lis = document.getElementsByClassName('tarefa');
  for (let index = lis.length - 1; index >= 0; index -= 1) {
    console.log(lis.length);
    console.log(lis[index].classList.value);
    if (lis[index].classList.value === 'tarefa completed') {
      lis[index].parentNode.removeChild(lis[index]);
    }
  }
}

let buttonRemoveCheck = document.getElementById('remover-finalizados');
buttonRemoveCheck.addEventListener('click', removeCheck);
