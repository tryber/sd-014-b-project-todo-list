const buttonCreateTask = document.getElementById('criar-tarefa');
const listOfTasks = document.getElementById('lista-tarefas');
const childrenList = listOfTasks.children;

// Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.

function selected(event) {
  const evento = event.target;
  const classTask = document.querySelectorAll('li');
  for (let index = 0; index < classTask.length; index += 1) {
    const childrenIndex = classTask[index];
    const indexClass = childrenIndex.classList;
    if (indexClass.contains('selected')) {
      indexClass.remove('selected');
    }
    evento.classList.add('selected');
  }
}
listOfTasks.addEventListener('click', selected);
// Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.
// Consegui resolver, apos ajuda do Lucas Alves e Henrique Almeida.

function createClass(event) {
  const classCompleted = 'completed';
  if (event.target.classList.contains(classCompleted)) {
    event.target.classList.remove(classCompleted);
  } else {
    event.target.classList.add(classCompleted);
  }
}
listOfTasks.addEventListener('dblclick', createClass);
// Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
// Ajuda do Colega Victor Martins.

function createNewTask() {
  const input = document.getElementById('texto-tarefa');
  const addTask = document.createElement('li');
  if (input.value !== '') {
    listOfTasks.appendChild(addTask);
    addTask.classList.add('task');
    addTask.innerHTML = input.value;
    input.value = '';
  } else {
    alert('Insira sua Tarefa!');
  }
}

buttonCreateTask.addEventListener('click', createNewTask);

// Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista.
const buttonClear = document.getElementById('apaga-tudo');

buttonClear.addEventListener('click', () => {
  listOfTasks.innerHTML = '';
  localStorage.clear('luizsmatos');
});

// 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista.

const buttonClearCompleted = document.getElementById('remover-finalizados');

function apagaFinalizados() {
  const childs = document.getElementsByClassName('completed');
  for (let index = 0; index < childs.length; index += 0) {
    const childsIndex = childs[index];
    childsIndex.remove();
  }
}
buttonClearCompleted.addEventListener('click', apagaFinalizados);

// 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava.

const buttonSave = document.getElementById('salvar-tarefas');

buttonSave.addEventListener('click', () => {
  const save = listOfTasks.innerHTML;
  localStorage.setItem('luizsmatos', save);
});

function autoSave() {
  const openSave = localStorage.getItem('luizsmatos');
  const listTask = document.getElementById('lista-tarefas');
  listTask.innerHTML = openSave;
}
window.onload = () => {
  autoSave();
};

// Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas.

const buttonUpper = document.getElementById('mover-cima');
const buttonLower = document.getElementById('mover-baixo');

// https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
// Referencia usada para utilizacao da funcao insertBefore, que "muda" o elemento com o elemento anterior.
// Ajuda do Colega Henrique Almeida.

buttonUpper.addEventListener('click', () => {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected === null) {
    alert('Nenhuma tarefa selecionada!');
  } else if (taskSelected !== childrenList[0]) {
    taskSelected.parentElement.insertBefore(taskSelected, taskSelected.previousSibling);
  } else {
    alert('Ja esta no topo');
  }
});

buttonLower.addEventListener('click', () => {
  const taskSelected = document.querySelector('.selected');
  if (taskSelected === null) {
    alert('Nenhuma tarefa selecionada!');
  } else if (taskSelected !== childrenList[childrenList.length - 1]) {
    taskSelected.parentElement.insertBefore(taskSelected, taskSelected.nextSibling.nextSibling);
  } else {
    alert('Ultima tarefa!');
  }
});

const buttonClearSelected = document.getElementById('remover-selecionado');

buttonClearSelected.addEventListener('click', () => {
  const taskSelected = document.querySelector('.selected');
  taskSelected.remove();
});
