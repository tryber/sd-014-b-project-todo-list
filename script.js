const olPath = document.querySelector('#lista-tarefas');
const inputPath = document.querySelector('#texto-tarefa');

// * Requisitos - 5, 6 e 7

document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const tarefaLi = document.createElement('li');
  if (inputPath.value !== '') {
    olPath.appendChild(tarefaLi).innerText = inputPath.value;
  } else {
    alert('Adicione uma tarefa!');
  }
  inputPath.value = '';

  tarefaLi.addEventListener('click', addRemoveSelected);

  tarefaLi.addEventListener('dblclick', addRemoveCompleted);
});

// 1. Bernardo Salgueiro salvador do requisito 7!!! Atribuir o evento logo após criar a Li, resolve a questão de não conseguir percorrer o array vazio de li's.
// 2. Alternativa do Luiz Gustavo

// document.querySelector('#texto-tarefa').addEventListener('keydown', (event) => {
//   if (event.keyCode == 13) {
//   }
// })

// * Requisito - 8
// * O Eli dos Santos me deu uma luz, me lembrando que existia a propriedade 'children', que traz info atualizada das child's do elemento pai. Não precisei usar '.children', porque percebi conversando com o Thiago Frozzi, que o problema eram as váriveis no início do script que iniciavam vazias, .

function addRemoveSelected(event) {
  const classSelected = document.querySelector('.selected');
  if (classSelected) {
    classSelected.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

// * Requisito - 9

function addRemoveCompleted(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

// * Requisito - 10

document.querySelector('#apaga-tudo').addEventListener('click', () => {
  olPath.innerHTML = '';
});

// * Requisito - 11

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  const arrayCompleted = document.querySelectorAll('.completed');
  for (let index = 0; index < arrayCompleted.length; index += 1) {
    arrayCompleted[index].remove();
  }
});

// * Requisito - 12

document.querySelector('#salvar-tarefas').addEventListener('click', () => {
  const olInnerHtml = olPath.innerHTML;
  localStorage.setItem('olInfo', JSON.stringify(olInnerHtml));
});

window.onload = () => {
  olPath.innerHTML = JSON.parse(localStorage.getItem('olInfo'));
};

// * Requisito - 13

document.querySelector('#mover-cima').addEventListener('click', () => {
  const liSelected = document.querySelector('.selected');
  if (liSelected === olPath.firstElementChild) {
    alert('Não é possível subir mais!');
  } else if (liSelected) {
    liSelected.parentElement.insertBefore(liSelected, liSelected.previousElementSibling);
  }
});

document.querySelector('#mover-baixo').addEventListener('click', () => {
  const liSelected = document.querySelector('.selected');
  if (liSelected === olPath.lastElementChild) {
    alert('Não é possível descer mais!');
  } else if (liSelected) {
    liSelected.parentElement.insertBefore(liSelected.nextElementSibling, liSelected);
  }
});

// li.parentNode.insertBefore(li, li.previousSibling);
// li.parentNode.insertBefore(li.nextSibling, li);
// Dica do Igor Marinho

// * Requisito - 14

document.querySelector('#remover-selecionado').addEventListener('click', () => {
  const liSelected = document.querySelector('.selected');
  if (liSelected) {
    liSelected.remove();
  } else {
    alert('Não há tarefas selecionadas!');
  }
});

// Lembrete: Refatorar o código para adicionar o evento direto do array das classes, porque o localStorage faz com o que os elementos percam o eventListener.
