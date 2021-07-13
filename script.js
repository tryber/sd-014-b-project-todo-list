const button1 = document.querySelector('button');
const parentLi = document.querySelector('#lista-tarefas');
const input1 = document.querySelector('input');
const ols = document.querySelector('ol');
const body = document.querySelector('body');

function list() {
  const lis = document.createElement('li');
  lis.innerText = input1.value;
  parentLi.appendChild(lis);
  input1.value = '';
}

button1.addEventListener('click', list);

function addCor(event) {
  const allLi = document.querySelectorAll('li');
  for (const index of allLi) {
    index.style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = ' rgb(128, 128, 128)';
}

ols.addEventListener('click', addCor);

//referencia por Bel Albuquerque
//

function sublinha(event) {
  event.target.classList.toggle('completed');
}

ols.addEventListener('dblclick', sublinha);

let button2 = document.createElement('button');
button2.setAttribute("id", "apaga-tudo");
button2.innerText = 'Apaga Tudo';
body.appendChild(button2)

function apaga(){
  const ol = document.querySelector('ol');
   ol.innerHTML = ''
}
button2.addEventListener('click', apaga)


