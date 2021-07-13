const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');

function addInTodoList() {
  if (input.value.length === 0) {
    alert('digite uma tarefa')
  } else {
    const valueInput = input.value;
    const listLi = document.createElement('li');
    listLi.innerText = valueInput;
    listLi.className = 'to-do';
    list.appendChild(listLi);
    input.value = '';
  }
}

function changeColorLi(event) {
  const allLi = document.querySelectorAll('.to-do');
  for (let i = 0; i < allLi.length; i++) {
    allLi[i].classList.remove('to-do-grey');
  }
  event.target.classList.add('to-do-grey');
}



window.onload = function() {
  button.addEventListener('click', addInTodoList)
  list.addEventListener('click', changeColorLi)
};
