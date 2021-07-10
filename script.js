
let listaOrdenada = document.querySelector('#lista-tarefas');
let addBotao = document.querySelector('#criar-tarefa');
let inputTarefa = document.querySelector('#texto-tarefa');
let linha = document.querySelector('li');

//Requisito 5 e 6:
addBotao.addEventListener('click',function(){
  let li = document.createElement('li');
  //console.log(li);
  li.innerText = inputTarefa.value;
  listaOrdenada.appendChild(li); 
  inputTarefa.value = '';
})

//Requsito 7 e 8:
function teste(){listaOrdenada.addEventListener('click',function(event){
  let lista = document.querySelectorAll('#lista-tarefas>li')
  //console.log(lista.length);
  for(let index=0; index<lista.length; index+=1){
    let fundo = lista[index].style.backgroundColor;
    //console.log("fundo")
    if(fundo === 'rgb(128, 128, 128)'){
      lista[index].style.backgroundColor = 'white';
    }
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
})}

teste()

//Requisito 9:
listaOrdenada.addEventListener('dblclick',function(event){
  let lista = document.querySelectorAll('#lista-tarefas>li')
  for(let valor of lista){
    if(valor.className === 'completed'){
      valor.classList.remove('completed');
    }
  }
  event.target.classList.add('completed');
})