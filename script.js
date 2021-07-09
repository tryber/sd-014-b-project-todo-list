const olPath = document.querySelector('#lista-tarefas');
const inputPath = document.querySelector('#texto-tarefa');

// * Requisitos - 5, 6

document.querySelector('#criar-tarefa').addEventListener('click', function () {
  let tarefaLi = document.createElement('li');
  if (inputPath.value != '') {
    olPath.appendChild(tarefaLi).innerText = inputPath.value;
  } else {
    alert('Adicione uma tarefa!');
  }
  inputPath.value = '';

  tarefaLi.addEventListener('click', function(event) {
    addRemoveSelected(event)
  })
  tarefaLi.addEventListener('dblclick', function(event) {
    addRemoveCompleted(event)
  })

})
// 1. Bernardo Salgueiro salvador do requisito 7!!! Atribuir o evento logo após criar a Li, resolve a questão de não conseguir percorrer o array vazio de li's.
// 2. Alternativa do Luiz Gustavo

// * Requisito - 8
// * O Eli dos Santos me deu uma luz, me lembrando que existia a propriedade 'children', que traz info atualizada das child's do elemento pai. Não precisei usar '.children', porque percebi conversando com o Thiago Frozzi, que o problema eram as váriveis no início do script que iniciavam vazias, .

function addRemoveSelected (event) {
  let classSelected = document.querySelector('.selected');
  if (classSelected) {
    classSelected.classList.remove('selected');
  }
    event.target.classList.add('selected');
}

// * Requisito - 9

function addRemoveCompleted (event) {
  let classSelected = document.querySelector('.completed');
  if (classSelected) {
    classSelected.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}