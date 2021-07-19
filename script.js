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
  event.target.className = 'selected';
})

getList.addEventListener('dblclick', function(){
  event.target.classList.toggle('completed');
})

GetButtomApaga.addEventListener('click', function(){
  let getLi = document.querySelectorAll('li');
  for(let i = 0; i < getLi.length; i += 1) {
    getList.removeChild(getLi[i]);
  }
})

