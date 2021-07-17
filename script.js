const buttonOne = document.querySelector('#criar-tarefa');

function moreTask() {
  const enterTask = document.querySelector('#texto-tarefa');
  const list = document.querySelector('#lista-tarefas');
  const listTask = document.createElement('li');
  listTask.className = 'itensList';
  list.appendChild(listTask);
  listTask.innerText = enterTask.value;
  enterTask.value = '';
}

buttonOne.addEventListener('click', moreTask);

function testeAdd(event) {
  console.log('deu');
  itensList = document.querySelector('.itensList.background');
  if (itensList === null) {
    event.target.classList.add('background');
  } else {
    const itemSelect = document.querySelector('.background');
    itemSelect.classList.remove('background');
    event.target.classList.add('background');
  }
}
document.querySelector('#lista-tarefas').addEventListener('click', testeAdd);

function deleteItens() {}
document.querySelector('#apaga-tudo').addEventListener('click', deleteItens);
/*const itens = document.querySelectorAll('itensList');
listTask.className = 'itensList';
for (let i = 0; i < itens.length; i++) {
  itens[i].onclick = () => {
    itens[i].className = 'background';
  };
}

const itens = document.querySelectorAll('itensList');

for (let i = 0; i < itens.length; i++) {
  const el = itens[i];
  el.onclick = () => {
    for (let j = 0; j < itens.length; j++) {
      const color = itens[j] === el ? 'red' : 'inherit';
      itens[j].style.color = color;
    }
  };
} */
