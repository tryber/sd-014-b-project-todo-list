function changeColor(event){
  const li = document.querySelectorAll('.id-li'); //pego a li
  for(index=0; index<li.length; index +=1){ //faço um for para percorre os elementos do array li     
    li[index].style.backgroundColor = "honeydew";    
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
} 


//risca os completos
function completed(event){
  const li2 = document.querySelectorAll('.id-li')
  if(li2.classList === 'completed'){
    event.target.classList.remove('completed');
  }
  else{
    event.target.classList.add('completed');
  }
}


function createTask() {
  const inputText = document.querySelector('#texto-tarefa');
  const button = document.querySelector('#criar-tarefa');
  const tagOl = document.querySelector('#lista-tarefas');
  button.addEventListener('click', function () {
    const list = document.createElement('li');
    list.className = 'id-li';
    list.addEventListener('click', changeColor)
    list.addEventListener('dblclick', completed);
    list.innerText = inputText.value;
    tagOl.appendChild(list);
    inputText.value = '';
  });
}

createTask();

//apaga as tarefas
function resetTask(){
  const ol= document.getElementById('lista-tarefas');
  ol.textContent='';
}

const buttonApagaTudo = document.getElementById('apaga-tudo');
buttonApagaTudo.addEventListener('click', resetTask);  

//remover finalizados 
function resetFinalizados(){
  const li = document.getElementsByTagName('li');
  const ol = document.querySelector('#lista-tarefas');
  for(index=0; index<li.length; index +=1){
    console.log(li)
    console.log(ol)
    if(li[index].classList.contains('completed')){
      ol.removeChild(li[index]);
    }
  }
}

const buttonRemoveFinalizados = document.querySelector('#remover-finalizados');
buttonRemoveFinalizados.addEventListener('click', resetFinalizados);