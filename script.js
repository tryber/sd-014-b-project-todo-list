const btnCriaTarefa = document.getElementById("criar-tarefa");
const listaOrdenada = document.getElementById('lista-tarefas');
const textoTarefa   = document.getElementById('texto-tarefa');
const buttonApagaTudo     = document.getElementById('apaga-tudo');
const buttonRemoveFinalizados = document.getElementById('remover-finalizados');
const buttonRemove = document.getElementById('remover-selecionado');
const buttonSave = document.getElementById('salvar-tarefas');



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

buttonApagaTudo.addEventListener('click', function(){
  listaOrdenada.innerHTML = '';
});

buttonRemoveFinalizados.addEventListener('click', function(){
  let completos = document.querySelectorAll('.completed');
  for (var i = 0; i < completos.length; i++) {
    completos[i].remove();
  }
});

buttonRemove.addEventListener('click',function(){
  let selecionados = document.querySelectorAll('.selected');
  for (let index = 0; index < selecionados.length; index++) {
     selecionados[index].remove();

  }
});

buttonSave.addEventListener('click', function(){
  localStorage.setItem('salvos', listaOrdenada.innerHTML);
});

window.onload = function () {
  if (localStorage.getItem('salvos')) {
    listaOrdenada.innerHTML = localStorage.getItem('salvos');
  }
} 
