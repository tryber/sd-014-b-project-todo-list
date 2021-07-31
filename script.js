const createTask = document.querySelector('#criar-tarefa');
const clearAll = document.querySelector('#apaga-tudo');
const removeAllFinal = document.querySelector('#remover-finalizados');
const saveTasks = document.querySelector('#salvar-tarefas');
const moveUp = document.querySelector('#mover-cima');
const moveDown = document.querySelector('#mover-baixo');
// const removeSelected = document.querySelector('#remover-selecionado');
const newTask = document.querySelector('#lista-tarefas');
const inputTask = document.querySelector('#texto-tarefa');
let list = document.querySelectorAll('li');

//  questão 5 - cria-se novo item na lista
function createNewTask (){
  if (inputTask.value === '') {
    return null;
  }

  const createLisTask = document.createElement('li');
  createLisTask.innerHTML = inputTask.value;
  createLisTask.classList.add('tarefa');
  newTask.appendChild(createLisTask);
  inputTask.value = '';
}

createTask.addEventListener('click', createNewTask);

// -----------------------------------------------------------------------------------------------
// questão 7
function backgroundGray (){
  list.querySelectorAll('li');
  for (let i = 0; i < list.length; i += 1) {
    if (list[i].classList.contains('.selected')) {
      list[i].style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      list[i].style.backgroundColor = '';
    }
  }
}
// -------------------------------------------------------------------------------------
// questão 8
// function removeSelec(event) {
//   const taskSelected = event.target;
//   if (taskSelected) {
//     taskSelected.classList.remove('selected');
//   }
//   event.target.classList.add('selected');
// }
// questão 9
function completed(event){
  const riscaTask = event.target;
  if (riscaTask.classList.contains('completed')) {
    riscaTask.classList.remove('completed');
  } else {
    riscaTask.classList.add('completed');
  }
}
newTask.addEventListener('dblclick', completed);
// ---------------------------------------------------------------------------------------------
// questão 10
function clearTask() {
  newTask.innerHTML = '';
}
clearAll.addEventListener('click', clearTask);

// --------------------------------------------------------------------------------------------
// questão 11 pois é Brasil aqui estava chamando queryselector e não pela className!
function removeFinalizados (){
let fim = document.getElementsByClassName('completed');
  for (let index = 0; index < fim.length; index += 1) {
    fim[index].remove();     
  }
}
removeAllFinal.addEventListener('click', removeFinalizados);
// --------------------------------------------------------------------------------------------
//  questão 12
function saveAllTask() {
  const taskSave = newTask.innerHTML;
  localStorage.setItem('save',taskSave);
}
saveTasks.addEventListener('click', saveAllTask);

function saveLocal() {
  const saveNew = localStorage.getItem('save');
  if (saveNew !== null);
  newTask.innerHTML = saveNew;
}
saveLocal();


// ------------------------------------------------------------------------------------------
// questão 13 
function buttonUp() {
  const selectButtonUp = document.querySelector('.selected');
    if (selectButtonUp !== null) {
    const taskUp = selectButtonUp.previousElementSibling;
    if (selectButtonUp !== newTask.firstChild) {
      newTask.insertBefore(selectButtonUp, taskUp);
    }
  }
}

function buttonDown (){
  const selectButtonDown = document.querySelector('.selected');
  if (selectButtonDown !== null) {
    const taskDown = selectButtonDown.nextElementSibling;
    if (selectButtonDown !== newTask.lastChild) {
    newTask.insertBefore(selectButtonDown, taskDown.nextElementSibling);
    }
  }
}

moveUp.addEventListener('click',buttonUp);
moveDown.addEventListener('click',buttonDown);
// --------------------------------------------------------------------------------
  document.querySelector('#criar-tarefa').onclick = function () {
  if (document.querySelector('.task input').value.length === 0){
  alert ("Adicione uma tarefa!")
   }
}  

// referências;
// https://www.youtube.com/watch?v=cOUNOi297Mw&list=PLX4L0zwlay26RzUq6leLM0mdAEFQY1Rky&index=65&ab_channel=CodingArtist
// /* https://www.w3schools.com/css/css_overflow.asp
// https://desenvolvimentoparaweb.com/css/unidades-css-rem-vh-vw-vmin-vmax-ex-ch/ 