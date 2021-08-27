const botaoCriarTarefa = document.getElementById('criar-tarefa');
const inputTextoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const buttonDeleteAll = document.getElementById('apaga-tudo');
const deleteCompletedButton = document.getElementById('remover-finalizados');
const buttonSaveTasks = document.getElementById('salvar-tarefas');
const buttonUp = document.getElementById('mover-cima');
const buttonDown = document.getElementById('mover-baixo');
const removeSelectedButton = document.getElementById('remover-selecionado');
const tarefaCompleted = 'tarefa completed';

function addTarefaLista() {
  const tarefa = document.createElement('li');
  listaTarefas.appendChild(tarefa);
  tarefa.innerText = inputTextoTarefa.value;
  tarefa.className = 'tarefa';
  inputTextoTarefa.value = '';
}
botaoCriarTarefa.addEventListener('click', addTarefaLista);

function removeId() {
  const tarefas = document.getElementsByClassName('tarefa');
  for (let i = 0; i < tarefas.length; i += 1) {
    tarefas[i].removeAttribute('id');
  }
}

function corDeFundoItemLista(event) {
  const tarefa = event.target;
  if (tarefa.className === 'tarefa' || tarefa.className === tarefaCompleted) {
    if (tarefa.id === 'selected') {
      tarefa.removeAttribute('id');
    } else {
      removeId();
      tarefa.id = 'selected';
    }
  }
}
listaTarefas.addEventListener('click', corDeFundoItemLista);

function completedTasks(event) {
  if (event.target.className === tarefaCompleted) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
listaTarefas.addEventListener('dblclick', completedTasks);

function deleteAll() {
  listaTarefas.innerHTML = '';
}

buttonDeleteAll.addEventListener('click', deleteAll);

function deleteCompleted() {
  const tarefas = document.getElementsByClassName('tarefa');
  for (let i = tarefas.length - 1; i >= 0; i -= 1) {
    if (tarefas[i].className === tarefaCompleted) {
      listaTarefas.removeChild(tarefas[i]);
    }
  }
}

deleteCompletedButton.addEventListener('click', deleteCompleted);

function saveTasks() {
  localStorage.setItem('list', listaTarefas.innerHTML);
}

buttonSaveTasks.addEventListener('click', saveTasks);

// function moveUp() {
//   const array = document.querySelectorAll('.tarefa');
//   const selected = document.querySelector('#selected');
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] === selected) {
//       for (let iTrocado = index - 1; iTrocado >= 0; iTrocado -= 1) {
//         for (let iTroca = index; iTroca >= 0; iTroca -= 1) {
//           if (iTrocado < index) {
//             const position = array[iTrocado].innerHTML;
//             array[iTrocado].innerHTML = array[index].innerHTML;
//             array[iTroca].innerHTML = position;
//             array[iTrocado].id = 'selected';
//             array[iTrocado].style.backgroundColor = cor;
//             array[index].removeAttribute('id');
//             array[index].style.backgroundColor = '';
//             if (array[index].className === tarefaCompleted) {
//               array[index].classList.remove('completed');
//               array[iTrocado].className = tarefaCompleted;
//             }
//             break;
//           }
//         }
//         break;
//       }
//       break;
//     }
//   }
// }

function moveUp() {
  const selected = document.querySelector('#selected');
  if (selected.previousElementSibling !== null) {
    const position = selected.previousElementSibling.innerHTML;
    selected.previousElementSibling.innerHTML = selected.innerHTML;
    selected.previousElementSibling.id = 'selected';
    selected.innerHTML = position;
    selected.removeAttribute('id');
    if (selected.className === tarefaCompleted) {
      selected.classList.remove('completed');
      selected.previousElementSibling.className = tarefaCompleted;
    }
  }
}

buttonUp.addEventListener('click', moveUp);

// function moveDown () {
//   const array = document.querySelectorAll('.tarefa');
//   const selected = document.querySelector('#selected');
//   for (let index = 0; index < array.length; index += 1) {
//     if (array[index] === selected) {
//       for (let iTrocado = index + 1; iTrocado < array.length; iTrocado += 1) {
//         for (let iTroca = index; iTroca < array.length; iTroca += 1) {
//           if (iTrocado > index) {
//             const position = array[iTrocado].innerHTML;
//             array[iTrocado].innerHTML = array[index].innerHTML;
//             array[iTroca].innerHTML = position;
//             array[iTrocado].id = 'selected';
//             array[iTrocado].style.backgroundColor = cor;
//             array[index].removeAttribute('id');
//             array[index].style.backgroundColor = '';
//             if (array[index].className == tarefaCompleted) {
//               array[index].classList.remove('completed');
//               array[iTrocado].className = tarefaCompleted;
//             }
//             break;
//           }
//         }
//         break;
//       }
//       break;
//     }
//   }
// }

function moveDown() {
  const selected = document.querySelector('#selected');
  if (selected.nextElementSibling !== null) {
    const position = selected.nextElementSibling.innerHTML;
    selected.nextElementSibling.innerHTML = selected.innerHTML;
    selected.nextElementSibling.id = 'selected';
    selected.innerHTML = position;
    selected.removeAttribute('id');
    if (selected.className === tarefaCompleted) {
      selected.classList.remove('completed');
      selected.nextElementSibling.className = tarefaCompleted;
    }
  }
}
buttonDown.addEventListener('click', moveDown);

function removeSelected() {
  const selectedTask = document.getElementById('selected');
  listaTarefas.removeChild(selectedTask);
}
removeSelectedButton.addEventListener('click', removeSelected);

window.onload = () => {
  listaTarefas.innerHTML = localStorage.getItem('list');
};
