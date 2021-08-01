const btnCriaTarefa = document.getElementById("criar-tarefa");
const listaOrdenada = document.getElementById('lista-tarefas');
const textoTarefa   = document.getElementById('texto-tarefa');
const btnApagar     = document.getElementById('apaga-tudo');
const btnRemoverFinalizados = document.getElementById('remover-finalizados');
const btnRemoverSelecionados = document.getElementById('remover-selecionado');
const btnSalvarTarefas = document.getElementById('salvar-tarefas');



btnCriaTarefa.addEventListener('click', function() {
  const itemLista = document.createElement('li');
  listaOrdenada.appendChild(itemLista);
  itemLista.innerText = textoTarefa.value;
  itemLista.className = 'tarefa';
  textoTarefa.value = null;
});


listaOrdenada.addEventListener('click', function(t){
    const selectTask = document.querySelector('.selected');
    if(t.target.className === 'tarefa'){
      t.target.classList.add('selected');
    }
    if(selectTask !== null){
      selectTask.classList.remove('selected');
    }
});

listaOrdenada.addEventListener('dblclick', function(e){
  if(e.target.classList.contains('completed')){
    e.target.classList.remove('completed');
  }else{
    e.target.classList.add('completed');
  }
});

btnApagar.addEventListener('click', function(){
  listaOrdenada.innerHTML = '';
});

btnRemoverFinalizados.addEventListener('click', function(){
  let completos = document.querySelectorAll('.completed');
  for (var i = 0; i < completos.length; i++) {
    completos[i].remove();
  }
});

btnRemoverSelecionados.addEventListener('click',function(){
  let selecionados = document.querySelectorAll('.selected');
  for (let index = 0; index < selecionados.length; index++) {
     selecionados[index].remove();
    
  }
});

btnSalvarTarefas.addEventListener('click', function(){
  localStorage.setItem('salvos', listaOrdenada.innerHTML);
});

window.onload = function () {
  if (localStorage.getItem('salvos')) {
    listaOrdenada.innerHTML = localStorage.getItem('salvos');
  }
}