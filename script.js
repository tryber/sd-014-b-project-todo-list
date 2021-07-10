// 5, 6
const findList = document.querySelector('#lista-tarefas');
const button = document.querySelector("#criar-tarefa");
const inputValue = document.querySelector("#texto-tarefa");
const childItens = findList.childNodes;
var selected;

function addItemInList() {
  let createLi = document.createElement('li')
  createLi.innerText = inputValue.value;
  findList.appendChild(createLi);
  inputValue.value = "";
  changeColor();
  lineThrough();
}
button.addEventListener('click', addItemInList);

// 7.

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

// 8.

/* function handleChangeColor(event) {
  const colorElement = document.querySelector('.completed');
  colorElement.classList.remove('selected');
  event.target.classList.add('selected');
} */

// 9.
function lineThrough(){
  findList.addEventListener('dblclick', function(event) {
    if (event.target.className === 'completed') {
      event.target.classList.remove("completed")
      event.target.style.textDecoration = 'none';
    } else {
      event.target.classList.add("completed")
      event.target.backgroundColor = 'white';
      event.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  })
}

