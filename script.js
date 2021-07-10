
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
//erro ao dar o segundo cuplo click a classe não é removida
listaOrdenada.addEventListener('dblclick',function(event){
  let lista = document.querySelectorAll('li')
  console.log(lista)
  //o for garante que apenas um elemento tenha a classe .completed
  for(let index=0;index<lista.length; index+=1){
    if(lista[index].className === 'completed'){
      console.log('oi');
      lista[index].classList.remove('completed');
    }
  }
    event.target.classList.add('completed');
    listaOrdenada.addEventListener('dblclick', function(){
      event.target.classList.remove('completed')
    })
})
