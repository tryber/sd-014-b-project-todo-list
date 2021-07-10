// 5, 6
const findList = document.querySelector('#lista-tarefas');
const button = document.querySelector("#criar-tarefa");
const inputValue = document.querySelector("#texto-tarefa");
const childItens = findList.childNodes;

function addItemInList() {
  let createLi = document.createElement('li')
  createLi.innerText = inputValue.value;
  findList.appendChild(createLi);
  inputValue.value = "";
  changeColor();
  // risca as lis
  createLi.addEventListener('dblclick', lineCompleted)
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
  if (document.querySelector('.completed')) {
    event.target.classList.remove("completed")
  } else {
    event.target.classList.add('completed')
  }
}
