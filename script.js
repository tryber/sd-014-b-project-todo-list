let getButtom = document.getElementById('criar-tarefa');
let getImput = document.getElementById('texto-tarefa');
let getList = document.getElementById('lista-tarefas');

getButtom.addEventListener('click', function(){
  let criarTarefa = document.createElement('li');
  criarTarefa.innerHTML = getImput.value
  getList.appendChild(criarTarefa);
  getImput.value = '';
})