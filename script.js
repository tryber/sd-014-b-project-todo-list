
let listaOrdenada = document.querySelector('#lista-tarefas');
let addBotao = document.querySelector('#criar-tarefa');
let inputTarefa = document.querySelector('#texto-tarefa');
let linha = document.querySelector('li');

//Requisito 5 e 6:
addBotao.addEventListener('click',function(){
  let li = document.createElement('li');
  console.log(li);
  li.innerText = inputTarefa.value;
  listaOrdenada.appendChild(li); 
  inputTarefa.value = '';
})

//Requsito 7:
listaOrdenada.addEventListener('click',function(event){
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
})