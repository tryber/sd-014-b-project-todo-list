//  5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo

function addTask() {
  const addButton = document.getElementById('criar-tarefa');
  addButton.addEventListener('click', () => {
    // eslint-disable-next-line sonarjs/no-duplicate-string
    const list = document.querySelector('#lista-tarefas');
    const input = document.getElementById('texto-tarefa');
    const listItem = document.createElement('li');
    if (input.value !== '') {
      listItem.innerText = input.value;
      list.appendChild(listItem);
      input.value = '';
    }
  });
}

//  10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista

function clearList() {
  const clearButton = document.getElementById('apaga-tudo');
  clearButton.addEventListener('click', () => {
    const listItem = document.querySelectorAll('li');
    for (let i = 0; i < listItem.length; i += 1) {
      listItem[i].remove();
    }
  });
}

//  7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128)
//  8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo

function selectListItem() {
  const list = document.querySelector('#lista-tarefas');
  // eslint-disable-next-line sonarjs/cognitive-complexity
  list.addEventListener('click', (event) => {
    const listItem = document.querySelectorAll('li');
    for (let i = 0; i < listItem.length; i += 1) {
      if (listItem[i] === event.target) {
        if (listItem[i].classList.contains('selected')) {
          listItem[i].classList.remove('selected');
        } else {
          listItem[i].classList.add('selected');
        }
      } else {
        listItem[i].classList.remove('selected');
      }
    }
  });
}

//  9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item

function riskListItem() {
  const list = document.querySelector('#lista-tarefas');
  list.addEventListener('dblclick', (event) => {
    if (!event.target.classList.contains('completed')) {
      event.target.classList.add('completed');
    } else {
      event.target.classList.remove('completed');
    }
  });
}

//  11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista

function removeCompleted() {
  const removeButton = document.getElementById('remover-finalizados');
  removeButton.addEventListener('click', () => {
    const completedTasks = document.querySelectorAll('.completed');
    if (completedTasks.length === 0) {
      alert('Nenhuma tarefa concluída');
    }
    for (let i = 0; i < completedTasks.length; i += 1) {
      completedTasks[i].remove();
    }
  });
}

//

function removeSelected() {
  const removeSelectedButton = document.getElementById('remover-selecionado');
  removeSelectedButton.addEventListener('click', () => {
    const selectedItem = document.querySelector('.selected');
    const listItem = document.querySelectorAll('li');
    let verificador = 0;
    for (let i = 0; i < listItem.length; i += 1) {
      if (listItem[i].classList.contains('selected')) {
        verificador += 1;
      }
    }
    if (verificador === 1) {
      selectedItem.remove();
    } else {
      alert('Nenhuma tarefa selecionada');
    }
  });
}

//  12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava

function savingList() {
  const saveButton = document.getElementById('salvar-tarefas');
  saveButton.addEventListener('click', () => {
    const list = document.getElementById('lista-tarefas');
    localStorage.setItem('List-Item', list.innerHTML);
  });
}

// eslint-disable-next-line func-names
window.onload = function () {
  addTask();
  clearList();
  selectListItem();
  riskListItem();
  removeCompleted();
  removeSelected();
  savingList();
  const savedList = localStorage.getItem('List-Item');
  document.getElementById('lista-tarefas').innerHTML = savedList;
};
