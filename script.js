const tarefaBotao = document.getElementById('criar-tarefa');
const caixaTexto = document.getElementById('texto-tarefa');
const lista = document.getElementById('lista-tarefas');
const limparTudoBotao = document.getElementById('apaga-tudo');
let itensDaLista = document.getElementsByTagName('li');

tarefaBotao.addEventListener('click', function() {
    let item = document.createElement('li')
    item.setAttribute('class', 'tarefa');
    item.innerText = caixaTexto.value;
    lista.appendChild(item);
    caixaTexto.value = "";
})


limparTudoBotao.addEventListener('click', function() {
    lista.innerHTML = '';

})

const corTarefa = document.querySelector('#lista-tarefas');

function trocaCor(event) {
  const classSelector = document.querySelector('.marcado');
  event.target.classList.add('marcado');
  if (
    classSelector !== null && classSelector !== event.target
  ) {
    classSelector.classList.remove('marcado');
  }
} 
 corTarefa.addEventListener('click', trocaCor);

 function risca(event) {
   const classSelectorDois = document.querySelector('.completed');
   if (classSelectorDois === null) {
    event.target.classList.add('completed');
   } else {
     event.target.classList.remove('completed')
   }
 }
  corTarefa.addEventListener('dblclick', risca);


const removeTarefa = document.getElementById('remover-finalizados');

function apagaRiscado() {
  const apagaFinalizado = document.querySelectorAll('.completed');
  for (let i of apagaFinalizado) {
    if (i.classList.contains('completed')) {
      lista.removeChild(i);
    }
  }
}
removeTarefa.addEventListener('click', apagaRiscado);

