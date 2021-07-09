/* eslint-disable no-restricted-syntax */
// exercício 1
const getBody = document.querySelector('body');
const headerText = 'Minha Lista de Tarefas';
const createHeader = document.createElement('header');

getBody.appendChild(createHeader).innerText = headerText;

// exercício 2
const tituloText = 'Clique duas vezes em um item para marcá-lo como completo';
const createTitulo = document.createElement('h3');

createTitulo.innerText = tituloText;
getBody.appendChild(createTitulo).setAttribute('id', 'funcionamento');

// exercício 3
const createInput = document.createElement('input');

getBody.appendChild(createInput).setAttribute('id', 'texto-tarefa');

// exercício 4
const createOL = document.createElement('ol');

getBody.appendChild(createOL).setAttribute('id', 'lista-tarefas');

// exercício 5 e 7
const createButton = document.createElement('button');
const getInput = document.getElementById('texto-tarefa');
const getOL = document.getElementById('lista-tarefas');

getBody.appendChild(createButton).setAttribute('id', 'criar-tarefa');
const getButton = document.getElementById('criar-tarefa');
const classe = '#lista-tarefas';
const classe2 = ' li';
const getListItens = classe + classe2;

function grayTransform(evt) {
  const getLi = document.querySelectorAll(getListItens);
  for (let index = 0; index < getLi.length; index += 1) {
    if (getLi[index] === evt.target) {
      evt.target.style.backgroundColor = 'rgb(128, 128, 128)';
      evt.target.id = 'selected';
    } else {
      getLi[index].style.backgroundColor = null;
      getLi[index].id = '';

    }
  }
}
const corte = 'line-through';
// exercício 9
function jobDone(evt) {
  if (evt.target.style.textDecoration !== corte) {
    evt.target.style.textDecoration = corte;
    evt.target.className = 'completed';
  } else {
    evt.target.style.textDecoration = 'none';
    evt.target.className = '';
  }
}

function criarTarefas() {
  const createLi = document.createElement('li');
  getOL.appendChild(createLi).innerText = getInput.value;
  getInput.value = '';

  // exercício 7
  const getLi = document.querySelectorAll(getListItens);
  for (let index = 0; index < getLi.length; index += 1) {
    if (getLi[0] !== undefined) {
      getLi[index].addEventListener('dblclick', jobDone);
      getLi[index].addEventListener('click', grayTransform);
    }
  }
}

getButton.addEventListener('click', criarTarefas);

// exercício 6
console.log('xablau');

// exercício 7
console.log('xulimbs');

// exercício 10
const createButton2 = document.createElement('button');
getBody.appendChild(createButton2).id = 'apaga-tudo';

function apagaTudo() {
  const getLi = document.querySelectorAll(getListItens);
  for (let index = 0; index < getLi.length; index += 1) {
    getLi[index].remove();
  }
}

document.getElementById('apaga-tudo').addEventListener('click', apagaTudo);

// exercício 11
const createButton3 = document.createElement('button');
getBody.appendChild(createButton3).id = 'remover-finalizados';

function removeCompleted() {
  const getLi = document.querySelectorAll(getListItens);
  for (let index = 0; index < getLi.length; index += 1) {
    if (getLi[index].className === 'completed') {
      getLi[index].remove();
    }
  }
}

createButton3.addEventListener('click', removeCompleted);

// exercício 12
const createButton4 = document.createElement('button');
getBody.appendChild(createButton4).id = 'salvar-tarefas';

function storeData() {
  localStorage.clear();
  const getLi = document.querySelectorAll(getListItens);
  for (let index = 0; index < getLi.length; index += 1) {
    if (getLi[index].className !== 'completed') {
      const dataName = 'tarefa ';
      const dataNameIndex = dataName + index;
      localStorage.setItem(dataNameIndex, getLi[index].innerText);
      console.log(localStorage.getItem(dataNameIndex));
    } else {
      const dataName = 'completed ';
      const dataNameIndex = dataName + index;
      localStorage.setItem(dataNameIndex, getLi[index].innerText);
      console.log(localStorage.getItem(dataNameIndex));
    }
  }
}

createButton4.addEventListener('click', storeData);

function getSavedList() {
  const dataName = 'tarefa ';
  const dataClass = 'completed ';
  for (let index = 0; index < localStorage.length; index += 1) {
    const createLi = document.createElement('li');
    const dataNameIndex = dataName + index;
    const dataClassIndex = dataClass + index;
    if (localStorage.getItem(dataNameIndex) !== null) {
      getOL.appendChild(createLi).innerText = localStorage.getItem(dataNameIndex);
      createLi.addEventListener('dblclick', jobDone);
      createLi.addEventListener('click', grayTransform);
    } else {
      getOL.appendChild(createLi).innerText = localStorage.getItem(dataClassIndex);
      createLi.addEventListener('dblclick', jobDone);
      createLi.addEventListener('click', grayTransform);
      createLi.className = 'completed';
      createLi.style.textDecoration = corte;
    }
  }
}
getSavedList();

// exercício 13
const createButton5 = document.createElement('button');
getBody.appendChild(createButton5).id = 'mover-cima';
const createButton6 = document.createElement('button');
getBody.appendChild(createButton6).id = 'mover-baixo';

function moveUp() {
  const getLi = document.querySelectorAll(getListItens);
  for (let index = 0; index < getLi.length; index += 1) {
    if (index !== 0 && getLi[index].id === 'selected') {
      const getUp = getLi[index].innerText;
      const idUp = getLi[index].id;
      const classUp = getLi[index].className;
      const colorUp = getLi[index].style.backgroundColor;
      getLi[index].innerText = getLi[index - 1].innerText;
      getLi[index].id = getLi[index - 1].id;
      getLi[index].className = getLi[index - 1].className;
      getLi[index].style.backgroundColor = getLi[index - 1].style.backgroundColor;
      getLi[index - 1].innerText = getUp;
      getLi[index - 1].id = idUp;
      getLi[index - 1].className = classUp;
      getLi[index - 1].style.backgroundColor = colorUp;
    }
  }
}
function moveDown() {
  const getLi = document.querySelectorAll(getListItens);
  for (let index = 0, cont = 0; index < getLi.length && cont < 1; index += 1) {
    if (index !== (getLi.length - 1) && getLi[index].id === 'selected') {
      const getDown = getLi[index].innerText;
      const idDown = getLi[index].id;
      const classDown = getLi[index].className;
      const colorUp = getLi[index].style.backgroundColor;
      getLi[index].innerText = getLi[index + 1].innerText;
      getLi[index].id = getLi[index + 1].id;
      getLi[index].className = getLi[index + 1].className;
      getLi[index].style.backgroundColor = getLi[index + 1].style.backgroundColor;
      getLi[index + 1].innerText = getDown;
      getLi[index + 1].id = idDown;
      getLi[index + 1].className = classDown;
      getLi[index + 1].style.backgroundColor = colorUp;
      cont += 1;
    }
  }
}
createButton5.addEventListener('click', moveUp);
createButton6.addEventListener('click', moveDown);

// exercício 14
const createButton7 = document.createElement('button');
getBody.appendChild(createButton7).id = 'remover-selecionado';

function removeSelected() {
  const getLi = document.querySelectorAll(getListItens);
  for (let index = 0; index < getLi.length; index += 1) {
    if (getLi[index].id === 'selected') {
      getLi[index].remove();
    }
  }
}

createButton7.addEventListener('click', removeSelected);
