// 5, 6 
const findList = document.querySelector('#lista-tarefas');
const button = document.querySelector("#criar-tarefa");
const inputValue = document.querySelector("#texto-tarefa");
const finished = document.querySelectorAll('.completed')
const deleteAll = document.querySelector('#apaga-tudo');
const liList = document.getElementsByClassName('li-list');
const deleteFinished = document.querySelector('#remover-finalizados');

function addItemInList() {
  let createLi = document.createElement('li');
  createLi.innerText = inputValue.value;
  createLi.classList.add('li-list');
  findList.appendChild(createLi);
  inputValue.value = "";
  changeColor();
}
button.addEventListener('click', addItemInList);

// 7 e 8.

function changeColor() {findList.addEventListener('click', function(event) {
    let list = document.querySelectorAll('#lista-tarefas>li');
    for (let index = 0; index < list.length; index += 1) {
      let backColor = list[index].style.backgroundColor;
      if (backColor === 'rgb(128, 128, 128)') {
        list[index].style.backgroundColor = 'white';
      }
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
};
changeColor();

// 9.
function lineCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

findList.addEventListener('dblclick', lineCompleted);

// 10.

function clearList() {
  while (findList.hasChildNodes()) {  
    findList.removeChild(findList.firstChild);
  }
}

deleteAll.addEventListener('click', clearList);

// 11.

function clearFinished() {
  let completed = document.querySelectorAll('.completed');
  completed.forEach((e) => e.parentNode.removeChild(e))
}

deleteFinished.addEventListener('click', clearFinished);
