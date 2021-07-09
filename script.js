function buttonTask(event){
  const divButton= document.getElementById('button')
  const button= document.createElement('button');
  button.id='criar-tarefa'
  button.innerText= 'Adicionar';
  divButton.appendChild(button);
}

buttonTask()



function createTask(){
  const inputText=document.querySelector('#texto-tarefa');
  const button= document.querySelector('#criar-tarefa');
  const tagOl = document.querySelector('#lista-tarefas');
  button.addEventListener('click', function(){
    const list= document.createElement('li');
    list.id='id-li'
    list.innerText= inputText.value;
    tagOl.appendChild(list);
    inputText.value='';
  })  
}

createTask()

function changeColor(event){
  const ol = document.querySelector('#lista-tarefas');
  const background = 'whoneydew' 
  neWbackground=  'rgb(128, 128, 128)'
    for(index=0; index<ol.lenght; index +=1){
      if(ol[index].style.backgroundColor != neWbackground) {
        event.target.style.backgroundColor = 'rgb(128, 128, 128'
      }      
        
    }
  }

ol.addEventListener('click', changeColor)

