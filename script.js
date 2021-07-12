const button1 = document.querySelector('button');
const parentLi = document.querySelector('#lista-tarefas');
const input1 = document.querySelector('input');

function list() {
  const lis = document.createElement('li');
  lis.innerText = input1.value;
  parentLi.appendChild(lis);
  input1.value = '';
}

button1.addEventListener('click', list);
