
let listaOrdenada = document.querySelector('#lista-tarefas');
let addBotao = document.querySelector('#criar-tarefa');
let inputTarefa = document.querySelector('#texto-tarefa');
let linha = document.querySelector('li');
let deletar = document.querySelector('#remover-finalizados');
let apagaTudo = document.querySelector('#apaga-tudo')

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
      lista[index].style.backgroundColor = 'greenyellow';
    }
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  //event.target.classList.add('finalizados');
})}

teste()

//Requisito 9:
//erro ao dar o segundo cuplo click a classe não é removida
listaOrdenada.addEventListener('dblclick',function(event){
  let lista = document.querySelectorAll('li');
  //console.log(lista)  
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


//Requisito 10:
apagaTudo.addEventListener('click',function(event){
  let lista = document.querySelectorAll('li');
  for(let index = 0; index < lista.length; index += 1){
    lista[index].parentNode.removeChild(lista[index]);
  }
})

//Requisito 11:
deletar.addEventListener('click',function(event){
  let lista = document.querySelectorAll('li');
  for(let valor of lista){
    if(valor.className ==='completed'){
      valor.parentNode.removeChild(valor);
    }
  }
})
