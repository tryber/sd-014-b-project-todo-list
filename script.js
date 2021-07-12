window.onload = function () {
  const button = document.getElementById('criar-tarefa');
  const inputTarefa = document.getElementById('texto-tarefa');
  const listTarefa = document.getElementById('lista-tarefas');

  button.addEventListener('click', function () {
    const listItens = document.createElement('li');
    listTarefa.appendChild(listItens);
    listItens.innerHTML = inputTarefa.value;
    inputTarefa.value = '';

    listItens.addEventListener('click',  function checked(event) {
      const lis = document.querySelectorAll('li');
      const background = 'rgb(128, 128, 128)';
      for (let index = 0; index < lis.length; index += 1) {
        if (lis[index].style.backgroundColor === background) {
          lis[index].style.backgroundColor = 'white';
        } else {
          event.target.style.backgroundColor = background;
        }
      }
    });

    const eraseAll = document.getElementById('apaga-tudo');
    eraseAll.addEventListener('click', function erase(){
      listItens.remove();
    })

  });
 
  listTarefa.addEventListener('dblclick',  function completed(event) {
    const lisArray = document.querySelectorAll('li');
    if(event.target.classList.contains('completed')){
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
      }
  });

  const buttonFinished = document.getElementById('remover-finalizados');
  buttonFinished.addEventListener('click', function removeFinished(event) {
    const lisArray = document.querySelectorAll('.completed');
   for(let index = 0; index < lisArray.length; index += 1){
     lisArray[index].remove();
   }
  });
}
 // Com ajuda do colega Luiz Gustavo consegui desenrolar o item 8 e 9! Valew!
