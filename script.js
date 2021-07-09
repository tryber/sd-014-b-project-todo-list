//æqui identificamos os caminhos dos itens que vamos usar

const list = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const submitBtn = document.getElementById('criar-tarefa');
const eraseAllBtn = document.getElementById('apaga-tudo');

// a função espera um evento, armazenamos tudo que tem a classe selected e armazenamos na variável selected. Caso ela seja diferente de nulo, a função irá remover a classe selected. Depois ele adiciona a classe selected no alvo do evento.

function selectTask(event) {
  const selected = document.querySelector('.selected');
  if (selected !== null) {
    selected.classList.remove('selected');
  }
  event.target.classList.add('selected');
}

// a função espera um evento, armazenamos o alvo do evento na variável item e efetuamos a comparação: se o item possui a classe completed, ele remove essa classe, se não tiver, ele a adiciona.

function completeTask(event) {
  const item = event.target;
  if (item.className.includes('completed')) {
    item.classList.remove('completed');
  } else {
    item.classList.add('completed');
  }
}

// a função não espera nenhum parâmetro, ao iniciar ela cria uma lista (li), que é armazenada a uma variável. O texto a ser exibido será o mesmo valor do digitado no input. Após isso a lista será adicionada como filha da lisrItem e o valor do input é zerado. O list item que é nossa lista sera adicionado o evento no clique vai executar a funcao selectTask e depois no duplo clique a função completeTask;

function addListItem() {
  const listItem = document.createElement('li');
  listItem.innerText = input.value;
  list.appendChild(listItem);
  input.value = '';
  listItem.addEventListener('click', selectTask);
  listItem.addEventListener('dblclick', completeTask);
}

// a função não espera nenhum parâmetro, ao iniciar ela recupera todos os li e guarda numa variável e percorre essa lista removendo o nó filho a partir do último filho da nossa lista.

function clearList() {
  const listItens = document.querySelectorAll('li');
  for (let index = 0; index < listItens.length; index += 1) {
    list.removeChild(list.lastChild);
  }
}

// submitBtn que é o botão com id criar tarefa vai escutar o evento ao ser clicado e executar a função addListItem;

submitBtn.addEventListener('click', addListItem);

// eraseBtn que é o botão com id apaga-tudo vai escutar o evento ao ser clicado e executar a função clearlist;
eraseAllBtn.addEventListener('click', clearList);
