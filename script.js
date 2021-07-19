function addClass(event) {
  const liSelected = document.querySelectorAll('.liCreated');
  for (let index = 0; index < liSelected.length; index += 1) {
    liSelected[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function taskCompleted(event) {
  event.target.classList.toggle('completed');
}

function newTask() {
  const li = document.createElement('li');
  const input = document.getElementById('texto-tarefa');
  const txt = document.createTextNode(input.value);
  li.appendChild(txt);
  document.getElementById('lista-tarefas').appendChild(li);
  li.classList = 'liCreated';
  li.addEventListener('click', addClass);
  li.addEventListener('dblclick', taskCompleted);
  input.value = '';
}

function clearTasks () { 
  const removeTasks = document.querySelectorAll('li');
  for(let index = 0; index < removeTasks.length; index += 1) {
    removeTasks[index].parentNode.removeChild(removeTasks[index]);
  }
}

/*
9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item
Pontos importantes sobre este requisito:

* Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

* Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.
O que será verificado:

Será verificado que, antes da ação ser disparada, o elemento adicionado à lista não tem nem a classe completed nem o estilo line-through solid rgb(0, 0, 0).

Será verificado que a ação pedida é disparada mediante duplo clique no elemento da lista e que os elementos da lista completos tem em si a classe completed e a propriedade text-decoration com o valor line-through solid rgb(0, 0, 0)

Será verificado que, com um segundo duplo clique, um elemento completo deixa de sê-lo
*/



/*
11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista
O que será verificado:

Será verificado que existe um elemento button com o id remover-finalizados

Será verificado que, ao clicar no botão, todos os elementos marcados como feitos são removidos da lista

BÔNUS
12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava
O que será verificado:

Será verificado que existe um elemento button com o id salvar-tarefas

Será verificado que, quando a lista tiver vários elementos, alguns dos quais marcados como finalizados, um recarregamento da página mantém a lista exatamente como está.
*/
const buttonSave = document.querySelector('#salvar-tarefas');


/*
13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas
Pontos importantes sobre este requisito bônus:

* Antes de começar a desenvolver essa funcionalidade, pare e pense. O que significa mover um item de uma lista para cima ou para baixo no **_DOM_**? Você já possui todas as habilidades necessárias para fazer isso.

* Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?
O que será verificado:

Será verificada a existência de dois elementos button, um com o id mover-cima e o outro com o id mover-baixo

Será verificado que, dado que diversos elementos foram acrescentados à lista, movimentá-los de formas diversas os deixa nas posições esperadas

Será verificado que, caso algum elemento esteja finalizado, este status deve persistir ainda que se mova o elemento

Será verificado que, caso nenhum elemento esteja selecionado, clicar nos botões não altera a lista

Será verificado que um elemento que esteja selecionado deve se manter selecionado mesmo depois de movido

Caso especial! Será verificado que, caso se tente subir o elemento no topo da lista ou, caso se tente descer o último elemento da lista, esta não deve ser alterada

14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado
O que será verificado:

Será verificada a presença de um elemento button com um id remover-selecionado

Será verificado que, no clicar no botão, somente o elemento selecionado é removido
*/