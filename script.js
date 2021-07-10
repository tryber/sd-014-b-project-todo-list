document.querySelector('h1').innerText = "Minha Lista de Tarefas";
document.querySelector('#funcionamento').innerText = "Clique duas vezes em um item para marcá-lo como completo";

let addTextTarefa = document.querySelector('#texto-tarefa');
let addInputBotton = document.querySelector('#criar-tarefa');
let addListTarefa = document.querySelector('#lista-tarefas');

//Requisito 5 e 6 campo input terá a tarefa digitada pelo usuário e ao clicar no botão irá jogar o valor para dentro da lista ordenada
function addNewTarefa() {
  addInputBotton.addEventListener('click' , function() { // adicionado uma  função toda vez que o evento click é executado no botão
    let newTarefa = document.createElement('li'); // lista é criada é atribuída a variavél newTarefa
    newTarefa.innerText = addTextTarefa.value; // newTarefa recebe do valor digitado no input addTextTarefa 
    newTarefa.classList.add('teste');
    addListTarefa.appendChild(newTarefa); //adiciona o filho nova tarefa a lista de tarefas na lista ol.
    addTextTarefa.value = '';  //comando limpa o input após a execução
  })
}
addNewTarefa();

// Requisito 7 e 8 Deixa cinza o background dos itens da lista quando clicados, deixando apenas o ultimo click com o background cinza

function colorItemList() {
  addListTarefa.addEventListener('click', function (event) { // adicionado a função alvo, toda vez que é executado o evento click na lista de tarefas(addListTarefa)
  let itemList = document.querySelectorAll('.backColorCinza');//variável recebe a classe backcolor , adicionada no css
  for (let index = 0; index < itemList.length; index += 1) {
    itemList[index].classList.remove('backColorCinza');
    }
    event.target.classList.add('backColorCinza');
  });
}
colorItemList();



  let selectList = document.querySelector('#lista-tarefas');
  selectList.addEventListener('dblclick', riscaItemList);
  
  function riscaItemList(event) {
    document.getElementsByClassName('teste');
    event.target.classList.toggle('completed');
  }
riscaItemList();

