

document.querySelector('h1').innerText = "Minha Lista de Tarefas";
document.querySelector('#funcionamento').innerText = "Clique duas vezes em um item para marcá-lo como completo";
document.querySelector('#apaga-tudo').innerText = "Apaga tudo";
document.querySelector('#criar-tarefa').innerText = "Criar tarefa";
document.querySelector('#remove-finalizados').innerText = "Remover Finalizados";


let addTextTarefa = document.querySelector('#texto-tarefa');
let addInputBotton = document.querySelector('#criar-tarefa');
let addListTarefa = document.querySelector('#lista-tarefas');



//Requisito 5 e 6 campo input terá a tarefa digitada pelo usuário e ao clicar no botão irá jogar o valor para dentro da lista ordenada

function addNewTarefa() {
  addInputBotton.addEventListener('click' , function() { // adicionado uma  função toda vez que o evento click é executado no botão
    let newTarefa = document.createElement('li'); // lista é criada é atribuída a variavél newTarefa
    newTarefa.innerText = addTextTarefa.value; // newTarefa recebe do valor digitado no input addTextTarefa 
    addListTarefa.appendChild(newTarefa); //adiciona o filho nova tarefa a lista de tarefas na lista ol.
    addTextTarefa.value = '';  //comando limpa o input após a execução
  });
}
addNewTarefa();

// Requisito 7 e 8 Deixa cinza o background dos itens da lista quando clicados, deixando apenas o ultimo click com o background cinza

function colorItemList() {
  addListTarefa.addEventListener('click', function(event) { // adicionado a função alvo, toda vez que é executado o evento click na lista de tarefas(addListTarefa)
  let itemList = document.querySelectorAll('.backColorCinza');//variável recebe a classe backcolor , adicionada no css
  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].classList.remove('backColorCinza');
    }
    event.target.classList.add('backColorCinza');
  });
}
colorItemList();

// Requisito 9

//Pesquisado externamente a função toggle, que funciona como um interruptor, quando clicado ativa a função e quando clicado novamente a função é desativada;
//link:https://www.w3schools.com/howto/howto_js_toggle_class.asp
//link: https://tableless.com.br/manipulando-o-uso-de-classes-com-classlist-api/


function riscaItemCompleto() {
  addListTarefa.addEventListener('dblclick',function(event){ //Escutador em addListTarefa que quando haver um duplo click na lista #lista-tarefas, executará a função, se no local haver a tag li, então ele irá adicionar a classe completed declarada.
  if (event.target.localName === 'li') {
    event.target.classList.toggle('completed');
  }
});
}
riscaItemCompleto();


//Requisito 10

function apagaTudo(){
  let apagaTudoButton = document.querySelector('#apaga-tudo');
  apagaTudoButton.addEventListener('click', function(){
    addListTarefa.innerText = '';
  });
  }
  apagaTudo();


// Requisito 11

function delItemComplet() {
  const itemComplet = document.querySelectorAll('.completed');

  for (let index = 0; index < itemComplet.length; index += 1) {
    itemComplet[index].remove('li');
  }
}

const itemFinalizado = document.querySelector('#remover-finalizados');
itemFinalizado.addEventListener('click', delItemComplet);
