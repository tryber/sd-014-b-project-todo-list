let getButtom = document.getElementById('criar-tarefa');
let getImput = document.getElementById('texto-tarefa');
let getList = document.getElementById('lista-tarefas');
let GetButtomApaga = document.getElementById('apaga-tudo');
let getButtomRemove = document.getElementById('remover-finalizados');
let getButtomSelec = document.getElementById('remover-selecionado');

getButtom.addEventListener('click', function(){
  let criarTarefa = document.createElement('li');
  criarTarefa.innerHTML = getImput.value
  getList.appendChild(criarTarefa);
  getImput.value = '';
})

getList.addEventListener('click', function(){
  let getLi = document.querySelectorAll('li');
  for(let i = 0; i < getLi.length; i += 1) {
    getLi[i].classList.remove('selected')
  }
  event.target.classList.add('selected');
})

getList.addEventListener('dblclick', function(){
  if (event.target.classList[0] === 'completed' || event.target.classList[1] === 'completed'){
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
})
//criando botao remover tudo
GetButtomApaga.addEventListener('click', function(){
  let getLi = document.querySelectorAll('li');
  for(let i = 0; i < getLi.length; i += 1) {
    getList.removeChild(getLi[i]);
  }
})
//criando botao remover finalizados
getButtomRemove.addEventListener('click', function(){
  let getLi = document.querySelectorAll('li');
  for(let i = 0; i < getLi.length; i += 1) {
    if (getLi[i].classList[0] === 'completed' || getLi[i].classList[1] === 'completed'){
      getList.removeChild(getLi[i]);
    }
  }
})
//criando botao remover selecionados
getButtomSelec.addEventListener('click', function(){
  let getLi = document.querySelectorAll('li');
  for(let i = 0; i < getLi.length; i += 1) {
    if (getLi[i].classList[0] === 'selected'){
      getList.removeChild(getLi[i]);
    }
  }
})