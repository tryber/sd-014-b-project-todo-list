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
  const li = document.getElementsByTagName('li')
  for (let index = 0; index < li.length; index += 1) {
    li[index].style.backgroundColor = 'honeydew';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

const list = document.getElementById('lista-tarefas');
list.addEventListener('click', changeColor);

function completed(event){
  const li = document.getElementsByTagName('li')
  if (event.target.className == 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }  
}

list.addEventListener('dblclick', completed);


function buttonDel(event){
  const divButton2= document.getElementById('button-clean')
  const button2= document.createElement('button');
  button2.id= 'apaga-tudo'
  button2.innerText= 'Deletar Tarefas';
  divButton2.appendChild(button2);
}
buttonDel()

function reset(event){    
  const ol = document.getElementById('lista-tarefas')
  event.target.ol.removeChild(li);
}

const button2= document.querySelector('#apaga-tudo');
button2.addEventListener('dblclick', reset)