const button = document.querySelector('#criar-tarefa');
const tasks = document.querySelectorAll('.item');
const list = document.querySelector('#lista-tarefas');


// Requisito 5 e 6
button.addEventListener('click', () => {
  const answer = document.querySelector('#texto-tarefa');
  const newtask = document.createElement('li');
  const listItem = document.querySelectorAll('li');
  

  // Requisito 7
  newtask.addEventListener('click', ()=> {
    
    for(let index of list.children){
      if(index.className === 'item changeBg') {
        index.classList.remove('changeBg');
      }
      newtask.classList.add('changeBg');
    }
  });

  newtask.className ='item';
  newtask.innerText = answer.value;
  list.appendChild(newtask);
  answer.value = '';
});

